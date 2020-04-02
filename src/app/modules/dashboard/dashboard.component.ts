import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Node, Link } from 'src/app/d3/models';
import APP_CONFIG from '../../app.config';
import { Covid19Service } from 'src/app/services/covid19.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  pieChart = [];
  cardChart = [];
  nodes: Node[] = [];
  links: Link[] = [];
  countries = [];
  loading: boolean;
  totalCases: any;
  recovered: any;
  deaths: any;
  activeCases: any;

  constructor(
    private dashboardService: DashboardService,
    private covid19: Covid19Service
  ) {
    // this.loading = true;
    let data = null;
    /*
    this.covid19.getCountriesWhereCoronavirusHasSpread().subscribe(res => {
      this.loading = false;
      const items = res['table'];
      items.forEach(element => {
        this.countries = this.countries.concat(element);
      });
      console.log(this.countries);
      data = res;
      console.log(res);
    });
    */

    const N = APP_CONFIG.N,
      getIndex = number => number - 1;
    // Construction the nodes array
    for (let i = 1; i <= N; i++) {
      const num = Number(i);
      this.nodes.push(new Node(num.toString()));
    }
    for (let i = 1; i < N; i++) {
      for (let m = 2; i * m < N; m++) {
        // increasing connections toll on connecting nodes
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        // connection the nodes before starting the simulation
        this.links.push(new Link(i, i * m));
      }
    }
  }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.pieChart = this.dashboardService.pieChart();
    this.cardChart = this.dashboardService.card();
    this.activeCases = {
      criticalStates: 0,
      inMidCondition: 0,
      currently_infected_patients: 0
    };
    this.covid19.getAllReports().subscribe(res => {
      const reports = res['reports'];
      if (reports !== null && reports !== undefined) {
        const obj = reports[0];
        if (reports !== null && reports !== undefined) {
          this.totalCases = obj['cases'];
          this.deaths = obj['deaths'];
          this.recovered = obj['recovered'];
          const cas_actives = obj['active_cases'];
          if (cas_actives !== null && cas_actives !== undefined) {
            this.activeCases = cas_actives[0];
          }
        }
      }
    },
    err => {

    });
  }

}

import { Component, OnInit, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { D3Service } from 'src/app/services/d3.service';
import { ForceDirectedGraph, Node } from 'src/app/d3/models';

@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input() nodes;
  @Input() links;

  graph: ForceDirectedGraph;
  public _options: {width, height} = {width: 800, height: 600};

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }

  constructor( private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}

import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
// import {} from 'googlemaps';
import { PatientServiceService } from 'src/app/services/patient-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StoreServiceService } from 'src/app/services/store-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { PatientMapItemComponent } from '../patient-map-item/patient-map-item.component';

@Component({
  selector: 'app-repartition-geo',
  templateUrl: './repartition-geo.component.html',
  styleUrls: ['./repartition-geo.component.scss']
})
export class RepartitionGeoComponent implements OnInit, AfterViewInit {
  patient: any;
  address: string;
  private geoCoder;
  latitude: number;
  longitude: number;
  title = 'AGM project';
  zoom: number;
  patients: any[];
  // coordinates: any[];

  @ViewChild('search', {static: true}) public searchElementRef: ElementRef;
  // @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  // map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private patientService: PatientServiceService,
    private dialog: MatDialog,
    private store: StoreServiceService,
    private userService: UserServiceService,
  ) { }

  // setCenter(e: any) {
  //   e.preventDefault();
  //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  // }

  ngOnInit() {
    this.latitude = 40.730610;
    this.longitude = -73.935242;
  }

  showErroMessage(msg) {

  }

  showSuccessMessage(msg) {

  }

  setCoordinates(feature) {
    const coords = feature.geometry.coordinates;
    this.latitude = coords[0];
    this.longitude = coords[1];
  }

  openDataItem(pId) {
    const patient = this.patients.find(p => p.id === pId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = 'auto';
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      patient
    };

    const dialogRef = this.dialog.open(PatientMapItemComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
      }
    });
  }

  setMapType(mapTypeId: string) {
    // this.map.setMapTypeId(mapTypeId);
  }

  ngAfterViewInit(): void {
   // this.mapInitializer();
  }
}

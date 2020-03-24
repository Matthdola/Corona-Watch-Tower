import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
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
export class RepartitionGeoComponent implements OnInit {
  patient: any;
  address: string;
  private geoCoder;
  // map: google.maps.Map;
  latitude: number;
  longitude: number;
  title = 'AGM project';
  zoom: number;
  patients: any[];
  coordinates: any[];

  @ViewChild('search', {static: true}) public searchElementRef: ElementRef;


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
    // this.store.showLoading();
    /*
    this.patientService.getPatients(token).subscribe(
      res => {
        this.patients = res;
        this.coordinates = [];
        this.patients.forEach(feature => {
            const coords = {
              featureId: feature.id,
              latitude: feature.geometry.coordinates[0],
              longitude: feature.geometry.coordinates[1],
            };
            this.coordinates.push(coords);
        });
        this.latitude = this.coordinates[0].latitude;
        this.longitude = this.coordinates[0].longitude;
        this.zoom = 12;
        // this.store.hideLoading();
      },
      err => {
        this.showErroMessage(err);
        // this.store.hideLoading();
      }
    );
    */
    // this.setCurrentLocation();
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

  openDataItem(featureId) {
    console.log(featureId);
    const feature = this.patients.find(f => f.id === featureId);
    console.log(feature);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = 'auto';
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      feature
    };

    const dialogRef = this.dialog.open(PatientMapItemComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
      }
    });
  }

  // Get Current Location Coordinates
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  setMapType(mapTypeId: string) {
    // this.map.setMapTypeId(mapTypeId);
  }

}

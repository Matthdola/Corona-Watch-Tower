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
  // map: google.maps.Map;
  latitude: number;
  longitude: number;
  title = 'AGM project';
  zoom: number;
  patients: any[];
  // coordinates: any[];

  @ViewChild('search', {static: true}) public searchElementRef: ElementRef;
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;

  markers = [
    {
      position: new google.maps.LatLng(40.73061, 73.935242),
      map: this.map,
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.06485, 34.763226),
      map: this.map,
      title: "Marker 2"
    }
  ];

  // Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  // Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Hello World!"
  });

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

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    // Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    // Adding default marker to map
    this.marker.setMap(this.map);

    // Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      // Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      // creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      // Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      // Adding marker to google map
      marker.setMap(this.map);
    });
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreServiceService } from 'src/app/services/store-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}

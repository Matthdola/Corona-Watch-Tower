import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreServiceService } from 'src/app/services/store-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('fform', {static: false}) feedFormDirectives: any;

  errMsg: string;
  submitingForm: boolean;
  formreseted: boolean;
  private messageBox: any;

  @ViewChild('messageBox', {static: false}) set content(content: any) {
    if (!!content) {
      this.messageBox = content;
    }
  }
  message = '';
  showMessage = false;

  user: any = {
    name: '',
    password: '',
    email: '',
    uref: '',
    created: '',
  };

  formErrors = {
    username: '',
    password: ''
  };

  validationMessages = {
    username: {
      required: 'Username est obligatoire',
      minLength: 'Username doit avoir au moins 2 caractères.',
      maxLength: 'Username doit avoir au plus 25 caractères.'
    },
    password: {
      required: 'Mot de pass obligatoire',
      minLength: 'Le mot de pass doit avoir au moins 6 caractères.'
    },
  };

  constructor(
    private store: StoreServiceService,
    private router: Router,
    private userService: UserServiceService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.message =  'password must be at least 6 character long.';
  }

  onSubmit() {
    // this.store.showLoading();
    /*
    this.userService.loginUser(this.user).subscribe(
      res => {
        this.store.saveToken(res);
        this.getUser(res);
        this.dialogRef.close();
      },
      errmess => {
        // this.store.hideLoading();
        this.showMessage = true;
        this.showErroMessage(errmess);
      }
    );
    */
  }

  showErroMessage(msg) {
    this.message = msg;
    this.showMessage = true;
    setTimeout(() => {
      this.messageBox.showCritical();
    });
  }

  showSuccessMessage(msg) {
    this.message = msg;
    this.showMessage = true;
    setTimeout(() => {
      this.messageBox.showSuccess();
    });
  }

  getUser(token) {
    /*
    this.userService.getUser(token).subscribe(
      res => {
        // persistUser(res);
        this.user = res;
        this.store.user = res;
        this.router.navigate(['/']);
        // this.store.hideLoading();
      },
      err => {
        this.showErroMessage(err);
        // this.store.hideLoading();
        return;
      }
    );
    */
  }

  updateUser(u) {
    this.store.user = this.user;
  }

  deleteUser(u) {
  }

  signupUser(u) {
  }

  /**
   * This method redirect the user to the resseting page
   */
  openPasswordResetingPage(event) {
    event.preventDefault();
    this.dialogRef.close();
    event.stopPropagation();
  }



  /**
   * This method redirect the user to the signup page
   */
  openSignUp(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}

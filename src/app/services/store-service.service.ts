import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  token: string;
  user: any;
  patients: any[];
  globalData: any;

  constructor() { }
}

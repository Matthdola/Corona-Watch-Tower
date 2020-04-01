import { Injectable } from '@angular/core';
import * as covid19 from 'covid19-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Covid19Reports, JonsHpkinsData } from '../models/CodivCase';

export const BASE_URL = 'https://covid19-server.chrismichael.now.sh/api/v1/';
export const VIRUS_DATA_URL =
'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-25-2020.csv';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  /*
  reports,
  reportsByCountries,
  deaths,
  situationReports,
  TaskForceUS,
  globalData,
  testsInUS,
  fatalityRateByAge,
  fatalityRateBySex,
  fatalityRateByComorbidities,
  countriesWhereCoronavirusHasSpread,
  travelHealthNotices,
  allCasesInAmerica,
  allCasesInEurope,
  caseStatusUndeEvalutationInPR
   */
  constructor(
    private http: HttpClient,
  ) {
  }

  getReport(): Observable<any[]> {
    return this.http.get<any[]>(VIRUS_DATA_URL);
  }

  getReportsByCountries(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'ReportsByCountry/');
  }

  // https://covid19-server.chrismichael.now.sh/api/v1/AllReports
  getAllReports(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'AllReports');
  }

  getDeaths(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'Deaths');
  }

  getSituationReport(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'SituationReports');
  }

  getCountriesWhereCoronavirusHasSpread(): Observable<any[]> {
    return this.http.get<any[]>(BASE_URL + 'CountriesWhereCoronavirusHasSpread');
  }

  getGlobalData(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'GlobalDataReports');
  }

  getFatalityRateByAge(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'GlobalDataReports');
  }

  getJohnsHopkinsDataDailyReport(): Observable<any> {
    return this.http.get<any>(BASE_URL + 'JohnsHopkinsDataDailyReport');
  }
}

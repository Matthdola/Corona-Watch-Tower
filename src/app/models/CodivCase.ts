export class Covid19Reports {
  cases: number;
  deaths: number;
  recovered: number;
  active_cases: ActiveCase[];
  closed_cases: ClosedCase[];
  table: CovidCase[][];
}

export class JonsHpkinsData {
  Province_State: string;
  Country_Region: string;
  Last_Update: string;
  Lat: string;
  Long_: string;
  Confirmed: string;
  Deaths: string;
  Recovered: string;
  Active: string;
  Conbined_Key: string;
}

class ActiveCase {
  currently_infected_patients: number;
  inMidCondition: number;
  criticalStates: number;
}

class ClosedCase {
  cases_which_had_an_outcome: number;
  recovered: number;
  deaths: number;
}

export class CovidCase {
  TotalCases: string;
  NewCases: string;
  TotalDeaths: string;
  NewDeaths: string;
  TotalRecovered: string;
  ActiveCases: string;
  'Tot Deaths/1M pop': string;
  Country: string;
  Serious_Critical: string;
  TotCases_1M_Pop: string;
}

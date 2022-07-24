// import { IncomeStatement } from './income-statement.model';
// export interface IncomeStatement extends Array<Financial> [
//   {revenues: { ltm: number; 2021: number; 2020: number; 2019: number }},
//   {cogs: { ltm: number; 2021: number; 2020: number; 2019: number }},
//   {sga: { ltm: number; 2021: number; 2020: number; 2019: number }}
// ]

export interface IncomeStatement {
  companyId: number
  financial: string
  ltm: number
  2021: number
  2020: number
  2019: number
  2018: number
  2017: number
  2016: number
  2015: number
  2014: number
  2013: number
  2012: number
  2011: number
}

// let statment: IncomeStatement[] = [
//   { companyId: 1, financial: 'revenues', ltm: 10, 2021: 5, 2020: 4, 2019: 3 },
// ]

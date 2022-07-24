// import { IncomeStatement } from './income-statement.model';
// export interface IncomeStatement extends Array<Financial> [
//   {revenues: { ltm: number; 2021: number; 2020: number; 2019: number }},
//   {cogs: { ltm: number; 2021: number; 2020: number; 2019: number }},
//   {sga: { ltm: number; 2021: number; 2020: number; 2019: number }}
// ]

export interface IncomeStatement {
  financial: string
  ltm: number
  2021: number
  2020: number
  2019: number
}

let statment: IncomeStatement[] = [
  { financial: 'revenues', ltm: 10, 2021: 5, 2020: 4, 2019: 3 },
]

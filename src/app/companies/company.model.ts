import { IncomeStatement } from '../financials/income-statement/income-statement.model'
export interface Company {
  id: string
  ticker: string
  name: string
  incomeStatement: IncomeStatement
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { IncomeStatement } from './income-statement/income-statement.model'

const BACKEND_URL = `${environment.dev.apiUrl}/api/financial`

@Injectable({
  providedIn: 'root',
})
export class FinancialsService {
  constructor(private http: HttpClient) {}

  getFinancials(companyId: string) {
    return this.http.get<{
      _id: string
      incomeStatement: IncomeStatement
    }>(`${BACKEND_URL}/${companyId}`)
  }
}

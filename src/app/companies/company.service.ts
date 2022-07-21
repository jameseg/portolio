import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from './../../environments/environment'
import { Company } from './../companies/company.model'

const BACKEND_URL = `${environment.apiUrl}/companies`
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companies: Company[] = []
  private companiesUpdated = new Subject<{
    companies: Company[]
    companyCount: number
  }>()

  constructor(private http: HttpClient, private router: Router) {}

  addCompany(ticker: string, name: string) {
    const companyData = {
      ticker: ticker,
      name: name,
    }

    this.http
      .post<{ message: string; company: Company }>(
        `${BACKEND_URL}`,
        companyData,
      )
      .subscribe(responseData => {
        this.router.navigate(['/'])
      })
  }

  getCompanies(companiesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${companiesPerPage}&page=${currentPage}`
    this.http
      .get<{ message: string; companies: any; maxCompanies: number }>(
        `${BACKEND_URL}${queryParams}`,
      )
      .pipe(
        map(companyData => {
          return {
            companies: companyData.companies.map(
              (company: { ticker: any; name: any; _id: any }) => {
                return {
                  ticker: company.ticker,
                  name: company.name,
                  id: company._id,
                }
              },
            ),
            maxCompanies: companyData.maxCompanies,
          }
        }),
      )
      .subscribe(transformedCompaniesData => {
        this.companies = transformedCompaniesData.companies
        this.companiesUpdated.next({
          companies: [...this.companies],
          companyCount: transformedCompaniesData.maxCompanies,
        })
      })
  }

  getCompanyUpdatedListener() {
    return this.companiesUpdated.asObservable()
  }

  deleteCompany(id: string) {
    return this.http.delete(`${BACKEND_URL}/${id}`)
  }
}

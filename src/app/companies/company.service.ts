import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Company } from './../companies/company.model';

const BACKEND_URL = `${environment.apiUrl}/companies`;
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companies!: Company[];

  constructor(private http: HttpClient, private router: Router) {}

  addCompany(ticker: string, name: string) {
    console.log(BACKEND_URL);
    console.log(environment);
    const companyData = new FormData();
    companyData.append('ticker', ticker);
    companyData.append('name', name);

    this.http
      .post<{ message: string; company: Company }>(
        `${BACKEND_URL}`,
        companyData
      )
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }
}

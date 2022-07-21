import { Component, OnDestroy, OnInit } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { Subscription } from 'rxjs'
import { Company } from './../company.model'
import { CompanyService } from './../company.service'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit, OnDestroy {
  isLoading = false
  totalCompanies = 0
  companiesPerPage = 5
  currentPage = 1
  pageSizeOptions = [5, 10, 25, 50]
  companies: Company[] = []
  private companiesSub!: Subscription

  constructor(public companyService: CompanyService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.companyService.getCompanies(this.companiesPerPage, this.currentPage)
    this.companiesSub = this.companyService
      .getCompanyUpdatedListener()
      .subscribe(
        (companyData: { companies: Company[]; companyCount: number }) => {
          this.isLoading = false
          this.companies = companyData.companies
          this.totalCompanies = companyData.companyCount
        },
      )
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true
    this.currentPage = pageData.pageIndex + 1
    this.companiesPerPage = pageData.pageSize
    this.companyService.getCompanies(this.companiesPerPage, this.currentPage)
  }

  onDelete(companyId: string) {
    this.isLoading = true
    this.companyService.deleteCompany(companyId).subscribe(() => {
      this.companyService.getCompanies(this.companiesPerPage, this.currentPage)
    })
  }
  ngOnDestroy(): void {
    this.companiesSub.unsubscribe()
  }
}

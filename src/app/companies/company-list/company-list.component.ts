import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  isLoading = false;
  totalCompanies = 0;
  companiesPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  companies!: Company[];

  constructor() {}

  ngOnInit(): void {
    this.companies = [
      { id: 1, ticker: 'META', name: 'Meta Platforms' },
      { id: 2, ticker: 'GOOG', name: 'Alphabet' },
      { id: 3, ticker: 'OTCM', name: 'Over the Counter Markets' },
    ];
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.companiesPerPage = pageData.pageSize;
    // this.companyService.getPosts(this.companiesPerPage, this.currentPage);
  }
}

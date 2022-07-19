import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company!: Company;

  constructor() {}

  ngOnInit(): void {
    this.company = {
      id: 1,
      ticker: 'META',
      name: 'Meta Platforms',
    };
  }
}

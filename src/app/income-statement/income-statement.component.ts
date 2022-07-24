import { Component, OnInit } from '@angular/core'
import { IncomeStatement } from './income-statement.model'

const COMPANY_DATA: IncomeStatement[] = [
  { financial: 'revenues', ltm: 10, 2021: 5, 2020: 4, 2019: 3 },
  { financial: 'cogs', ltm: 9, 2021: 4, 2020: 3, 2019: 2 },
  { financial: 'sga', ltm: 1, 2021: 2, 2020: 0, 2019: 2 },
]
@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css'],
})
export class IncomeStatementComponent implements OnInit {
  displayedColumns = ['ltm', '2021', '2020', '2019']
  dataSource = COMPANY_DATA
  constructor() {}

  ngOnInit(): void {}

  saveData() {
    console.log(this.dataSource)
  }
}

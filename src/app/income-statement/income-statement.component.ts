import { Component, OnInit } from '@angular/core'
import { IncomeStatement } from './income-statement.model'

const INITIAL_DATA: IncomeStatement[] = [
  {
    companyId: -1,
    financial: 'Revenues',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'COGS',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'SG&A',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'R&D',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'D&A',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Amortization of Goodwill and Intangible Assets',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Operating Income',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Net Income to Company',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Preferred Dividend and Other Adjustments',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Weighted Average Diluted Shares Outstanding',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Diluted EPS Excl Extra Items',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Dividends Per Share',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
  {
    companyId: -1,
    financial: 'Special Dividend',
    ltm: 0,
    2021: 0,
    2020: 0,
    2019: 0,
    2018: 0,
    2017: 0,
    2016: 0,
    2015: 0,
    2014: 0,
    2013: 0,
    2012: 0,
    2011: 0,
  },
]

const COLUMNS_SCHEMA = [
  { key: 'financial', type: 'text', label: 'Fincancial Metric' },
  { key: 'isEdit', type: 'isEdit', label: '' },
  { key: 'ltm', type: 'number', label: 'LTM' },
  { key: '2021', type: 'number', label: '2021' },
  { key: '2020', type: 'number', label: '2020' },
  { key: '2019', type: 'number', label: '2019' },
  { key: '2018', type: 'number', label: '2018' },
  { key: '2017', type: 'number', label: '2017' },
  { key: '2016', type: 'number', label: '2016' },
  { key: '2015', type: 'number', label: '2015' },
  { key: '2014', type: 'number', label: '2014' },
  { key: '2013', type: 'number', label: '2013' },
  { key: '2012', type: 'number', label: '2012' },
  { key: '2011', type: 'number', label: '2011' },
]
@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css'],
})
export class IncomeStatementComponent implements OnInit {
  displayedColumns = COLUMNS_SCHEMA.map(col => col.key)
  dataSource: any = INITIAL_DATA
  columnsSchema: any = COLUMNS_SCHEMA

  constructor() {}

  ngOnInit(): void {}
}

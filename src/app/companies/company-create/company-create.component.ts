import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Company } from '../company.model'
import { CompanyService } from './../company.service'

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css'],
})
export class CompanyCreateComponent implements OnInit {
  company!: Company
  isLoading = false
  form!: FormGroup
  private mode = 'create'
  private companyId!: string

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ticker: new FormControl(null, {
        validators: [Validators.required],
      }),
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      // incomeStatement: new FormControl(null, {
      //   validators: [Validators.required],
      // }),
    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap)
      if (paramMap.has('id')) {
        this.mode = 'edit'
        this.companyId = paramMap.get('id') || ''
        this.isLoading = true
        this.companyService
          .getCompany(this.companyId)
          .subscribe(companyData => {
            this.isLoading = false
            this.company = {
              id: companyData._id,
              ticker: companyData.ticker,
              name: companyData.name,
            }
            this.form.setValue({
              ticker: this.company.ticker,
              name: this.company.name,
            })
          })
      }
    })
  }

  onSaveCompany() {
    if (this.form.invalid) {
      console.log('form is invalid')
      return
    }
    this.isLoading = true

    if (this.mode === 'create') {
      this.companyService.addCompany(
        this.form.value.ticker,
        this.form.value.name,
      )
    } else {
      this.companyService.updateCompany(
        this.companyId,
        this.form.value.companyTicker,
        this.form.value.companyName,
      )
    }
    this.form.reset()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from './../company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css'],
})
export class CompanyCreateComponent implements OnInit {
  isLoading = false;
  form!: FormGroup;
  mode = 'create';

  constructor(private companyService: CompanyService) {}

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
    });
  }

  onSaveCompany() {
    console.log('save company called');
    if (this.form.invalid) {
      console.log('form is invalid');
      return;
    }
    this.isLoading = true;

    if (this.mode === 'create') {
      this.companyService.addCompany(
        this.form.value.ticker,
        this.form.value.name
      );
    }
    this.form.reset();
  }
}

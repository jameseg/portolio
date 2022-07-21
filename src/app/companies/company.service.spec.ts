import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { CompanyService } from './company.service'

describe('CompanyService', () => {
  let service: CompanyService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    })
    service = TestBed.inject(CompanyService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

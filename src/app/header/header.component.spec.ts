import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AuthModule } from '@auth0/auth0-angular'
import { environment } from 'src/environments/environment'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        AuthModule.forRoot({
          domain: environment.domain,
          clientId: environment.clientId,
        }),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

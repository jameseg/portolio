import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from './modules/material-module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { AuthModule } from '@auth0/auth0-angular'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CompanyCreateComponent } from './companies/company-create/company-create.component'
import { CompanyListComponent } from './companies/company-list/company-list.component'
import { HeaderComponent } from './header/header.component'
import { IncomeStatementComponent } from './income-statement/income-statement.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyListComponent,
    CompanyCreateComponent,
    IncomeStatementComponent,
  ],
  imports: [
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [`${environment.dev.apiUrl}/*`],
      },
    }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

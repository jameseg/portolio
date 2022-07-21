import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '@auth0/auth0-angular'
import { CompanyCreateComponent } from './companies/company-create/company-create.component'
import { CompanyListComponent } from './companies/company-list/company-list.component'

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CompanyCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: CompanyCreateComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

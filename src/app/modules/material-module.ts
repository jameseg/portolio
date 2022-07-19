import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatCardModule, MatExpansionModule, MatToolbarModule],
})
export class MaterialModule {}

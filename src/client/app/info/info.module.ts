import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { infoRoutingModule } from './info-routing.module';

@NgModule({
  imports: [CommonModule, infoRoutingModule],
  declarations: [InfoComponent],
  exports: [InfoComponent]
})
export class InfoModule { }

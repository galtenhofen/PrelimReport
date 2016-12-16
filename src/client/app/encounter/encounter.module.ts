import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterComponent } from './encounter.component';
import { EncounterService } from './encounter.service';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [EncounterComponent],
  exports: [EncounterComponent],
  providers: [EncounterService]
})
export class EncounterModule { }

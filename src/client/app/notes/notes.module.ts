import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { notesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [CommonModule, notesRoutingModule],
  declarations: [NotesComponent],
  exports: [NotesComponent]
})
export class NotesModule { }

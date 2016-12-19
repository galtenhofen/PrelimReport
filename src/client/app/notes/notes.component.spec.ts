import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { NotesModule } from './notes.module';

export function main() {
   describe('notes component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [NotesModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let notesDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(notesDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-notes></sd-notes>'
})
class TestComponent {}

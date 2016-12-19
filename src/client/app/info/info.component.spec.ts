import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { InfoModule } from './info.module';

export function main() {
   describe('info component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [InfoModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let infoDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(infoDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-info></sd-info>'
})
class TestComponent {}

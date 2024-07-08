import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  imports: [NgTemplateOutlet, NgIf, NgFor]
})
export class FooComponent {

  @Input()
  template?: TemplateRef<{$implicit: number}>

}

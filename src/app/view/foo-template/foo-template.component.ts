import { Component, OnInit } from '@angular/core';
import { FooComponent } from '../foo/foo.component';

@Component({
  selector: 'app-foo-template',
  standalone: true,
  templateUrl: './foo-template.component.html',
  styleUrls: ['./foo-template.component.css'],
  imports: [FooComponent]
})
export class FooTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

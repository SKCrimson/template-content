import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from "./view/foo/foo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooComponent]
})
export class AppComponent {
  title = 'template-content';
}

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [RouterOutlet, RouterLink]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { FooTemplateComponent } from './view/foo-template/foo-template.component';
import { CounterComponent } from './view/counter/counter.component';

export const routes: Routes = [{
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'foo',
        component: FooTemplateComponent,
        title: 'Foo',
      },
      {
        path: 'counter',
        component: CounterComponent,
        title: 'Counter',
      }
    ],
  }];

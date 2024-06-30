import { Routes } from '@angular/router';
import { PersonComponent } from './presentation/Person/person/person.component';
import { CarComponent } from './presentation/car/car.component';

export const routes: Routes = [
  {path: '', component: PersonComponent},
  {path: 'cars', component: CarComponent},
];

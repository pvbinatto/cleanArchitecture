import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonListComponent } from './presentation/Person/person-list/person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'cleanArchitecture';
}

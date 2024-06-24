import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { PersonService } from '../../../core/services/person.service';
import { Person } from '../../../domain/models/person.model';
import { PersonRepository } from '../../../domain/repositories/person.repository';
import { PersonHttpRepository } from '../../../domain/repositories/person-http.repository';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './person-list.component.html',
  providers: [
    { provide: PersonService, useClass: PersonService },
    { provide: PersonRepository, useClass: PersonHttpRepository },
    HttpClientModule,

  ],
})
export class PersonListComponent implements OnInit {
  personService = inject(PersonService);

  persons: Person[] = [];

  ngOnInit(): void {
    this.personService.getAll().subscribe((persons) => {
      this.persons = persons;
    });
  }
}

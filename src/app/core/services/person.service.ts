import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonRepository } from '../../domain/repositories/person.repository';
import { Person } from '../../domain/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements PersonRepository {

  personRepository = inject(PersonRepository);

  getAll(): Observable<Person[]> {
    return this.personRepository.getAll();
  }

  getById(id: string): Observable<Person> {
    return this.personRepository.getById(id);
  }

  create(person: Person): Observable<Person> {
    return this.personRepository.create(person);
  }

  update(person: Person): Observable<Person> {
    return this.personRepository.update(person);
  }

  delete(id: string): Observable<void> {
    return this.personRepository.delete(id);
  }
}

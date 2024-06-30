import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonRepository } from '../../domain/repositories/person.repository';
import { PersonType } from '../../domain/models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements PersonRepository {

  personRepository = inject(PersonRepository);

  getAll(): Observable<PersonType[]> {
    return this.personRepository.getAll();
  }

  getById(id: string): Observable<PersonType> {
    return this.personRepository.getById(id);
  }

  create(person: PersonType): Observable<PersonType> {
    return this.personRepository.create(person);
  }

  update(person: PersonType): Observable<PersonType> {
    return this.personRepository.update(person);
  }

  delete(id: string): Observable<void> {
    return this.personRepository.delete(id);
  }
}

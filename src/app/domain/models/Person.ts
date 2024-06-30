import { inject } from '@angular/core';
import { PersonService } from '../../core/services/person.service';
import { Observable } from 'rxjs';

export default class Person {

  private personService = inject(PersonService);

  public create(person: PersonType): Observable<PersonType> {
    return this.personService.create(person);
  }

  public list(): Observable<PersonType[]> {
    return this.personService.getAll().pipe();
  }
}

export type PersonType = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

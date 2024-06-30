import { Observable } from 'rxjs';
import { PersonType } from '../models/Person';

export abstract class PersonRepository {
  abstract getAll(): Observable<PersonType[]>;
  abstract getById(id: string): Observable<PersonType>;
  abstract create(person: PersonType): Observable<PersonType>;
  abstract update(person: PersonType): Observable<PersonType>;
  abstract delete(id: string): Observable<void>;
}

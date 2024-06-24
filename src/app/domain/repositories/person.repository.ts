import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

export abstract class PersonRepository {
  abstract getAll(): Observable<Person[]>;
  abstract getById(id: string): Observable<Person>;
  abstract create(person: Person): Observable<Person>;
  abstract update(person: Person): Observable<Person>;
  abstract delete(id: string): Observable<void>;
}

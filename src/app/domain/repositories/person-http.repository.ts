import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { PersonRepository } from '../../domain/repositories/person.repository';
import { PersonType } from '../models/Person';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonHttpRepository extends PersonRepository {

  private apiUrl = environment.api + 'persons';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<PersonType[]> {
    return this.http.get<PersonType[]>(this.apiUrl).pipe(take(1));
  }

  getById(id: string): Observable<PersonType> {
    return this.http.get<PersonType>(`${this.apiUrl}/${id}`).pipe(take(1));
  }

  create(person: PersonType): Observable<PersonType> {
    return this.http.post<PersonType>(this.apiUrl, person).pipe(take(1));
  }

  update(person: PersonType): Observable<PersonType> {
    return this.http.put<PersonType>(`${this.apiUrl}/${person.id}`, person).pipe(take(1));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(take(1));
  }
}

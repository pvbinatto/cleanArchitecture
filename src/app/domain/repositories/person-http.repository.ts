import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonRepository } from '../../domain/repositories/person.repository';
import { Person } from '../../domain/models/person.model';

@Injectable({
  providedIn: 'root'
})

export class PersonHttpRepository extends PersonRepository {
  private apiUrl = 'persons';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${person.id}`, person);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

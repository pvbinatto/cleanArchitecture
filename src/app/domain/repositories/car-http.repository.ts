import { Observable, take } from "rxjs";
import { CarType } from "../models/Car";
import { CarRepository } from "./car.repository";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CarHttpRepository extends CarRepository {

  private apiUrl = environment.api + 'cars';

  constructor(private http: HttpClient) {
    super();
  }

  override create(car: CarType): Observable<CarType> {
    return this.http.post<CarType>(this.apiUrl, car).pipe(take(1))
  }
  override update(car: CarType): Observable<CarType> {
    return this.http.put<CarType>(this.apiUrl, car).pipe(take(1))
  }
  override delete(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id).pipe(take(1))
  }
  override getById(id: string): Observable<CarType> {
    return this.http.get<CarType>(this.apiUrl + '/' + id).pipe(take(1))
  }
  override list(): Observable<CarType[]> {
    return this.http.get<CarType[]>(this.apiUrl).pipe(take(1))
  }
  override getByPlate(plate: string): Observable<CarType> {
    return this.http.get<CarType>(this.apiUrl + '/plate/' + plate).pipe(take(1))
  }

}

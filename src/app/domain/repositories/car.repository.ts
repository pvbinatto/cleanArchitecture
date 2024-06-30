import { Observable } from "rxjs";
import { CarType } from "../models/Car";

export abstract class CarRepository {
  abstract create(car: CarType): Observable<CarType>;
  abstract update(car: CarType): Observable<CarType>;
  abstract delete(id: string): Observable<void>;
  abstract getById(id: string): Observable<CarType>;
  abstract list(): Observable<CarType[]>;
  abstract getByPlate(plate: string): Observable<CarType>;
}

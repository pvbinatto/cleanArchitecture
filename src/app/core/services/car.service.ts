import { Injectable, inject } from '@angular/core';
import { CarRepository } from '../../domain/repositories/car.repository';
import { Observable } from 'rxjs';
import { CarType } from '../../domain/models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService implements CarRepository {

  carRepository = inject(CarRepository);

  create(car: CarType): Observable<CarType> {
    return this.carRepository.create(car);
  }
  update(car: CarType): Observable<CarType> {
    return this.carRepository.update(car);
  }
  delete(id: string): Observable<void> {
    return this.carRepository.delete(id);
  }
  getById(id: string): Observable<CarType> {
    return this.carRepository.getById(id);
  }
  list(): Observable<CarType[]> {
    return this.carRepository.list();
  }
  getByPlate(plate: string): Observable<CarType> {
    return this.carRepository.getByPlate(plate);
  }

}

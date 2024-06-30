import { Observable, of } from "rxjs";
import { CarService } from "../../core/services/car.service";
import { inject } from "@angular/core";

export default class Car {

  private carService = inject(CarService);

  public create(car: CarType): Observable<CarType> {
    return this.carService.create(car);
  }

  public list(): Observable<CarType[]> {
    return this.carService.list();
  }
}

export type CarType = {
  id?: string;
  plate: string;
  model: string;
  year: number;
  color: string;
  make: string;
};

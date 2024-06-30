import { Component, OnInit } from '@angular/core';
import Car, { CarType } from '../../domain/models/Car';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent implements OnInit {

  private car = new Car();

  public cars: CarType[] = [];
  form = new FormGroup({
    plate: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(),
    color: new FormControl(''),
    make: new FormControl(''),
  })

  ngOnInit(): void {
    this.listCars();
  }

  listCars(){
    this.car.list().subscribe((cars) => {
      this.cars = cars;
    });
  }

  createCar(){
    if(this.form.valid){
      const car = this.form.value as CarType;
      this.car.create(car).subscribe((car) => {
        this.listCars();
        this.form.reset();
      });
    }
  }


}

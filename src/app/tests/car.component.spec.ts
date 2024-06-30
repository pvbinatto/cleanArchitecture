import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule
import Car, { CarType } from '../domain/models/Car';
import { CarComponent } from '../presentation/car/car.component';
import 'zone.js';
import 'zone.js/testing';
import { CarService } from '../core/services/car.service';
import { CarRepository } from '../domain/repositories/car.repository';
import { CarHttpRepository } from '../domain/repositories/car-http.repository';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

xdescribe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;
  let carService: CarService;
  let carRepository: CarRepository;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule], // Adicionando HttpClientModule
      providers: [
        CarService,
        { provide: CarRepository, useClass: CarHttpRepository },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    carService = TestBed.inject(CarService);
    carRepository = TestBed.inject(CarRepository);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('can create a new car', () => {
    const car: CarType = {
      plate: 'AAA0000',
      model: 'Model',
      year: 2022,
      color: 'Red',
      make: 'Make',
    };
    const newCar = new Car();
    newCar.create(car).subscribe((car) => {
      expect(car.plate).toBe('AAA0000');
      expect(car.model).toBe('Model');
      expect(car.year).toBe(2022);
      expect(car.color).toBe('Red');
      expect(car.make).toBe('Make');
      expect(car.id).toBeDefined();
    });
  });
});

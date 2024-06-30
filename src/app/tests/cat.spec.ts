import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../core/services/car.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js';
import 'zone.js/testing';
import { CarRepository } from '../domain/repositories/car.repository';
import Car, { CarType } from '../domain/models/Car';
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('CarService', () => {
  let service: CarService;
  let repository: CarRepository;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule], // Adicionando HttpClientModule
      providers: [CarService, CarRepository],
    }).compileComponents();
    service = TestBed.inject(CarService);
    repository = TestBed.inject(CarRepository);
  });

  it('should be created', () => {
    const service: CarService = TestBed.inject(CarService);
    expect(service).toBeTruthy();
  });

  it('should create a new car', () => {
    const car: CarType = {
      plate: 'AAA0000',
      model: 'Model',
      year: 2022,
      color: 'Red',
      make: 'Make',
    };
    const service: CarService = TestBed.inject(CarService);
    service.create(car).subscribe((car) => {
      expect(car.plate).toBe('AAA0000');
      expect(car.model).toBe('Model');
      expect(car.year).toBe(2022);
      expect(car.color).toBe('Red');
      expect(car.make).toBe('Make');
      expect(car.id).toBeDefined();
    });
  });
})

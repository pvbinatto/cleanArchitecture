import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { PersonService } from './core/services/person.service';
import { PersonRepository } from './domain/repositories/person.repository';
import { PersonHttpRepository } from './domain/repositories/person-http.repository';
import { CarService } from './core/services/car.service';
import { CarHttpRepository } from './domain/repositories/car-http.repository';
import { CarRepository } from './domain/repositories/car.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: PersonService, useClass: PersonService },
    {
      provide: PersonRepository,
      useClass: PersonHttpRepository,
      deps: [HttpClient],
    },
    { provide: CarService, useClass: CarService },
    { provide: CarRepository, useClass: CarHttpRepository, deps: [HttpClient] },
  ],
};

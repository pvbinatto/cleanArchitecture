import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  private readonly apiUrl = environment.api;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Verifique se a URL é relativa (não começa com 'http')
    if (request.url.startsWith('https')) {
      request = request.clone({
        url: `${request.url}`
      });
    } else {
      request = request.clone({
        url: `${this.apiUrl}/${request.url}`
      });
    }
    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const API_KEY = '4c8bc95958dd9c067669abb351d5bd28';
    req = req.clone({ params: req.params.set('api_key', API_KEY) });
    return next.handle(req);
  }
}

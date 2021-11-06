import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  API_URL = 'https://api.themoviedb.org/3/discover/movie';
  IMAGE_URL = 'http://image.tmdb.org/t/p/w500';
  SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}

  getMovies(params: any = { page: 1 }): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).map((key) => {
      httpParams = httpParams.set(key, params[key]);
    });
    return this.http
      .get<any>(this.API_URL, { params: httpParams })
      .pipe(
        map((response) => {
          const data = response;
          data.results = data.results.filter(
            (element) => element.vote_average > 0 && element.poster_path
          );
          data.results = data.results.map((element) => {
            element.image = `${this.IMAGE_URL}${element.poster_path}`;
            element.rating = element.vote_average;
            return element;
          });
          return data;
        })
      );
  }
  searchMovies(params: any = { page: 1 }): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).map((key) => {
      httpParams = httpParams.set(key, params[key]);
    });
    return this.http
      .get<any>(this.SEARCH_URL, { params: httpParams })
      .pipe(
        map((response) => {
          const data = response;
          data.results = data.results.filter(
            (element) => element.vote_average > 0 && element.poster_path
          );
          data.results = data.results.map((element) => {
            element.image = `${this.IMAGE_URL}${element.poster_path}`;
            element.rating = element.vote_average;
            return element;
          });
          return data;
        })
      );
  }
}

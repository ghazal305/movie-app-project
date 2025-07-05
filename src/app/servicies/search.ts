import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search {
  private apiKey = 'e81dc8bd68435bc96244da1ca71e322a';
  private baseUrl = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}?api_key=${this.apiKey}&query=${encodeURIComponent(
        query
      )}`
    );
  }
}

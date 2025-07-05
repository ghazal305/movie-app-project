import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDetails {
  private apiKey = 'e81dc8bd68435bc96244da1ca71e322a';

  constructor(private http: HttpClient) {}

  getDetails(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
  }

  getRecommendations(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }
}

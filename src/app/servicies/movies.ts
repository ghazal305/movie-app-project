import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private apiKey = 'e81dc8bd68435bc96244da1ca71e322a';
  private nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing';

  constructor(private http: HttpClient) {}

  getNowPlaying(): Observable<any> {
    return this.http.get<any>(`${this.nowPlayingUrl}?api_key=${this.apiKey}`);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesList } from '../movies-list/movies-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterModule, FormsModule,MoviesList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  languages = ['en', 'ar'];
  selectedLanguage = 'en';
  apiKey = 'e81dc8bd68435bc96244da1ca71e322a';
  http = inject(HttpClient);
  contentDirection: 'ltr' | 'rtl' = 'ltr';
  searchQuery = '';
  router = inject(Router);

  movies: any[] = [];

  constructor() {}
  ngOnInit() {
    this.setDirection();
    this.fetchMovies();
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.setDirection();
    this.fetchMovies();
  }

  setDirection() {
    this.contentDirection = this.selectedLanguage === 'ar' ? 'rtl' : 'ltr';
  }

   fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=${this.selectedLanguage}`;
    this.http.get<{ results: any[] }>(url).subscribe(response => {
      this.movies = response.results;
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/movies-search'], {
        queryParams: { query: this.searchQuery.trim() },
      });
    }
  }
}

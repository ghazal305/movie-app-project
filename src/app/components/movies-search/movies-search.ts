import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Search } from '../../servicies/search';
import { MoviesList } from '../movies-list/movies-list';

@Component({
  selector: 'app-movies-search',
  standalone: true,
  imports: [CommonModule, RouterModule, MoviesList],
  templateUrl: './movies-search.html',
  styleUrl: './movies-search.scss',
})
export class MoviesSearch implements OnInit {
  movies = signal<any[]>([]);
  query = signal('');
  searchService = inject(Search);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query.set(params['query'] || '');
      console.log('Search query:', this.query());
      if (this.query()) {
        this.searchService.searchMovies(this.query()).subscribe((res) => {
          console.log('API response:', res);
          this.movies.set(res.results || []);
          console.log('Movies set in signal:', this.movies());
        });
      }
    });
  }
}

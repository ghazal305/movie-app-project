import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../servicies/movie-details';


@Component({
  selector: 'app-movies-list-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies-list-details.html',
  styleUrl: './movies-list-details.scss',
})
export class MoviesListDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieDetails);

  movie: any = null;
  recommendations: any[] = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getDetails(id).subscribe((data) => (this.movie = data));
      this.movieService.getRecommendations(id).subscribe((res: any) => (this.recommendations = res.results));
    }
  }
}

import { Component, Input, signal, computed,inject } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { WishService } from '../../servicies/wish-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, DecimalPipe,RouterModule],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList {
  @Input() set movies(value: any[]) {
    console.log('MoviesList input set:', value);
    this._movies.set(value || []);
    this.currentPage.set(1);
  }
  _movies = signal<any[]>([]);
  currentPage = signal(1);
  pageSize = 8;

  pagedMovies = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this._movies().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.ceil(this._movies().length / this.pageSize));

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }


  wishService = inject(WishService);

  toggleWishlist(movie: any) {
    if (this.wishService.isInWishlist(movie.id)) {
      this.wishService.removeFromWishlist(movie.id);
    } else {
      this.wishService.addToWishlist(movie);
    }
  }

  isInWishlist(id: number): boolean {
    return this.wishService.isInWishlist(id);
  }
}

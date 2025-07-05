import { Component, inject } from '@angular/core';
import { WishService } from '../../servicies/wish-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-wish-list.html',
  styleUrl: './movies-wish-list.scss',
})
export class MoviesWishList {
  wishService = inject(WishService);
  router = inject(Router);

  wishlist = this.wishService.getWishlist();
  remove(id: number) {
    this.wishService.removeFromWishlist(id);
  }

  goHome() {
  this.router.navigate(['/']);
}
}

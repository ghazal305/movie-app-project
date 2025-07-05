import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private wishlist = signal<any[]>([]);

  getWishlist() {
    return this.wishlist.asReadonly(); 
  }

  addToWishlist(movie: any) {
    const exists = this.wishlist().some(m => m.id === movie.id);
    if (!exists) {
      this.wishlist.set([...this.wishlist(), movie]);
    }
  }

  removeFromWishlist(movieId: number) {
    this.wishlist.set(this.wishlist().filter(m => m.id !== movieId));
  }

  isInWishlist(movieId: number): boolean {
    return this.wishlist().some(m => m.id === movieId);
  }
}

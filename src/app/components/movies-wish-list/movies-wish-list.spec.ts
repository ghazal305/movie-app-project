import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWishList } from './movies-wish-list';

describe('MoviesWishList', () => {
  let component: MoviesWishList;
  let fixture: ComponentFixture<MoviesWishList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesWishList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWishList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

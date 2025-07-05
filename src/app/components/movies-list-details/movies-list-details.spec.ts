import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListDetails } from './movies-list-details';

describe('MoviesListDetails', () => {
  let component: MoviesListDetails;
  let fixture: ComponentFixture<MoviesListDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesListDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesListDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

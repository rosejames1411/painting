import { TestBed } from '@angular/core/testing';

import { Painting } from './painting';

describe('Painting', () => {
  let service: Painting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Painting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

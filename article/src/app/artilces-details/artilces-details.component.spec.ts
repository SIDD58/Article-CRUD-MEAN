import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilcesDetailsComponent } from './artilces-details.component';

describe('ArtilcesDetailsComponent', () => {
  let component: ArtilcesDetailsComponent;
  let fixture: ComponentFixture<ArtilcesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilcesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

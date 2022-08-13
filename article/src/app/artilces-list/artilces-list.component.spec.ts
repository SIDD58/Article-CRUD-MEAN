import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilcesListComponent } from './artilces-list.component';

describe('ArtilcesListComponent', () => {
  let component: ArtilcesListComponent;
  let fixture: ComponentFixture<ArtilcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilcesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

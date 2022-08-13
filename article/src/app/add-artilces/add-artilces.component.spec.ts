import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtilcesComponent } from './add-artilces.component';

describe('AddArtilcesComponent', () => {
  let component: AddArtilcesComponent;
  let fixture: ComponentFixture<AddArtilcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtilcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArtilcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

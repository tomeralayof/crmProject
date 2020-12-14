import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFinalComponent } from './side-final.component';

describe('SideFinalComponent', () => {
  let component: SideFinalComponent;
  let fixture: ComponentFixture<SideFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermUseComponent } from './term-use.component';

describe('TermUseComponent', () => {
  let component: TermUseComponent;
  let fixture: ComponentFixture<TermUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

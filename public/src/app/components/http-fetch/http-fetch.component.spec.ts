import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFetchComponent } from './http-fetch.component';

describe('HttpFetchComponent', () => {
  let component: HttpFetchComponent;
  let fixture: ComponentFixture<HttpFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

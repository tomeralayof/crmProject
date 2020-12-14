import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreatedComponent } from './customer-created.component';

describe('CustomerCreatedComponent', () => {
  let component: CustomerCreatedComponent;
  let fixture: ComponentFixture<CustomerCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

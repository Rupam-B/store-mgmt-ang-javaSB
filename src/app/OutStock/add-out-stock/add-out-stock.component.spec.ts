import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutStockComponent } from './add-out-stock.component';

describe('AddOutStockComponent', () => {
  let component: AddOutStockComponent;
  let fixture: ComponentFixture<AddOutStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

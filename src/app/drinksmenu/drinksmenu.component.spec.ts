import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksmenuComponent } from './drinksmenu.component';

describe('DrinksmenuComponent', () => {
  let component: DrinksmenuComponent;
  let fixture: ComponentFixture<DrinksmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

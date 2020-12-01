import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroitemsComponent } from './heroitems.component';

describe('HeroitemsComponent', () => {
  let component: HeroitemsComponent;
  let fixture: ComponentFixture<HeroitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

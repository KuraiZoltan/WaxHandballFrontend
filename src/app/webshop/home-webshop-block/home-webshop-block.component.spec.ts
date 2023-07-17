import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWebshopBlockComponent } from './home-webshop-block.component';

describe('HomeWebshopBlockComponent', () => {
  let component: HomeWebshopBlockComponent;
  let fixture: ComponentFixture<HomeWebshopBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWebshopBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWebshopBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

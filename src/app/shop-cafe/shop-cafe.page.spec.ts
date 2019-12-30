import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopCafePage } from './shop-cafe.page';

describe('ShopCafePage', () => {
  let component: ShopCafePage;
  let fixture: ComponentFixture<ShopCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

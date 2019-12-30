import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopBakeryPage } from './shop-bakery.page';

describe('ShopBakeryPage', () => {
  let component: ShopBakeryPage;
  let fixture: ComponentFixture<ShopBakeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBakeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopBakeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

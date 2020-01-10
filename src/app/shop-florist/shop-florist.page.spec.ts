import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopFloristPage } from './shop-florist.page';

describe('ShopFloristPage', () => {
  let component: ShopFloristPage;
  let fixture: ComponentFixture<ShopFloristPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFloristPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopFloristPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

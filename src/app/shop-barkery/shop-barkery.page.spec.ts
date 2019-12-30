import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopBarkeryPage } from './shop-barkery.page';

describe('ShopBarkeryPage', () => {
  let component: ShopBarkeryPage;
  let fixture: ComponentFixture<ShopBarkeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBarkeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopBarkeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSweetsPage } from './shop-sweets.page';

describe('ShopSweetsPage', () => {
  let component: ShopSweetsPage;
  let fixture: ComponentFixture<ShopSweetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSweetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

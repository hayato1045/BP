import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopDagashiPage } from './shop-dagashi.page';

describe('ShopDagashiPage', () => {
  let component: ShopDagashiPage;
  let fixture: ComponentFixture<ShopDagashiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDagashiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopDagashiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

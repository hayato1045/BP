import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextBakeryPage } from './news-text-bakery.page';

describe('NewsTextBakeryPage', () => {
  let component: NewsTextBakeryPage;
  let fixture: ComponentFixture<NewsTextBakeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextBakeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextBakeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

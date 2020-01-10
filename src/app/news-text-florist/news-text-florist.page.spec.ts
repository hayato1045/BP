import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextFloristPage } from './news-text-florist.page';

describe('NewsTextFloristPage', () => {
  let component: NewsTextFloristPage;
  let fixture: ComponentFixture<NewsTextFloristPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextFloristPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextFloristPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

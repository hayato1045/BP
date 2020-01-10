import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsFloristPage } from './news-florist.page';

describe('NewsFloristPage', () => {
  let component: NewsFloristPage;
  let fixture: ComponentFixture<NewsFloristPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFloristPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsFloristPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

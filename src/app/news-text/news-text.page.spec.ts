import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextPage } from './news-text.page';

describe('NewsTextPage', () => {
  let component: NewsTextPage;
  let fixture: ComponentFixture<NewsTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

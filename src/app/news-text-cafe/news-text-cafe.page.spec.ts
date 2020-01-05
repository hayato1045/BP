import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextCafePage } from './news-text-cafe.page';

describe('NewsTextCafePage', () => {
  let component: NewsTextCafePage;
  let fixture: ComponentFixture<NewsTextCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextCafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

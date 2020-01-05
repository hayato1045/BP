import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextSweetsPage } from './news-text-sweets.page';

describe('NewsTextSweetsPage', () => {
  let component: NewsTextSweetsPage;
  let fixture: ComponentFixture<NewsTextSweetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextSweetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextSweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

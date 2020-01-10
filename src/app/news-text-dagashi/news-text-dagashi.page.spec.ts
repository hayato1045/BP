import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsTextDagashiPage } from './news-text-dagashi.page';

describe('NewsTextDagashiPage', () => {
  let component: NewsTextDagashiPage;
  let fixture: ComponentFixture<NewsTextDagashiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTextDagashiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTextDagashiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

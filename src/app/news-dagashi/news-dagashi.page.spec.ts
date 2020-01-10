import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsDagashiPage } from './news-dagashi.page';

describe('NewsDagashiPage', () => {
  let component: NewsDagashiPage;
  let fixture: ComponentFixture<NewsDagashiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDagashiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDagashiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

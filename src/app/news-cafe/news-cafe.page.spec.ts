import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsCafePage } from './news-cafe.page';

describe('NewsCafePage', () => {
  let component: NewsCafePage;
  let fixture: ComponentFixture<NewsCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

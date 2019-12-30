import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsBakeryPage } from './news-bakery.page';

describe('NewsBakeryPage', () => {
  let component: NewsBakeryPage;
  let fixture: ComponentFixture<NewsBakeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBakeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsBakeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

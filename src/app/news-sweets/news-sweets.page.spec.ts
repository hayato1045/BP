import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSweetsPage } from './news-sweets.page';

describe('NewsSweetsPage', () => {
  let component: NewsSweetsPage;
  let fixture: ComponentFixture<NewsSweetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSweetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

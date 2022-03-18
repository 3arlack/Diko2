import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { C3_CurrentManchePage } from './C3_current-manche.page';

describe('CurrentManchePage', () => {
  let component: C3_CurrentManchePage;
  let fixture: ComponentFixture<C3_CurrentManchePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ C3_CurrentManchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(C3_CurrentManchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

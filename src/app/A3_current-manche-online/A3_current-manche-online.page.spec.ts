import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A3_CurrentMancheOnlinePage } from './A3_current-manche-online.page';

describe('CurrentMancheOnlinePage', () => {
  let component: A3_CurrentMancheOnlinePage;
  let fixture: ComponentFixture<A3_CurrentMancheOnlinePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ A3_CurrentMancheOnlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A3_CurrentMancheOnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A6_OnlinePropositionPage } from './A6_online-proposition.page';

describe('OnlinePropositionPage', () => {
  let component: A6_OnlinePropositionPage;
  let fixture: ComponentFixture<A6_OnlinePropositionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ A6_OnlinePropositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A6_OnlinePropositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

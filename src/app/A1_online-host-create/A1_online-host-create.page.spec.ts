import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A1_OnlineHostCreatePage } from './A1_online-host-create.page';

describe('OnlineHostCreatePage', () => {
  let component: A1_OnlineHostCreatePage;
  let fixture: ComponentFixture<A1_OnlineHostCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ A1_OnlineHostCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A1_OnlineHostCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

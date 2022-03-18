import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { A4_OnlineDefinitionPage } from './A4_online-definition.page';

describe('OnlineDefinitionPage', () => {
  let component: A4_OnlineDefinitionPage;
  let fixture: ComponentFixture<A4_OnlineDefinitionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ A4_OnlineDefinitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(A4_OnlineDefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

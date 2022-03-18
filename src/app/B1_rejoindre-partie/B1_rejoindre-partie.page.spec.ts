import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { B1_RejoindrePartiePage } from './B1_rejoindre-partie.page';

describe('RejoindrePartiePage', () => {
  let component: B1_RejoindrePartiePage;
  let fixture: ComponentFixture<B1_RejoindrePartiePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ B1_RejoindrePartiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(B1_RejoindrePartiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

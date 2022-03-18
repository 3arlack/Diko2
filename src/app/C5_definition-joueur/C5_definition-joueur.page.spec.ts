import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { C5_DefinitionJoueurPage } from './C5_definition-joueur.page';

describe('DefinitionJoueurPage', () => {
  let component: C5_DefinitionJoueurPage;
  let fixture: ComponentFixture<C5_DefinitionJoueurPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ C5_DefinitionJoueurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(C5_DefinitionJoueurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

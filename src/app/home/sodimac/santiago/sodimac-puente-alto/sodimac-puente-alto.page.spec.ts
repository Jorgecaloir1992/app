import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SodimacPuenteAltoPage } from './sodimac-puente-alto.page';

describe('SodimacPuenteAltoPage', () => {
  let component: SodimacPuenteAltoPage;
  let fixture: ComponentFixture<SodimacPuenteAltoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SodimacPuenteAltoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SodimacPuenteAltoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

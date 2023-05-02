import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SodimacPlazaOestePage } from './sodimac-plaza-oeste.page';

describe('SodimacPlazaOestePage', () => {
  let component: SodimacPlazaOestePage;
  let fixture: ComponentFixture<SodimacPlazaOestePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SodimacPlazaOestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SodimacPlazaOestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

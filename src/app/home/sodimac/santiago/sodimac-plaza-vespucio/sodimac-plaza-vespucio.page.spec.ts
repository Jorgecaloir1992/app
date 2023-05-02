import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SodimacPlazaVespucioPage } from './sodimac-plaza-vespucio.page';

describe('SodimacPlazaVespucioPage', () => {
  let component: SodimacPlazaVespucioPage;
  let fixture: ComponentFixture<SodimacPlazaVespucioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SodimacPlazaVespucioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SodimacPlazaVespucioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

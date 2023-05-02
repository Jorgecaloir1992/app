import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SodimacSanMiguelPage } from './sodimac-san-miguel.page';

describe('SodimacSanMiguelPage', () => {
  let component: SodimacSanMiguelPage;
  let fixture: ComponentFixture<SodimacSanMiguelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SodimacSanMiguelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SodimacSanMiguelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminCreatePage } from './admin-create.page';

describe('AdminCreatePage', () => {
  let component: AdminCreatePage;
  let fixture: ComponentFixture<AdminCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

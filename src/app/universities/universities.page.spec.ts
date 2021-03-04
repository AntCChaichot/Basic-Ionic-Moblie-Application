import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversitiesPage } from './universities.page';

describe('UniversitiesPage', () => {
  let component: UniversitiesPage;
  let fixture: ComponentFixture<UniversitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

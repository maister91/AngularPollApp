import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerComponent } from './gebruiker.component';

describe('GebruikerComponent', () => {
  let component: GebruikerComponent;
  let fixture: ComponentFixture<GebruikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

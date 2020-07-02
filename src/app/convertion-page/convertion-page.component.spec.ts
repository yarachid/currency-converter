import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertionPageComponent } from './convertion-page.component';

describe('ConvertionPageComponent', () => {
  let component: ConvertionPageComponent;
  let fixture: ComponentFixture<ConvertionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

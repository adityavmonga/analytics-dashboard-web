import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IclassicComponent } from './iclassic.component';

describe('IclassicComponent', () => {
  let component: IclassicComponent;
  let fixture: ComponentFixture<IclassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IclassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

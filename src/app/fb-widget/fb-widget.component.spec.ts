import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbWidgetComponent } from './fb-widget.component';

describe('FbWidgetComponent', () => {
  let component: FbWidgetComponent;
  let fixture: ComponentFixture<FbWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxLayoutComponent } from './flex-box-layout.component';

describe('FlexBoxLayoutComponent', () => {
  let component: FlexBoxLayoutComponent;
  let fixture: ComponentFixture<FlexBoxLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBoxLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

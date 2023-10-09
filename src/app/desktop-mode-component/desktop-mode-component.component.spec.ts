import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopModeComponentComponent } from './desktop-mode-component.component';

describe('DesktopModeComponentComponent', () => {
  let component: DesktopModeComponentComponent;
  let fixture: ComponentFixture<DesktopModeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopModeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopModeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

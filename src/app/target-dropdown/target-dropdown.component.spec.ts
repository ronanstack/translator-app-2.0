import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDropdownComponent } from './target-dropdown.component';

describe('TargetDropdownComponent', () => {
  let component: TargetDropdownComponent;
  let fixture: ComponentFixture<TargetDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetDropdownComponent]
    });
    fixture = TestBed.createComponent(TargetDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

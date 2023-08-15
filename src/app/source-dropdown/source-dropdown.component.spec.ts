import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDropdownComponent } from './source-dropdown.component';

describe('SourceDropdownComponent', () => {
  let component: SourceDropdownComponent;
  let fixture: ComponentFixture<SourceDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceDropdownComponent]
    });
    fixture = TestBed.createComponent(SourceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

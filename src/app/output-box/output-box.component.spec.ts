import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBoxComponent } from './output-box.component';

describe('OutputBoxComponent', () => {
  let component: OutputBoxComponent;
  let fixture: ComponentFixture<OutputBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputBoxComponent]
    });
    fixture = TestBed.createComponent(OutputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

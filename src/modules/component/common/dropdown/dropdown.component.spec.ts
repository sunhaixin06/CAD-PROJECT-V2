import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCommonComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownCommonComponent;
  let fixture: ComponentFixture<DropdownCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

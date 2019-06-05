import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalItemComponent } from './critical-item.component';

describe('CriticalItemComponent', () => {
  let component: CriticalItemComponent;
  let fixture: ComponentFixture<CriticalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

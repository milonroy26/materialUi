import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBottomSheetRefComponent } from './mat-bottom-sheet-ref.component';

describe('MatBottomSheetRefComponent', () => {
  let component: MatBottomSheetRefComponent;
  let fixture: ComponentFixture<MatBottomSheetRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBottomSheetRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBottomSheetRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mat-bottom-sheet-ref',
  templateUrl: './mat-bottom-sheet-ref.component.html',
  styleUrls: ['./mat-bottom-sheet-ref.component.scss']
})
export class MatBottomSheetRefComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<MatBottomSheetRefComponent>) {}


  dismissSheet(){
    this._bottomSheetRef.dismiss()
  }
  
}

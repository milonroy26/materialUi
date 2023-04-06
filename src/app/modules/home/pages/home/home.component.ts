import { Component } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { MatBottomSheetRefComponent } from '../mat-bottom-sheet-ref/mat-bottom-sheet-ref.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  
  openBottomSheet(): void {
    this._bottomSheet.open(MatBottomSheetRefComponent);
  }

  // Basic expansion panel
  panelOpenState = false;


}

import { Component } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { MatBottomSheetRefComponent } from '../mat-bottom-sheet-ref/mat-bottom-sheet-ref.component';
import {MatSnackBar} from '@angular/material/snack-bar';


interface Food {
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  public showFiller = false;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _snackBar: MatSnackBar
    ) {}

  
  openBottomSheet(): void {
    this._bottomSheet.open(MatBottomSheetRefComponent);
  }

  // Basic expansion panel
  panelOpenState = false;

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  


}

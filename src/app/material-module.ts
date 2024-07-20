import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


let materialItems = [MatToolbarModule, MatIconModule, MatButtonModule]

@NgModule({
    imports: materialItems,
    exports: materialItems
})
export class MaterialModule { }
//Danielle Taplin
//composer-list.components.ts
//11/4/23
//typescript composer list component

//import component, IComposer, and oninit from angular
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

//create and export component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //define an array of IComposer
  composers: Array<IComposer>

  //create new field for form control
  txtSearchControl = new FormControl('')

  //create constructor for the component
  constructor(private composerService: ComposerService) {
      //set the composer array to equal the value returned by getComposers
      this.composers = this.composerService.getComposers()

      //create form control that sends an alert 500 ms after the text field value changes
      this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val))
   }

  ngOnInit(): void {
  }

  //create function to filter composers
  filterComposers(name: string){
    //send an alert using the passed in name
    alert(name)
  }

}

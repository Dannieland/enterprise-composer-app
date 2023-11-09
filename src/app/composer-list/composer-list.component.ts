//Danielle Taplin
//composer-list.components.ts
//11/4/23
//typescript composer list component

//import component, IComposer, and oninit from angular, and Observable from rxjs
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { Observable } from 'rxjs'

//create and export component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //define observable stream of IComposer
  composers: Observable<IComposer[]>

  //create new field for form control
  txtSearchControl = new FormControl('')

  //create constructor for component
  constructor(private composerService: ComposerService) {
      //set composer array equal to array of composer objects
      this.composers = this.composerService.getComposers()

      //create form control that activates 500ms after the text value is changed
      this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val))
   }

  ngOnInit(): void {
  }

  //create function to filter composers
  filterComposers(name: string){
    //set value of composers to filtered list of composers
    this.composers = this.composerService.filterComposers(name)
  }

}

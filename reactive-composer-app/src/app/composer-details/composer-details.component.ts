//Danielle Taplin
//composer-details.components.ts
//11/8/23
//composer details component

//import Component, OnInit, IComposer, Composer Service, and Activated Route
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

//create composer details component
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
//create and export class for the details component
export class ComposerDetailsComponent implements OnInit {

  //create composer ID and composer variables
  composerId: number;
  composer: IComposer;

  //create constructor with a route passed into its parameters
  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
    //access composer ID selected when the user navigates to a composer details page
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //if the passed in composer ID is found
    if(this.composerId){
      //set this.composer to contain that composer's info using getComposer
      this.composer = this.ComposerService.getComposer(this.composerId)
    }
   }

  ngOnInit(): void {
  }

}

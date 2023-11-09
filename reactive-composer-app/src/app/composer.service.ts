//Danielle Taplin
//composer.service.ts
//11/8/23
//composer class

//import injectable from Angular, and the Composer interface
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

//create injectable provided in root, export the Composer service
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   //create array of IComposer objects
   composers: Array<IComposer>;

   //create constructor to initialize the array with composer objects
   constructor() {
     this.composers = [
       {
         composerId: 100, fullName: "Richard Wagner", genre: "Classical"
       },
       {
         composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
       },
       {
         composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
       },
       {
         composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
       },
       {
         composerId: 104, fullName: "Claude Debussy", genre: "Classical"
       }
     ]
   }

   //declare method for returning all composer objects
   getComposers() {
     //Return array of composers
     return this.composers;
   }

   //declare method for returning specified composer based on id
   getComposer(composerId: number) : IComposer {
     //For every composer object in the array:
     for (let composer of this.composers) {
       //if composer Id equals the id parameter, return that composer
       if (composer.composerId === composerId) {
         return composer;
       }
     }
   }
}

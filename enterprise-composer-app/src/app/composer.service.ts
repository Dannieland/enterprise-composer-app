//Danielle Taplin
//composer.service.ts
//11/8/23
//composer class

//import injectable from Angular, and the Composer interface
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//create injectable provided in root, and export the Composer service
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   //create an array of IComposer objects
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
    getComposers(): Observable<IComposer[]> {
     //return array of composers
     return of(this.composers);
   }

   //declare method for returning specified composer based on id
   getComposer(composerId: number) : IComposer {
     //for every composer object in array:
     for (let composer of this.composers) {
       //if composer Id=Id parameter, return that composer
       if (composer.composerId === composerId) {
         return composer;
       }
     }
   }

   //declare function for filtering composers that returns array of observable IComposer objects
   filterComposers(name: string) : Observable<IComposer[]> {
    //return array of composer objects that include the name parameter in the fullName variable
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
   }
}

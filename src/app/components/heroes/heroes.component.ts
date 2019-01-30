import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';// este import permite hacer uso de router.navigate(['/heroe,index'])



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];



  constructor( private _heroesService:HeroesService, private router:Router) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx:number){
      this.router.navigate(['/heroe',idx]);
  }

}

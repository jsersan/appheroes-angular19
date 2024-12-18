import { Component, OnInit, Injectable } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  imports: [HeroeTarjetaComponent, CommonModule],
  providers: [HeroesService, NgFor],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

@Injectable({
  providedIn: 'root'
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, 
               private _router: Router) {
  }
  // Esta función se ejecutará cuando esté toda la página cargada
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe',idx]);
  }

}

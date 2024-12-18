import { Component, OnInit } from '@angular/core';
// Para capturar el parámetro que viene por url
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  imports: [HeroeTarjetaComponent, NgIf, NgFor],
  providers: [HeroesService],
  standalone: true,
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:string = '';

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

}

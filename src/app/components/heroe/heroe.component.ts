import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { DatePipe, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, NgIf, UpperCasePipe, DatePipe],
  providers: [HeroesService],
  standalone: true,
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);

    });

  }

}

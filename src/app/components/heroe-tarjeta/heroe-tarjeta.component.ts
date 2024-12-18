import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})

export class HeroeTarjetaComponent {

  readonly heroe = input<any>({});
  readonly index = input.required<number>();

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  verHeroe(){
    /*console.log(this.index);*/
    this.router.navigate(['/heroe',this.index()]); 
  }

}


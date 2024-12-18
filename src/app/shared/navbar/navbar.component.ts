import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    console.log(termino);

    this.router.navigate( ['/buscar', termino] );
  }

}

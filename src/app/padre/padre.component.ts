import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title = 'Votaciones';
  votacion = '';
  Total = 0;
  Msg = '';

  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  toralvotos: number = 0;

  votos = [
    { title: 'Candidato 1' },
    { title: 'Candidato 2' },
    { title: 'Candidato 3' },
    { title: 'Candidato 4' },
  ];

  addVoto(response: string) {
    this.votacion = 'Usted eligio: ' + response;

    switch (response.trim()) {
      case 'Candidato 1':
        this.c1++;
        break;
      case 'Candidato 2':
        this.c2++;
        break;
      case 'Candidato 3':
        this.c3++;
        break;
      case 'Candidato 4':
        this.c4++;
        break;
    }
  }

  Finalizarvotar(): void {
    this.Total = this.c1 + this.c2 + this.c3 + this.c4;
    this.Msg = 'El total de personas que votaron es de ' + this.Total;
  }
}

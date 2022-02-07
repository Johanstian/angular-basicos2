import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{ibc}}</strong> </h3>
    <button (click)="acumular(+ibc)">+{{ibc}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-ibc)">-{{ibc}}</button>

    `
})

export class ContadorComponent {
    title: string ='Seguridad Social App';
    numero: number = 10;
    ibc: number = 5;
  
    acumular (valor:number){
    this.numero+=valor;
  }
}
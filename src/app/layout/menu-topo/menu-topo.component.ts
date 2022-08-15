import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {

  public valorPesquisa: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.valorPesquisa.length == 0){
      alert("Favor preencher a busca");
    }else{
      this.router.navigate(['/busca', this.valorPesquisa]);
    }
  }

}

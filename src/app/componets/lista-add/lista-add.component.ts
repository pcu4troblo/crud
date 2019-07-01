import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

   items : any;

  constructor(private conexion: ConexionService) {
     this.conexion.listaitems().subscribe(item=>{
       this.items = item;
       console.log(this.items)
     })
   }

  ngOnInit() {
  }


  eliminar(item){
      this.conexion.eliminarItem(item);
  }
}

import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public mensaje = 'Bienvenidos todos al curso';

  public fruta = '';

  public url = 'http://localhost:8201/api';

  public entidades : any[] = [];

  public entidad : any;

  public municipios : any[] = [];

  public municipio : any;

  public localidades : any[] = [];

  public localidad : any;

  public frutas = [
    'Apple',
    'Banana',
    'Orange'
  ];

  constructor(
    private http: HttpClient
  ) {

  }
  ngOnInit(){
    this.obtenerEntidades();
  }


  public elegirMunicipio(){
    this.obtenerMunicipios(this.entidad.id);
  }

  public elegirLocalidad(){
    this.obtenerLocalidades(this.entidad.id,this.municipio.id);
  }

  public obtenerEntidades(){
    this.http.get(this.url + '/entidades').subscribe({
      next: (res)=>{ this.entidades = <any[]>res;}
    });
  }

  public obtenerMunicipios(entidad : string){
    this.http.get(this.url + '/entidades/' + entidad + '/municipios').subscribe({
      next: (res)=>{ this.municipios = <any[]>res;}
    });

  }

  public obtenerLocalidades(entidad : string, municipio : string){
    this.http.get(this.url + '/entidades/' + entidad + '/municipios/' + municipio + '/localidades').subscribe({
      next: (res)=>{ this.localidades = <any[]>res;
      console.log(res);}
    });
  }

  
}

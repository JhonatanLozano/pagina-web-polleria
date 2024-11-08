import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenu } from '../modelos/menu.model';
import { IPlatos } from '../modelos/platos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }
  
  getMenuOptions(){
    return this.http.get<IMenu[]>('/assets/menu-data/menu-options.json');
  }
  getPlatos(){
    return this.http.get<IPlatos[]>('/assets/Datos/platos.json');
  }

  carrito : any[]=[];

  setProductos(plato:IPlatos){
    this.carrito.push(plato);
  }

  getCarrito(){
    return this.carrito;
  }
  limpiarCarrito(){
    this.carrito = [];
  }
  
}

import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonTitle,IonMenu, IonButtons,IonMenuButton 
  ,IonMenuToggle,IonButton,IonSplitPane,IonToggle, IonIcon, IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { IPlatos } from './modelos/platos.model';
import { DataService } from './servicios/data.service';
import { Observable } from 'rxjs';
import { IMenu } from './modelos/menu.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonItem, IonCol, IonRow, IonGrid, IonIcon, IonButtons, IonTitle, IonContent, IonToolbar, IonHeader, IonApp, IonRouterOutlet,IonMenu,IonMenuButton,
    IonMenuToggle,IonButton,IonSplitPane,IonToggle,RouterLink,
  ],
})
export class AppComponent implements OnInit {
  /* grid.ts*/
  carrito : IPlatos[]=[];
  dataServ = inject(DataService);

  constructor(private menu: MenuController) {}


  ionViewWillEnter() {
    this.carrito = this.dataServ.getCarrito();
    this.menu.enable(true, 'carrito');  // Asegúrate de habilitar el menú
    this.menu.open('carrito'); 
  }

  vaciarCarrito() {
    this.dataServ.limpiarCarrito();
    this.carrito = [];
  }

/**inicio.ts */
  namePage:string="Polleria Diego's";
  menu_opc !: Observable<IMenu[]>;
  ngOnInit(){
    this.menu_opc = this.dataServ.getMenuOptions();
      
  }
  

}

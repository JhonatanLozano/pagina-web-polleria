import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonMenuButton,IonMenuToggle, IonHeader,IonMenu,
   IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonImg, 
   IonCardSubtitle, IonCardHeader, IonCardContent, IonCardTitle, IonButton,
    IonButtons, IonIcon, IonItem, IonLabel, IonFab, IonFabButton, 
    IonBackButton, IonList, IonListHeader, IonSkeletonText,IonThumbnail } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { HeaderIosComponent } from 'src/app/componentes/header-ios/header-ios.component';
import { DataService } from 'src/app/servicios/data.service';
import { IPlatos } from 'src/app/modelos/platos.model';
import { PiePaginaComponent } from 'src/app/componentes/pie-pagina/pie-pagina.component';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { carOutline, cartOutline, close, add, musicalNotes } from 'ionicons/icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonListHeader, IonList, IonBackButton, IonFabButton,
     IonFab, IonLabel, IonItem, IonIcon, IonButtons, IonButton, IonCardTitle, 
     IonCardContent, IonCardHeader, IonCardSubtitle, IonImg, IonCard, IonCol,
      IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    , HeaderComponent,HeaderIosComponent,PiePaginaComponent,
    IonMenuButton,IonMenu,RouterLink,IonMenuToggle,IonThumbnail
  ]
})
export class ProductosPage implements OnInit {
  namePage: string ='Productos';
  dataServ = inject(DataService);
  platos!: IPlatos[];
  carrito : IPlatos[]=[];
  total:number=0;


  public loaded = false;

  constructor() { addIcons({close,musicalNotes,cartOutline,add,carOutline});}
  ngOnInit(){
    
    setTimeout(() => {
      this.dataServ.getPlatos().subscribe(data => {
        this.platos = data; // Almacenar los datos localmente
      })
      this.loaded = true;
    }, 1800);
      
  
  }
  AgregarCarrito(plato:IPlatos){
    
    this.dataServ.setProductos(plato);

    console.log('agregado');
    this.CalcularTotal(plato.precio);
    

  }
  ionViewWillEnter() {
    this.carrito = this.dataServ.getCarrito();
  }

  vaciarCarrito() {
    this.dataServ.limpiarCarrito();
    this.carrito =[];
    this.carrito =this.dataServ.getCarrito();
    this.total=0;
  }
  
  CalcularTotal(precio:number){
    console.log(precio);
    this.total +=parseFloat(precio.toString());
    
  }

}

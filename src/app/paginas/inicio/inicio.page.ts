import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonHeader, IonToolbar, IonContent, IonTitle,IonMenu, IonButtons,IonMenuButton 
  ,IonMenuToggle,IonButton,IonSplitPane,IonToggle,IonRow, IonGrid, IonCol,
   IonIcon, IonItem, IonLabel, IonList, IonImg, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonTabBar, IonTabs } from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { IMenu } from 'src/app/modelos/menu.model';
import { addIcons } from 'ionicons';
import { americanFootballOutline, beakerOutline, cardOutline, 
  carOutline, gridOutline, infiniteOutline, listOutline, logoAppleAppstore,
   close, chevronBack, chevronUp, chevronDown, chevronExpand, 
   chevronCollapse, flash, apps, send, personAddOutline, logoFacebook, 
   logoInstagram, logoTwitter, cartOutline } from 'ionicons/icons';
import { DataService } from 'src/app/servicios/data.service';
import { Observable } from 'rxjs';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { HeaderIosComponent } from 'src/app/componentes/header-ios/header-ios.component';
import { IPlatos } from 'src/app/modelos/platos.model';
import { PiePaginaComponent } from 'src/app/componentes/pie-pagina/pie-pagina.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonRow, IonGrid, IonCol, IonIcon, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    RouterLinkWithHref,IonMenu, IonButtons,IonMenuButton 
    ,IonMenuToggle,IonButton,IonSplitPane,IonToggle,HeaderComponent,HeaderIosComponent,PiePaginaComponent
  ]
})
export class InicioPage implements OnInit{
  namePage:string="Polleria Diego's";
  menu_opc !: Observable<IMenu[]>;
  @ViewChild('btnProductos') btnProductos!: ElementRef;
  private dataServ = inject(DataService);
  
  platos!: IPlatos[];
  carrito: IPlatos []=[]; 
  btnPagarVisible: boolean = false;
  carritoVisible:any;
  @ViewChild('Carrusel') carrusel!: ElementRef;
  
  intervalId!: number;
  index:number =  0;
  productsPorSlide = 3;

  

  constructor(private router:Router) {
    addIcons({close,cartOutline,chevronBack,flash,apps,send,chevronExpand,americanFootballOutline,logoAppleAppstore,beakerOutline,cardOutline,carOutline,gridOutline,infiniteOutline,listOutline,chevronDown,chevronCollapse,personAddOutline,logoFacebook,logoInstagram,logoTwitter});
  }


  ngOnInit(){
    this.menu_opc = this.dataServ.getMenuOptions();
    
    this.dataServ.getPlatos().subscribe(data => {
      this.platos = data; // Almacenar los datos localmente
      
    this.slideAutomatico();
  })
  }
  
  DeslizarBtnVerProductos(event: Event): void {
    event.preventDefault();

    if (this.btnProductos) {
      const buttonElement = this.btnProductos.nativeElement;
      buttonElement.style.transition = 'transform 0.3s ease'; // Aplicar la transición CSS
      buttonElement.style.transform = 'translateX(1350px)'; // Ejecutar la animación
      
      // Escuchar el evento transitionend para navegar cuando la animación termine
      buttonElement.addEventListener('transitionend', () => {
        console.log("Animación completada, navegando..."); // Verificar que la animación termine
        this.router.navigate(['/productos']);
        buttonElement.style.transform = 'translateX(0px)';
      }, { once: true });
    } else {
      console.error('No se pudo encontrar el botón');
    }
  }  
  getSlideWidth(): number {
    // Si el ancho de la pantalla es menor o igual a 768px (típico de dispositivos móviles), usamos 100%
    return window.innerWidth <= 768 ? 100 : 33.3;
  }
  slideAutomatico(): void {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
    
        this.intervalId = window.setInterval(() => {
          this.slideSiguiente();
        }, 3000); // Cambiar cada 2.5 segundos
}
slideSiguiente(): void {
  const carruselElement = this.carrusel.nativeElement;
  const totalSlides = this.platos.length - 2; // Calcula el total de slides
  const slideWidth = this.getSlideWidth(); 

  this.index++;
  if (this.index >= totalSlides) {
    this.index = 0; // Reiniciar cuando se alcanza el final
  }

  carruselElement.style.transform = `translateX(-${this.index*slideWidth}%)`; // Desplaza el carrusel
}

slideAnterior(): void {
  const carruselElement = this.carrusel.nativeElement;
  const totalSlides = this.platos.length-2; // Calcula el total de slides
  const slideWidth = this.getSlideWidth(); 

  this.index--;
  if (this.index < 0) {
    this.index = totalSlides - 1; // Volver al final si se llega al principio
  }

  carruselElement.style.transform = `translateX(-${this.index*slideWidth}%)`; // Desplaza el carrusel
}





ionViewWillEnter() {
  this.carrito = this.dataServ.getCarrito();
  
}

vaciarCarrito() {
  this.dataServ.limpiarCarrito();
  this.carrito = [];
}


      
}



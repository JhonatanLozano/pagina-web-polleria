import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { HeaderIosComponent } from 'src/app/componentes/header-ios/header-ios.component';
import { PiePaginaComponent } from 'src/app/componentes/pie-pagina/pie-pagina.component';
import { addIcons } from 'ionicons';
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    HeaderComponent,HeaderIosComponent,PiePaginaComponent
  ]
})
export class SobreNosotrosPage {

  constructor() { addIcons({logoFacebook,logoInstagram,logoTwitter})}
  namePage:string = "Pollería Diego's | Sobre Nosotros";

}

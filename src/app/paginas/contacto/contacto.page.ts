import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, 
  IonButtons, IonList, IonItem, IonLabel, IonFooter, IonGrid, IonRow,
   IonCol, IonIcon, IonText, IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { HeaderIosComponent } from 'src/app/componentes/header-ios/header-ios.component';
import { addIcons } from 'ionicons';
import { trashOutline,shareSocialOutline, closeOutline, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { PiePaginaComponent } from 'src/app/componentes/pie-pagina/pie-pagina.component';
import { FormularioComponent } from 'src/app/componentes/formulario/formulario.component';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonInput, IonText, IonIcon, IonCol, IonRow,
     IonGrid, IonFooter, IonLabel, IonItem, IonList, IonButtons,
      IonButton, IonContent, IonHeader, IonTitle, IonToolbar,
       CommonModule, FormsModule,
    HeaderComponent,HeaderIosComponent,PiePaginaComponent,FormularioComponent
  ]
})
export class ContactoPage {

  pageName : string = "Polleria Diego's | Contacto";
  constructor() {
    addIcons({logoFacebook,logoInstagram,logoTwitter,trashOutline,shareSocialOutline,closeOutline});
  }
  nombre!: string;
  email!: string;
  mensaje!: string;


  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);
    // Lógica adicional para enviar el formulario
  }

}

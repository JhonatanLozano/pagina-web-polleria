import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { IonLabel, IonInput, IonItem, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone:true,
  imports: [
    IonLabel,IonInput,IonItem,IonText,IonButton,ReactiveFormsModule
  ]

})
export class FormularioComponent  implements OnInit {

  miFormulario : FormGroup = new FormGroup({});

  ngOnInit():void{
    this.miFormulario = new FormGroup({
      full_name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      mensaje: new FormControl('',Validators.required)
    });
  }
  enviarForm(){
    console.log("formulario enviado", this.miFormulario);
    this.miFormulario.reset();
  }
  tieneError(nombreControl : string ,tipoValidacion : string){
    return this.miFormulario.get(nombreControl)?.hasError(tipoValidacion) &&
    this.miFormulario.get(nombreControl)?.touched;
  }



}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Dispositivo } from '../interfaces/dispositivos';
import { ListadoDispositivosService } from '../services/listado-dispositivos.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(
    private listadoService: ListadoDispositivosService) {}

  // variable: number = 2;

  listado: Dispositivo[] = this.listadoService.getListadoDispositivos();

  manejador(event: any) {
    console.log(event)
  }

  // buttonState: boolean = false;
  // texto: string = "mostrar texto al clickear";
  // numeroTarjeta: string = "texto";

  // toggleButton(texto: string) {
  //   this.buttonState = !this.buttonState;
  //   this.loggerService.logWarning(texto);
  // }

  // name: FormControl = new FormControl("", [Validators.required, Validators.maxLength(4)])

  // loginForm: FormGroup = new FormGroup({
  //   user: new FormControl("", [Validators.required]),
  //   pass: new FormControl("", [Validators.required])
  // })

  // onSubmit() {
  //   console.log(this.loginForm.value);
  //   console.log(this.regForm.get('firstName')?.value);
  // }

  // regForm = new FormBuilder().group({
  //   firstName: ["", [Validators.required, Validators.maxLength(8)]],
  //   lastName: ["", [Validators.required, Validators.maxLength(12)]],
  //   email: ["", [Validators.required, Validators.email]],
  //   pass: ["", [Validators.required, passwordValidator()]]
  // })

}

// export function passwordValidator(): ValidatorFn {
//   return (control:AbstractControl): ValidationErrors | null => {

//     const value = control.value;

//     if(!value) {
//       return null;
//     }

//     const hasUpperCase = /[A-Z]+/.test(value);
//     const hasLowerCase = /[a-z]+/.test(value);
//     const hasNumber = /[0-9]+/.test(value);

//     const passwordValid = hasUpperCase && hasLowerCase && hasNumber;

//     return !passwordValid ? {passwordStrength:true} : null;

//   }
// };

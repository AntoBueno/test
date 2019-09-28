import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  
})

export class FormularioComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      nombre: String(),
      contraseña: String(),
      confirmarcontraseña: String(),
      email: String(),
      });
}

  get nombre() {
    return this.registrationForm.get('nombre');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('contraseña');
  }

  loadAPIData() {
  this.registrationForm.patchValue({
    nombre: "Antonella",
    contraseña: '123',
    confirmarcontraseña: '123',
    email: 'antonella@gmail.com'
  });
}

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}

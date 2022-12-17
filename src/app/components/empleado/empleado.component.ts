import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  nombre= 'Maria'
  apellido = 'Garcia'
  private edad = 51
  private empresa = 'EPM'
  enableInput = false
  message = 'No registrado'




  public getEmpresa() : string {
    return this.empresa
  }


  public getEdad() : number{
    return this.edad
  }

  changeStatus(){
    this.enableInput == true ? this.enableInput = false : this.enableInput = true
  }

  checkBox(event:Event){
    // this.message == 'No registrado' ? this.message = 'Registrado 😁' : this.message = "No registrado"
    (<HTMLInputElement>event.target).value == 'si' ? this.message = 'Registrado 😁': this.message = "No registrado";
  }



  constructor() {}



  ngOnInit(): void{

  }
}

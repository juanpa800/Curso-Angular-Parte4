import { Component } from '@angular/core';
import { Guest } from './guest.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-Parte4';
  amount = 0;
  guests: Guest[] = [
    new Guest("Martin", "Fernandez", "Son", 66)
  ];
  modePresentation = "list";
  namesList = ["Hugo", "Martín", "Lucas", "Mateo", "Leo", "Daniel", "Alejandro", "Pablo", "Manuel",
    "Álvaro", "Adrián", "David", "Mario", "Enzo", "Diego", "Marcos", "Izan", "Javier", "Marco", "Álex",
    "Bruno", "Oliver", "Miguel", "Thiago", "Antonio", "Marc", "Carlos", "Ángel", "Juan", "Gonzalo", "Gael",
    "Sergio", "Nicolás", "Dylan", "Gabriel", "Jorge", "José", "Adam", "Liam", "Eric", "Samuel", "Darío",
    "Héctor", "Luca", "Iker", "Amir", "Rodrigo", "Saúl", "Víctor", "Francisco", "Iván", "Jesús", "Jaime",
    "Aarón", "Rubén", "Ian", "Guillermo", "Erik", "Mohamed", "Julen", "Luis", "Pau", "Unai", "Rafael", "Joel",
    "Alberto", "Pedro", "Raúl", "Aitor", "Santiago", "Rayan", "Pol", "Nil", "Noah", "Jan", "Asier", "Fernando",
    "Alonso", "Matías", "Biel", "Andrés", "Axel", "Ismael", "Martí", "Arnau", "Imran", "Luka", "Ignacio",
    "Aleix", "Alan", "Elías", "Omar", "Isaac", "Youssef", "Jon", "Teo", "Mauro", "Óscar", "Cristian", "Leonardo",
    "Abel", "Adrián", "Alejandro", "Ángel", "Carlos", "César", "Bruno", "Daniel", "Darío", "David", "Diego",
    "Emilio", "Fabián", "Felipe", "Gabriel", "Héctor", "Hugo", "Jacobo", "Jaime", "Joaquín", "Juan", "Leonardo",
    "Leo", "Lucas", "Marcos", "Martín", "Mateo", "Matías", "Miguel", "Nicolás", "Pablo", "Raúl", "Samuel",
    "Santiago", "Sebastián", "Tomás", "Tristán", "Joan", "Andrés", "Ricardo", "Manuel", "Ezequiel", "Francisco",
    "Elías", "Blas", "Alfonso", "Ulises", "Gerardo", "Alfredo", "Álvaro", "Amadeo", "Amancio", "Antonio", "Baltasar",
    "Beltrán", "Benito", "Rufino", "Boris", "Camilo", "Ciro", "Conrado", "Donato", "Florentino", "Saturnino", "Segundo",
    "Anastasio", "Cipriano", "Teófilo", "Casimiro", "Bonifacio", "Victorino", "Eleuterio", "Urbano", "Severino", "Inocencio",
    "Primitivo", "Bautista", "Agapito", "Benedicto", "Enrique", "Eugenio", "Estanislao", "Fausto", "Faustino", "Felipe",
    "Félix", "Fermín", "Francisco", "Gaspar", "Genaro", "Hilario", "Hugo", "Ignacio", "Ireneo", "Ismael", "Joaquín", "José",
    "Juan", "Julián", "Justo", "Leopoldo", "León", "Lisandro", "Lorenzo", "Lucas", "Manuel", "Mateo", "Pedro", "Pío", "Romeo"];

  relationshipsList = [
    "Wife",
    "Husband",
    "Child",
    "Father",
    "Mother",
    "Son",
    "Brother",
    "Sister",
    "Grandparent",
    "Grandchildren",
    "Stepmother",
    "Stepfather",
    "Stepchild",];

  createGuest(): void {
    this.guests.push(new Guest(
      this.generateName(),
      this.generateLastName(),
      this.generateRelationship(),
      Math.floor(Math.random() * 100))
      );
  }

  generateName() {
    let name = this.namesList[Math.floor(Math.random() * this.namesList.length)];
    return name;
  }

  generateLastName() {
    return "Garcia" + this.guests.length.toString();
  }
  generateRelationship() {
    let relationship = this.relationshipsList[Math.floor(Math.random() * this.relationshipsList.length)];
    return relationship;
  }

  GuestCustom(){
    this.createGuest()
  }

  changeView(){

    if (this.modePresentation == 'table'){
      this.modePresentation = 'list';
    }
    else{
      this.modePresentation = 'table';
    }
  }
}

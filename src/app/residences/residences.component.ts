import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Residence} from "../core/models/residence.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-residences',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/EL_Fell_.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/yasmine-beach-resort.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/1915258.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/d-un-autre-angle-piscine.jpg', status: 'En Construction' }
  ];
  showLocation(residence: Residence): void {
    if (residence.address ==='inconnu') {
      alert(`Adresse de ${residence.address} est inconnue`);
    }
    else {
      alert(`Adresse : ${residence.address}`);
    }
  }
  favorites: Residence[] = [];
  searchTerm: string = "";
  addToFavorite(residence: Residence): void {
    if (this.favorites.find(fav => fav.name === residence.name)) {
      this.favorites.push(residence);
      alert(`${residence.name} a été ajouté aux favoris.`);
    } else {
      alert(`${residence.name} est déjà dans les favoris.`);
    }
  }

  Search(term: string): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(term.toLowerCase())
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from '../produits/produits.component';
import { Produit}from "../model/produit.model";
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newProduit=new Produit();
  constructor(private produitservice: ProduitService) { 

  }

  ngOnInit(): void {
  }
 addProduit(){ 
   //console.log(this.newproduit);
   this.produitservice.ajouterProduit(this.newProduit)
 }
}

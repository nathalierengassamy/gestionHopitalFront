import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Chambre } from 'app/chambre';
import { Dossier } from 'app/model/dossier';
import { Facture } from 'app/model/facture';
import { Medicament } from 'app/model/medicament';
import { Ordonnance } from 'app/model/ordonnance';
import { RDV } from 'app/model/rdv';
import { Role } from 'app/model/role';
import { Utilisateur } from 'app/model/utilisateur';
import { ChambreService } from 'app/services/chambre.service';
import { DossierService } from 'app/services/dossier.service';
import { FactureService } from 'app/services/facture.service';
import { MedicamentService } from 'app/services/medicament.service';
import { OrdonnanceService } from 'app/services/ordonnance.service';
import { RDVService } from 'app/services/rdv.service';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  chambres!: any[];
  chambre:Chambre=new Chambre();
  utilisateurs!: any[];
  utilisateur:Utilisateur=new Utilisateur();
  medicaments!: any[];
  medicament:Medicament=new Medicament();
  factures!: any[];
  facture:Facture=new Facture();
  dossiers!: any[];
  dossier:Dossier=new Dossier();
  roles!: any[];
  role:Role=new Role();
  ordonnances!: any[];
  ordonnance:Ordonnance=new Ordonnance();
  rdvs!:any[];
  rdv:RDV=new RDV();

  
  constructor(private rdvService:RDVService,private appService:AppService,private chambreService:ChambreService, private utilisateurService:UtilisateurService, private medicamentService:MedicamentService, private factureService:FactureService,
    private dossierService:DossierService, private roleService:RoleService, private ordonnanceService:OrdonnanceService) { }

  ngOnInit(): void {
    this.findAllChambre();
    this.findAllUtilisateur();
    this.findAllMedicament();
    this.findAllFacture();
    this.findAllDossier();
    this.findAllRole();
    this.findAllOrdonnance();
    this.findAllRDV();
  }

  findAllRDV(){
    this.rdvService.findAllRDV().subscribe(data => {this.rdvs = data;});
  }
  deleteRDV(id:number){
    this.rdvService.deleteRDV(id).subscribe(()=>{this.findAllRDV()});
  }
  saveRDV(){
    this.rdvService.saveRDV(this.rdv).subscribe(()=>{
      this.findAllRDV();
      this.rdv = new RDV();
    })
  }

  findAllOrdonnance(){
    this.ordonnanceService.findAllOrdonnance().subscribe(data => {this.ordonnances = data;});
  }
  deleteOrdonnance(id:number){
    this.ordonnanceService.deleteOrdonnance(id).subscribe(()=>{this.findAllOrdonnance()});
  }
  saveOrdonnance(){
    this.ordonnanceService.saveOrdonnance(this.ordonnance).subscribe(()=>{
      this.findAllOrdonnance();
      this.ordonnance = new Ordonnance();
    })
  }
  findAllRole(){
    this.roleService.findAllRole().subscribe(data => {this.roles = data;});
  }
  deleteRole(id:number){
    this.roleService.deleteRole(id).subscribe(()=>{this.findAllRole()});
  }
  saveRole(){
    this.roleService.saveRole(this.role).subscribe(()=>{
      this.findAllRole();
      this.role = new Role();
    })
  }

  findAllDossier(){
    this.dossierService.findAllDossier().subscribe(data => {this.dossiers = data;});
  }
  deleteDossier(id:number){
    this.dossierService.deleteDossier(id).subscribe(()=>{this.findAllDossier()});
  }
  saveDossier(){
    this.dossierService.saveDossier(this.dossier).subscribe(()=>{
      this.findAllDossier();
      this.dossier = new Dossier();
    })
  }
  
  findAllFacture(){
    this.factureService.findAllFacture().subscribe(data => {this.factures = data;});
  }
  deleteFacture(id:number){
    this.factureService.deleteFacture(id).subscribe(()=>{this.findAllFacture()});
  }
  saveFacture(){
    this.factureService.saveFacture(this.facture).subscribe(()=>{
      this.findAllFacture();
      this.facture = new Facture();
    })
  }
  
  findAllMedicament(){
    this.medicamentService.findAllMedicament().subscribe(data => {this.medicaments = data;});
  }
  deleteMedicament(id:number){
    this.medicamentService.deleteMedicament(id).subscribe(()=>{this.findAllMedicament()});
  }
  saveMedicament(){
    this.medicamentService.saveMedicament(this.medicament).subscribe(()=>{
      this.findAllMedicament();
      this.medicament = new Medicament();
    })
  }

  findAllUtilisateur(){
    this.utilisateurService.findAllUtilisateur().subscribe(data => {this.utilisateurs = data;});
  }
  deleteUtilisateur(id:number){
    this.utilisateurService.deleteUtilisateur(id).subscribe(()=>{this.findAllUtilisateur()});
  }
  saveUtilisateur(){
    this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(()=>{
      this.findAllUtilisateur();
      this.utilisateur = new Utilisateur();
    })
  }
  /*countUtilisateur(){
    this.findAllUtilisateur.length;
  }*/

  findAllChambre(){
    this.chambreService.findAllChambre().subscribe(data => {this.chambres = data;});
  }
  deleteChambre(id:number){
    this.chambreService.deleteChambre(id).subscribe(()=>{this.findAllChambre()});
  }
  saveChambre(){
    this.chambreService.saveChambre(this.chambre).subscribe(()=>{
      this.findAllChambre();
      this.chambre = new Chambre();
    })
  }
  findByDossier() {
    this.factureService.findByDossier(1).subscribe(data => {this.factures = data;}); //ici il faut remplacer 1 par currentUser.idDossier
    }


}

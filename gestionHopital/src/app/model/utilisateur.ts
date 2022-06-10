import { Role } from "./role";


export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    dateNaissance!:Date;
    adresse!:String;
    ageUtilisateur!:number;
    telephone!:number;
    roles!:Role[];
}
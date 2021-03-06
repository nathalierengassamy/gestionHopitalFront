import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private baseURL = "http://localhost:9090/medicaments";
  constructor(private httpClient:HttpClient) { }
  public findAllMedicament() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteMedicament(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveMedicament(medicament:any):Observable<any>{
  return this.httpClient.post(this.baseURL,medicament);
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseURL = "http://localhost:9090/chambres";
  constructor(private httpClient:HttpClient) { }
  
  public findAllChambre() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public deleteChambre(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public saveChambre(chambre:any):Observable<any>{
    return this.httpClient.post(this.baseURL,chambre);
  }
}
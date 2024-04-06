import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:3000/'

  getallresidents(){
    return this.http.get(this.url+ 'resident/getallresidents');
  }

  createnewresident(resident:any){
    return this.http.post(this.url + 'resident/addresident',resident);
  }
  updateresident(id: any, resident:any){
    return this.http.put(this.url + 'resident/updateresident/'+ id , resident);
  }
  deleteresident(id: any) {
    return this.http.delete(this.url + 'resident/deleteresident/' + id);
  }
  getresidentbyid(id: any) {
    return this.http.get(this.url + 'resident/getresidentbyid/'+id);
  };
 
  getallguests(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'guest/getallguests');
  }
  createnewguest(guest:any){
    return this.http.post(this.url + 'guest/addguest',guest);
  }
  deleteguest(id:any){
    return this.http.delete(this.url +'guest/deleteguest/'+id);
  }
  updateguest(id: any, guest:any){
    this.http.put(this.url + 'guest/updateguest'+id, guest);//currently no intention of using it but better have it if I need to
  }
  getguestbyid(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/guest/getguestbyid/${id}`);
  }
  updateGuestBannedStatus(id: any, banned: boolean): Observable<any> {
    const updatedGuest = { banned };
    return this.http.put<any>(`http://localhost:3000/guest/updateguest/${id}`, updatedGuest);
  }
  isbrobanned(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/guest/ismfbanned/${id}`);
  }
  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + 'user/register', { email, username, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + 'user/login', { email, password });
  }

}

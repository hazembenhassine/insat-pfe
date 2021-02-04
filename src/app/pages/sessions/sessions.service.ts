import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from './sessions.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  public sessionsURL ;
  public sessions:Session[]=[
    {
      'id':1,
       'startDate':"27/06/2021",
       'endDate':"27/09/2021",
       'capacity':250,
       'president':"dr.Ali Abdenadher"
    },
    {
      'id':1,
      'startDate':"15/09/2021",
       'endDate':"15/10/2021",
       'capacity':300,
       'president':"dr.Riadh Robbana"
    }
  ];

  constructor(private http: HttpClient) { }

 /*  getAllSessions():Observable<Session[]>{
    return this.http.get<Session[]>(this.sessionsURL+'/getAllSessions')
   } */

   getAllSessions():Session[]{
     return(this.sessions);
   }

   getSessionById(){
      
   }


}

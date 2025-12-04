import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../app/environments/environment";


@Injectable({ providedIn: 'root' })
export class AuthService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/auth/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Sesion cerrada');
  }

  liLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}

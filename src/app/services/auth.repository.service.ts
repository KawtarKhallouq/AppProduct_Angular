import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import jwtDecode from "jwt-decode";
import { AppStateService } from "./app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {
  host: string = "http://localhost:9000";

  constructor(private http: HttpClient, private appState: AppStateService) { }

  async login(username: string, password: string): Promise<any> {
    try {
      const data: any = await firstValueFrom(this.http.get(`${this.host}/users/${username}`));
      // Rest of your login logic
    } catch (error) {
      // Handle errors
    }
  }

  public logout() {
    this.appState.setAuthState({
      isAuthenticated: false,
      username: "",
      token: ""
    });
  }
}

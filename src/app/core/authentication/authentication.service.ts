import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const credentialsKey = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
      if (savedCredentials) {
        this._credentials = savedCredentials;
      }
    }
  }

  get credentials(): string | null {
    return this._credentials;
  }

  private _credentials: string | null;

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  public setCredentials(credentials?: string, remember?: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      this._credentials = credentials || null;

      if (credentials) {
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(credentialsKey, JSON.stringify(credentials));
      } else {
        sessionStorage.removeItem(credentialsKey);
        localStorage.removeItem(credentialsKey);
      }
    }
  }

}

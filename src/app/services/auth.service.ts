import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register({ email, password }: any) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      console.error('Registration error:', e);
      return null;
    }
  }

  async login({ email, password }: any) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      console.error('Login error:', e);
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
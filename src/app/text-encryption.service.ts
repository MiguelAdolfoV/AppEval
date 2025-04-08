import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextEncryptionService {

  private shift = 3; // puedes cambiar el número

  encrypt(text: string): string {
    return text
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) + this.shift))
      .join('');
  }

  decrypt(text: string): string {
    return text
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) - this.shift))
      .join('');
  }
}

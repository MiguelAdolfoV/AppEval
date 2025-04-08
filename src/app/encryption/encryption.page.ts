import { Component } from '@angular/core';
import { TextEncryptionService } from '../text-encryption.service';
import { F } from '@angular/router/router_module.d-6zbCxc1T';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.page.html',
  standalone: false
})
export class EncryptionPage {
  inputText = '';
  
  constructor(private encryptionService: TextEncryptionService) {}

  encrypt() {
    this.inputText = this.encryptionService.encrypt(this.inputText);
  }

  decrypt() {
    this.inputText = this.encryptionService.decrypt(this.inputText);
  }
}

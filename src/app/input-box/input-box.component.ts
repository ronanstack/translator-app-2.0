import { Component } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { TranslateData } from '../models/translate.model';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {

  constructor(private translatorService: TranslatorService) {}

  translation?: TranslateData;
  
  translate(text: string) {
    // Send text to API
    var sourceDropdown = document.getElementById('source-dropdown')!.children[0];
    var sourcebtn = document.getElementById('source-dropbtn')!;
    var targetList = document.getElementById('target-dropdown')!.children[0];
    var targetbtn = document.getElementById('target-dropbtn')!;
    var source = '';
    var target = '';

    for (var i = 0; i < sourceDropdown.children.length; i++) {
      if (sourceDropdown.children[i].children[0].innerHTML === sourcebtn.innerText) {
        source = sourceDropdown.children[i].children[0].id; // Source select text
      }
    }
    for (var j = 0; j < targetList.children.length; j++) {
      if (targetList.children[j].children[0].innerHTML === targetbtn.innerText) {
        target = targetList.children[j].children[0].id; // Target select text
      }
    }

    this.translatorService.translateText(text, source, target)
    .subscribe({
      next: (response) => {
        // Receive translation data from API
        this.translation = response
        console.log(response)

        document.getElementById('output')!.innerText = response.translations[0].text
      }
    })
  }
}

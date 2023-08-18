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
  
  // Send text to API
  translate(text: string) {
    var sourceList = document.getElementById('source-dropdown')!.children[0]; // List of source buttons
    var sourcebtn = document.getElementById('source-dropbtn')!;
    var targetList = document.getElementById('target-dropdown')!.children[0]; // List of target buttons
    var targetbtn = document.getElementById('target-dropbtn')!;
    var source = '';
    var target = '';

    // Get the language IDs for the API call
    for (var i = 0; i < sourceList.children.length; i++) {
      if (sourceList.children[i].children[0].innerHTML === sourcebtn.innerText) {
        source = sourceList.children[i].children[0].id; // Source select text
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

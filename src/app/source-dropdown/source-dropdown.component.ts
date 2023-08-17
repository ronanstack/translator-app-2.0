import { Component } from '@angular/core';

@Component({
  selector: 'app-source-dropdown',
  templateUrl: './source-dropdown.component.html',
  styleUrls: ['./source-dropdown.component.css']
})
export class SourceDropdownComponent {
  
  onClickSource() {
    // Display all langs
    var dropdown = document.getElementById('source-dropdown')!;
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  onClickLang(lang: string) {
    // Select language
    var sourcebtn = document.getElementById('source-dropbtn')!;
    var dropdown = document.getElementById('source-dropdown')!;
    sourcebtn.innerText = lang;
    dropdown.style.display = "none";
  }
}

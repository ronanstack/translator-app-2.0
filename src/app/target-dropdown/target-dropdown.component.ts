import { Component } from '@angular/core';

@Component({
  selector: 'app-target-dropdown',
  templateUrl: './target-dropdown.component.html',
  styleUrls: ['./target-dropdown.component.css']
})
export class TargetDropdownComponent {

  onClickTarget() {
    // Display all langs
    var dropdown = document.getElementById('target-dropdown')!;
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  onClickLang(lang: string) {
    // Select language
    var targetbtn = document.getElementById('target-dropbtn')!;
    var dropdown = document.getElementById('target-dropdown')!;
    targetbtn.innerText = lang;
    dropdown.style.display = "none";
  }

}

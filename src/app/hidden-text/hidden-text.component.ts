import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hidden-text',
  templateUrl: './hidden-text.component.html',
  styleUrls: ['./hidden-text.component.scss']
})
export class HiddenTextComponent implements OnInit {

  constructor() {
  }

  password = 'topS3cret';
  showPassword = false;
  passwordShown: Date[] = [];

  ngOnInit(): void {
  }

  onTogglePasswordClicked = (event: MouseEvent) => {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      this.passwordShown = [
        new Date(),
        ...this.passwordShown
      ];
    }
  };
}

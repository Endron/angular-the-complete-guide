import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UsernameInputComponent implements OnInit {

  constructor() {
  }

  user = {
    username: ''
  };

  ngOnInit(): void {
  }

  onClearButtonClicked = (event: MouseEvent) => {
    this.user.username = '';
  };
}

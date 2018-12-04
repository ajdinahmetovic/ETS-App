import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate (id) {

    switch (id) {
      case 0 :
        this.router.navigate(['novosti']);
        break;

      case 1:
        this.router.navigate(['smjerovi']);
        break;
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Capi-examen-front-JggCubas';
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.navigateByUrl('/usuariosList');
  }
}

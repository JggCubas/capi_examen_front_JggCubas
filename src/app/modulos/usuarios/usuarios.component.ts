import { HttpClient } from '@angular/common/http';
import {Component, OnInit,Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource,MatTable } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: '/usuarios.component.html'
})
export class UsuariosComponent implements OnInit{
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  private path = 'http://127.0.0.1:8000/userget';
  dataSourceProyectos = {};
  displayedColumns: string[] = ['usuario', 'direccion','fecha','edad'];
  constructor(private http: HttpClient, private router: Router) {
    let domain = window.location.hostname;
  }
  ngOnInit(){
    this.http
        .post(this.path,{})
        .subscribe(val => {
          this.dataSourceProyectos = val;

        });
  }
}

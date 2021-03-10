import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("CNQ",this.router.snapshot.params.id)
  }

}

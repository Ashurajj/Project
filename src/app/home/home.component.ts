import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';          
import { GotHttpService } from '../got-http-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: Array<any> = [];
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    this.gotHttpService.getDetails().subscribe(
      data => {

        let tmpAllKeys = Object.keys(data.data);
        let tmpArray = [];
        for (let prop of tmpAllKeys) { 
            tmpArray.push(data.data[prop]);
        }
        this.details = tmpArray;
          
      },
    
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      })}};

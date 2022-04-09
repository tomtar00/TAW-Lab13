import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() filterText: string = '';
  public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });

  }
}

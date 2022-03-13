import { Component, OnInit , ViewChild} from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('mySidenav', {static:false}) mySidenav:any;
  constructor() { }

  ngOnInit(): void {
  }
  openNav(): void{
    this.mySidenav.nativeElement.style.width ="250px";
  }
  closeNav(event:any): void{
    this.mySidenav.nativeElement.style.width ="0px";
  }
}

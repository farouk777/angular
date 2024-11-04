import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  dataSource: any[]= [];
  displayedColumns: string[] = ['id','cin', 'name', 'type', 'cv', 'createDate'];
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '../datasource';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent {
  public inSearchMode = false;
  public lstPath: any[] = ['.'];
  public isLoading = false;
  public searchValue = null;
  public handleKeyupSearch$ = new Subject<any>();

  @ViewChild('filename', { static: false }) filename: ElementRef;
  // public listItems: any[] = [];

  listItems:DataSource[]=[];
  trackByList = (index: number, item: any) => item.name;



  resetSearchInput() {
    this.searchValue ;
    this.handleKeyupSearch$.next('');
  }




  choosePath(filename: null) {
    this.isLoading = true;
    if (filename) {
      this.lstPath.push(filename);
    }
    this.resetSearchInput();
    document.getElementsByTagName('mat-list')[0].scrollTop = 0;
  }

  goToFolderInSearchMode(path: string) {
    this.lstPath = path.split('/');
    this.choosePath(null);
    this.inSearchMode = false;
  }



}

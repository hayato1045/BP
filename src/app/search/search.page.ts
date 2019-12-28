import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  lists: any;
  searchQuery: '';
  constructor() {
    this.initializeItems();
  }
  initializeItems() {
    this.lists = [
      { name: 'カマタカフェ', relation: 'カフェ', url: '/shop' },
      { name: 'パン屋-kamata', relation: 'パン屋', url: '/shop' },
      { name: '蒲田屋', relation: '和菓子屋', url: '/shop' },
    ];
  }


  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.lists = this.lists.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  ngOnInit() {
  }



}


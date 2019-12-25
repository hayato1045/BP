import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

}

// import { Component, OnInit } from '@angular/core';
// import { Platform } from '@ionic/angular';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   Marker,
//   GoogleMapsAnimation,
//   MyLocation
// } from '@ionic-native/google-maps';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page implements OnInit{
//   map: GoogleMap;

//   // このHomePageクラスが作成されるときに実行される
//   constructor(private platform: Platform) {}

//   // ngOnInitは、AngularJSの準備が完了したら実行される
//   async ngOnInit() {

//     // Apache Cordovaから 'deviceready'イベントが発行されるのを待つ
//     await this.platform.ready();

//     // platform.ready()が完了したら、地図を作成する
//     await this.loadMap();
//   }

//   async loadMap() {

//     // Googleマップを作成
//     this.map = GoogleMaps.create('map_canvas', {
//       camera: {
//         target: {
//           lat: 43.0741704,
//           lng: -89.3809802
//         },
//         zoom: 18,
//         tilt: 30
//       }
//     });

//   }

//   // ボタンが押された時の処理
//   onButtonClick() {

//     // 現在位置を取得
//     this.map.getMyLocation().then((location: MyLocation) => {
//       // アニメーションで指定の位置にズームイン 
//       this.map.animateCamera({
//         target: location.latLng,
//         zoom: 17,
//         tilt: 30
//       });

//       // アニメーションが終了したらマーカーを追加
//       let marker: Marker = this.map.addMarkerSync({
//         title: '@ionic-native/google-maps plugin!',
//         snippet: 'This plugin is awesome!',
//         position: location.latLng,
//         animation: GoogleMapsAnimation.BOUNCE
//       });

//       // 情報ウィンドウの表示
//       marker.showInfoWindow();

//       // もし情報ウィンドウがクリックされたら、アラートを表示
//       marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//         alert('clicked!');
//       })
//     })
//     .catch(err => {
//       // getMyLocationでエラーが発生したら、メッセージを表示
//       alert(err.error_message);
//     });
//   }
// }
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Nothing yet...
})

.controller('SlidesCtrl', function() {
  this.slides = [
    { title: 'Paket 1', id: 1, description: 'Murah meriah', thumb: '../img/paket1.jpg', full: '../img/paket1.jpg' },
    { title: 'Paket 2', id: 2, description: 'murahlah', thumb: '../img/paket1.jpg', full: '../img/paket1.jpg' },
    { title: 'Paket 3', id: 3, description: 'Murah', thumb: '../img/paket1.jpg', full: '../img/paket1.jpg' },
    { title: 'Paket 4', id: 4, description: 'Mahal', thumb: '../img/paket1.jpg', full: '../img/paket1.jpg' }
  ];
})
 
;

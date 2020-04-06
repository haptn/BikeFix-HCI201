import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: 'vehicle.page.html',
  styleUrls: ['vehicle.page.scss']
})
export class VehiclePage 
{
  vehicles: any[] = [
    {
      name: 'Phạm Thị Ngọc Hà',
      problem: 'Thủng lốp',
      src: '/assets/img/yamaha.png'
    },
    {
      name: 'Nguyễn Hiếu',
      problem: 'Hết xăng',
      src: '/assets/img/sirius.jpg'
    },
    {
      name: 'Lưu Vịnh',
      problem: 'Non hơi',
      src: '/assets/img/sym.jpg'
    }
  ]

  constructor() {}

}

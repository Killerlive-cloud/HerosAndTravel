import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {

  data:any;
  
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.data = [
      {
        img: 'assets/seleccionGastronomica.jpg',
        data: {
          titulo: 'Ajiaco',
          imagen: 'assets/Ajiaco.jpg',
          descripcion: 'es una muy rica sopa con pollo',
        }
      },
      {
        img: 'assets/seleccionGastronomica.jpg',
        data: {
          titulo: 'Ajiaco',
          imagen: 'assets/Ajiaco.jpg',
          descripcion: 'es una muy rica sopa con pollo',
        }
      },
      {
        img: 'assets/seleccionGastronomica.jpg',
        data: {
          titulo: 'Ajiaco',
          imagen: 'assets/Ajiaco.jpg',
          descripcion: 'es una muy rica sopa con pollo',
        }
      },
      {
        img: 'assets/seleccionGastronomica.jpg',
        data: {
          titulo: 'Ajiaco',
          imagen: 'assets/Ajiaco.jpg',
          descripcion: 'es una muy rica sopa con pollo',
        }
      }
    ]

      }
    
  
  async  showModal(data:any) {
    const modal= await this.modalCtrl.create ({
      component: ModalPage,
      componentProps: {data},
    });
    await modal.present();

  }

}

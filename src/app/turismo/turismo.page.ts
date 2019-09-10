import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {
  sitios= [{
    nombre:'Parque nacional natural Tayrona',
    imagen:'assets/1 sitio.jpg',
    descripcion:'El Parque Nacional Tayrona, en el norte de Colombia, es una gran zona protegida que abarca las laderas de la Sierra Nevada de Santa Marta en las zonas adyacentes a la costa del Caribe. Es conocida por sus caletas cubiertas por palmeras, lagunas costeras, selva tropical y una abundante biodiversidad. En su centro, las ruinas del Pueblito son un sitio arqueológico al que se accede a través de senderos en los bosques, con terrazas y estructuras construidas por la civilización tayrona.'
  },
  {
    nombre:'Islas Corales del Rosario',
    imagen:'assets/2 sitio.jpg',
    descripcion: 'Las islas del Rosario es un pequeño archipiélago formado por unas 28 islas, ​ que es parte de la zona insular de Cartagena de indias, ​​​ con una superficie terrestre de 20 hectáreas ubicado frente a las costas del Departamento de Bolívar, a la misma latitud que la península de Barú.'
  },
  {
    nombre:'Ciudad Perdida',
    imagen:'assets/3 sitio.jpg',
    descripcion:'Ciudad Perdida, también conocido como Teyuna o Buritaca-200, ​ es un antiguo poblado indígena tayrona y sitio arqueológico perteneciente a la ciudad de Santa Marta, en Colombia. Fue construido alrededor del siglo VIII de nuestra era y es considerado como uno de los principales sitios arqueológicos de Colombia.'
  },
  {
    nombre:'Monserrate',
    imagen:'assets/4 sitio.jpg',
    descripcion:'El cerro de Monserrate es el más conocido de los cerros Orientales de Bogotá. Junto a Guadalupe es uno de los cerros titulares de la ciudad. Monserrate tiene una altitud de 3152 m y se ubica sobre la cordillera oriental.'
  },
  {
    nombre:'Piedra del Peñol',
    imagen:'assets/5 sitio.jpg',
    descripcion: 'El peñón de Guatapé, o piedra del Peñol, es un monolito de 220 metros de altura localizado en Guatapé.​ La piedra de El Peñol es una masa granítica, compuesta por cuarzo, feldespato y mica, fue escalada por primera vez en 16 de julio de 1954 por un habitante de la zona, Luis Eduardo Villegas López.'
  }]
;

  constructor() { }

  ngOnInit() {
  }

}

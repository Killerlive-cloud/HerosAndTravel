import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias = [
    {nombre: 'comida',
    imagen: 'assets/seleccionGastronomica.jpg',
    estado: true,
  },
  {
    nombre: 'playa',
    imagen: 'assets/playas.jpg',
    estado: false,
  },
  {
    nombre: 'bar',
    imagen: 'assets/seleccionGastronomica2.jpg',
    estado: true,
  },
  {
    nombre: 'tendencia',
    imagen: 'assets/tendencias.jpg',
    estado: false,
  }

];

  playas= [
    
    {
    nombre: 'RINCÓN DEL MAR, SUCRE',
    imagen: 'assets/RINCÓN DEL MAR, SUCRE.jpg',
    descripcion: 'Una de las mejores playas de Colombia en la que se puede disfrutar con mayor intensidad el auténtico sabor caribeño está en Rincón del Mar, un pequeño paraíso de costumbres afrodescendientes en el departamento de Sucre.',     
  },
  {
    nombre: 'ARCHIPIÉLAGO DE SAN BERNANDO, SUCRE',
    imagen: 'assets/ARCHIPIÉLAGO DE SAN BERNANDO, SUCRE.jpg',
    descripcion: 'El Archipiélago de San Bernardo se encuentra muy cerca a Cartagena y es un lugar de inigualable belleza, todo un paraíso natural para disfrutar de las mejores playas de Colombia y de la inmensa riqueza marina del océano Atlántico.',     
  },
  {
    nombre: 'PALOMINO, LA GUAJIRA',
    imagen: 'assets/PALOMINO, LA GUAJIRA.jpg',
    descripcion: 'Si quieres un plan medio hippie en el caribe colombiano, Palomino es uno de los mejores destinos que puedes encontrar en el departamento de La Guajira.',     
  },
  {
    nombre: 'CAYO CANGREJO, PROVIDENCIA',
    imagen: 'assets/CAYO CANGREJO, PROVIDENCIA.jpg',
    descripcion: 'Cayo Cangrejo es una pequeña isla ubicada en el Parque Nacional Natural Old Providence McBean Lagoon, que está aproximadamente a 30 minutos en kayak de la cabecera municipal de la Isla Providencia.',     
  }
];

comidas = [
    
  {
  nombre: 'Ajiaco',
  imagen: 'assets/Ajiaco.jpg',
  descripcion: 'Ajiaco es el nombre dado a unas sopas típicas de la América Latina. Chile Se prepara con sobras de asado o con lomo o posta del día anterior, papas, zanahorias, cebolla, huevo, orégano y comino.',     
},
{
  nombre: 'Changua',
  imagen: 'assets/Changua.jpg',
  descripcion: 'La changua es una sopa de la Gastronomía de Colombia, más precisamente de la región del Cundiboyacense y específicamente de la capital colombiana, Bogotá. La changua se prepara fácilmente usando pocos ingredientes: leche, huevos, cebolla, sal, tostadas, mantequilla y cilantro.',     
},
{
  nombre: 'Tamal',
  imagen: 'assets/Tamal.jpg',
  descripcion: 'El tamal es un alimento de origen mesoamericano preparado generalmente a base de masa de maíz rellena de carnes, vegetales, chiles, frutas, salsas y otros ingredientes.',     
},
{
  nombre: 'Carne de pollo',
  imagen: 'assets/Carne de pollo.jpg',
  descripcion: 'La carne de pollo es como se denomina a los tejidos musculares y órganos procedentes del pollo. Es muy frecuente encontrarla en muchos platos y preparaciones de la culinaria de todo el mundo. Su carne se considera un alimento básico y es por esta razón por la que se incluye en el índice de precios al consumo.',     
}
];

bares= [
    
  {
  nombre: 'Black Parrot Bar',
  imagen: 'assets/Black Parrot Bar.jpg',
  descripcion: 'Un bar en getsemani, un lugar muy histórico. Somos un bar con una temática de pirata, realizamos eventos, fiestas, etc. Con excelentes cócteles de la casa, clásico y muchos mas. Música en vivo y un excelente horario.',     
},
{
  nombre: 'Dancefree',
  imagen: 'assets/Dancefree.jpg',
  descripcion: 'Destino popular para clases, eventos y shows de baile en Medellín, Colombia. Ubicado en el barrio El Poblado, a 2 cuadras del sitio turístico popular Parque Lleras.',     
},
{
  nombre: 'Alquímico',
  imagen: 'assets/Alquímico.jpg',
  descripcion: 'Alquímico voca la práctica antigua de la alquimia y evoluciona utilizando métodos experimentales con el fin de lograr la máxima exaltación de sus productos en una armonía sensorial perfecta.',     
},
{
  nombre: 'La Troja',
  imagen: 'assets/La Troja.jpg',
  descripcion: 'La Troja, con 50 años de tradición, fue declarado por el Instituto Distrital de Cultura como Patrimonio Cultural y Musical de la Ciudad de Barranquilla. Un espacio de recreación, cultura y música, donde la salsa es el eje central.',     
}
];

tendencias = [
    
  {
  nombre: 'El minivestido ochentero',
  imagen: 'assets/El minivestido ochentero.jpg',
  descripcion: 'Con volúmenes en las mangas, largo mini, y algún drapeado. El exceso de los 80s, pero reversionado de forma tan cool que les gusta hasta a las nórdicas (tan sencillas ellas). Se presenta como la mejor opción para los looks navideños.',     
},
{
  nombre: 'El pantalón masculino',
  imagen: 'assets/El pantalón masculino.jpg',
  descripcion: 'Es el pantalón que está arrasando entre las más expertas en la moda; ajustado y alto de cintura, ancho en la pernera y estrecho en el tobillo. Su dificultad es proporcional a lo apetecible que resulta en cualquier estilismo.',     
},
{
  nombre: 'El reinado del cardigan',
  imagen: 'assets/El reinado del cardigan.jpg',
  descripcion: 'Esta prenda, tan básica y tan de fondo de armario, ha resurgido del olvido y ahora se lleva abotonada y cerrada, directamente sobre la piel o top lenceros y con vaqueros de talle alto. ¿Las culpables de su vuelta? Las francesas y su allure naturel.',     
},
{
  nombre: 'Pasteles',
  imagen: 'assets/Pasteles.jpg',
  descripcion: 'Como cada primavera, llegarán los tonos pastel para inundar escapares y editoriales y, como cada primavera, nos resistiremos hasta finalmente caer. Lo nuevo : este año se llevan en monocromía, mezclados con opuestos y complementarios (mira cómo lo lucen las danesas) y hasta cercanos al tono neón. ¿Hay mejor manera de alegrar un triste día gris?',     
}
];

categoriaSeleccionada = '';
cambiarSeleccion(tema){
 this.categoriaSeleccionada = tema;
 console.log(this.categoriaSeleccionada);
};




  constructor() {}

}

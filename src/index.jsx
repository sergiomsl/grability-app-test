// El contenido de llamadaAPI.jsx en la raiz del directorio debe reemplazar este contenido para llamar al API

import React from 'react'
import ReactDOM from 'react-dom'
import NewsList from './components/news-list'

let posts = [
  {
    "id": 1,
    "title": "Agotado Chaleco Doble Faz Bogotá Humana - Clara Alcaldesa",
    "content": "Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara Alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.",
    "image": "http://lorempixel.com/300/300/people"
  },
  {
    "id": 2,
    "title": "Falcao pide no ir sentado en el bus de la selección",
    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
    "image": "http://lorempixel.com/300/300/nature"
  },
  {
    "id": 3,
    "title": "El Papa y el Che fueron al mismo preescolar",
    "content": "Aimar, Bergoglio, Cáceres, D’Alessio, Enriquez, Fontanini, Guevara, Hammet…” No es la alineación de un equipo de fútbol argentino. Es la lista de párvulos encontrada en el archivo de la escuela Héroes del Mañana en San Isidro, Provincia de Buenos Aires, Argentina, que encontró hace menos de un mes Horacio Maidana, biógrafo argentino de Jorge Mario Bergoglio, al seguir los pequeños pasos de la infancia del Sumo Pontífice.",
    "image": "http://lorempixel.com/300/300/transport"
  },
  {
    "id": 41,
    "title": "Nada de eclipse, atentado de las FARC dejó sin luz a la luz a la luna, denuncia Uribe",
    "content": "Iracundo y desencajado, el expresidente Álvaro Uribe denunció hoy en rueda de prensa que la sombra que cubrió a la luna el pasado domingo en la noche fue un corte masivo de luz consecuencia de un atentado del frente “Compañera Laika” de las Farc.",
    "image": "http://lorempixel.com/300/300/city"
  }
]

ReactDOM.render(<NewsList list={ posts } />, document.getElementById('application'))

import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [mensaje, setMensaje] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `${mensaje} `;
  });

  function cargarFrase() {
    let numero = Math.round((Math.random() * 100))
    console.log(numero)
    setMensaje(frases[numero])
  }

  let mes = []
  mes[0] = 'Enero'
  mes[1] = 'Febrero'
  mes[2] = 'Marzo'
  mes[3] = 'Abril'
  mes[4] = 'Mayo'
  mes[5] = 'Junio'
  mes[6] = 'Julio'
  mes[7] = 'Agosto'
  mes[8] = 'Septiembre'
  mes[9] = 'Octubre'
  mes[10] = 'Noviembre'
  mes[11] = 'Diciembre'


  let frases = []

  frases[0] = 'Preocupate por ser feliz, no por esa estupidez que te esta preocupando.'
  frases[1] = 'Dos vasos de cerveza esta bien, tres vuelve a ser poco.'
  frases[2] = 'Si tus sueños no se hacen realidad, preguntate cuanto tiempo le estas dedicando.'
  frases[3] = 'Si estas leyendo esto mientras conduces tu auto, deberias estar preso.'
  frases[4] = '¿Nunca escuchaste Iceberg del Sur? Deberias.'
  frases[5] = 'Habia muy pocas posibilidades de que te salga este mensaje.'
  frases[6] = 'Lo mas importante es que lo mas importante tiene que ser importante. Así de fácil'
  frases[7] = 'Cepillate los dientes correctamente y usa hilo dental, y solo tendras que ir al dentista si te rompen un diente de una trompada.'
  frases[8] = 'El corazón de un hombre ama solo una vez. El resto de las veces no lo se.'
  frases[9] = 'Dentro de 150 años no importara nada de todo esto, así que sonrie.'
  frases[10] = 'Abandona las frituras de una buena vez.'
  frases[11] = 'Quizas pasas demasiado tiempo con tu celular.'
  frases[12] = 'Esperar lo mejor, pero estar preparado para lo peor.'
  frases[13] = 'No puedes morir sin antes ver La Guerra de las Galaxias (no verla no te hace inmortal.'
  frases[14] = 'Deja de darle tanta importancia a esa persona que tanto daño te hace.'
  frases[15] = 'Quizas estas esperando leer un mensaje que te cambie la vida. Esas cosas pasan solo en la realidad, no en mi web'
  frases[16] = 'Te recomiendo leer Los Pilares de la Tierra, de Ken Folliet.'
  frases[17] = 'Tu peso esta bien, la balanza esta mal.'
  frases[18] = 'Juega con tu perro, observalo, disfrutalo, entiendelo, y quizas algun dia seas sabio como el.'
  frases[19] = 'Bienvenido a mi web.'
  frases[20] = 'Que la fuerza te acompañe.'
  frases[21] = '¿Ya me sigues en mi instagram? Si es asi pasate y me paso ahree'
  frases[22] = 'Esto es lo mejor que vas a ver hoy.'
  frases[23] = 'Mis problemas empiezan cuando no le reviso el agua a la trafic.'
  frases[24] = 'Quedate con el cielo al que me invitaste a ir.'
  frases[25] = 'No hay evidencia cientifica de que esta pagina es util.'
  frases[26] = 'Si todavia no esta la vacuna del coronavirus, sigue clickeando.'
  frases[27] = 'Cuidado, detras de ti, un mono de tres cabezas.'
  frases[28] = '¿Plumas quemadas?.'
  frases[29] = 'Bienvenido a mi web. Aqui tampoco encontraras la felicidad.'
  frases[30] = 'zapato.'
  frases[31] = 'za-pa-to.'
  frases[32] = 'Cosecho zapallos en invierno.'
  frases[33] = 'Canto canciones de Disney mientras me baño.'
  frases[34] = 'La ventanita del amor se me cerro.'
  frases[35] = 'Elige un libro y leelo.'
  frases[36] = 'No sos vos, soy yo.'
  frases[37] = 'Siempre es un buen momento para usar pantalones rojos. Mentira.'
  frases[38] = 'Esta es mi web para ganar seguidores.'
  frases[39] = 'Haz una lista de las cosas que deberias cambiar y cambialas.'
  frases[40] = 'Aprendete los nombres de los musculos del cuerpo. Elige uno y trabajalo'
  frases[41] = '¿Pluton es un planeta? Averigualo.'
  frases[42] = 'Elige cualquier libro de Stephen King. leelo, y despues me escribes.'
  frases[43] = 'Ya debes haber descubierto la importancia de salir a cualquier parte y estar con gente. Valorala cuando la recuperes.'
  frases[44] = 'Mira fotos viejas.'
  frases[45] = 'Aprende a cocinar. Si ya sabes, enseña a cocinar. Si ya lo haces, aprende a disfrutar. Si ya disfrutas, sigue asi.'
  frases[46] = 'Mira La Guerra de las Galaxias entendiendo que Darth Vader es solo una victima de la sociedad'
  frases[47] = 'Si tienes un instrumento, aprende a tocarlo. Si no lo tienes, construyelo.'
  frases[48] = 'Ordena la cocina. Bien sabes que tengo razon'
  frases[49] = 'Abraza y no sueltes.'
  frases[50] = 'Que bajón!'
  frases[51] = 'Aguantemos un poquito más.'
  frases[52] = 'Ya estamos en ' + mes[new Date().getMonth()] + ', increible'
  frases[53] = 'Los paraguas no solo sirven para frenar la lluvia.'
  frases[54] = 'La trafic esta cargada para tocar el fin de semana. (O tambien para fundirse)'
  frases[55] = 'Va..................... y viene.'
  frases[56] = 'Se hace de noche cuando ella se va. Se hace de día cuando ella regresa.'
  frases[57] = 'Hay maremotos en algún lugar, cada vez que ella pisa el suelo.'
  frases[58] = 'Harina, salsa y queso. Ya puedes hacer tu propia pizza.'
  frases[59] = 'Yo era Miguel Angel en las Tortugas Ninjas.'
  frases[60] = 'Que se prenda fuego esa guitarra Pico.'
  frases[61] = 'Vamos Pepe.'
  frases[62] = 'Con la proxima frase podras agradarle a todo el mundo.'
  frases[63] = 'Miento.'
  frases[64] = 'Piedra, papel o tijeras.'
  frases[65] = 'Esa canción siempre esta en mi cabeza.'
  frases[66] = 'Comprate una bici.'
  frases[67] = '¿Hasta que nivel llegaste en el Tetris?'
  frases[68] = 'Me encanta la música de Mario Bros.'
  frases[69] = 'Vuelve a comenzar.'
  frases[70] = 'Y fue extraño... extraño como el corazón.'
  frases[71] = 'No pregunten por Flor.'
  frases[72] = 'No es una guitarra, es un bajo.'
  frases[73] = 'Planta un arbol y escribe una canción.'
  frases[74] = '¿Crees haber leido todas las frases?.'
  frases[75] = 'Tengo mas para decir, aun no he terminado.'
  frases[76] = 'Todo va a estar bien.'
  frases[77] = 'Este ' + mes[new Date().getMonth()] + ' va a ser difícil.'
  frases[78] = '"Mas volumen" es mi segundo nombre.'
  frases[79] = 'Yo manejo, Pico va al medio y Pepe en la ventana.'
  frases[80] = 'ESTRIBILLO (coros-coros)'
  frases[81] = 'No vale la pena llorar.'
  frases[82] = 'GAME OVER.'
  frases[83] = 'No todo lo que brilla es amor. A veces es la luna.'
  frases[84] = 'Eso es bueno para una canción.'
  frases[85] = 'Ya hiciste demasiadas veces click.'
  frases[86] = 'Estoy muy conforme con mi pagina web.'
  frases[87] = 'Si quieres que agregue mas mensajes, mandame un texto.'
  frases[88] = 'Iceberg del Sur. Mi banda.'
  frases[89] = 'Que bueno que estuvieron los penales de Argentina y Holanda.'
  frases[90] = '¿Frenar? JAMAS.'
  frases[91] = 'Hola soy el Conde Agur, tal vez me recuerdes de Clinicas para Bajo, o de Conde Anonimus, o de Conde Grua de Peluches.'
  frases[92] = 'Suficiente.'
  frases[93] = '¿Escucharon Los Caligaris? QUE BUENA BANDA.'
  frases[94] = 'Puedo estar mucho mejor sin ti.'
  frases[95] = 'Esta es la historia de una chica que vive en Carlos Paz pero estudia en Córdoba Capital.'
  frases[96] = 'Lo nuestro es de libros.'
  frases[97] = 'Todo lo bueno esta por venir.'
  frases[98] = 'Jugosus Maximus Tercero.'
  frases[99] = 'Traeme las paginas amarillas.'
  frases[100] = 'Piensa en grande.'



  return (
    <div>
      <p>{mensaje} </p>
      <button onClick={() => cargarFrase()}>
        diga algo
      </button>
    </div>
  );
}

export default App;

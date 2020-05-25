import React, { useState } from 'react';
import '../../App.css';
import audio1 from '../../audio/audio1.mp3';
import audio2 from '../../audio/audio2.mp3';
import { getCountQuotes, getQuotes } from '../../components/conde_quotes/CondeQuotes.js';
import '../../components/conde_quotes/style.css';
import Counter from '../../components/counter/Counter';
import dance from '../../imgs/cara-color.png';
import mute from '../../imgs/cara_sin_hablar-min.png';
import fb from '../../imgs/fb.png';
import talk from '../../imgs/hablando-min.png';
import instagram from '../../imgs/instagram.png';
import twitter from '../../imgs/twitter.png';



const CondeAgur = () => {


  const [mensaje, setMensaje] = useState('... pensando ...');
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('https://twitter.com/intent/tweet?hashtags=CondeAgur&text=' + mensaje)
  const [lastQuote, setLastQuote] = useState('')
  const [colorFace, setColorFace] = useState(false)
  const [contador, setContador] = useState(0)
  // De forma similar a componentDidMount y componentDidUpdate

  function cargarFrase() {
    let numero = 0;
    if (contador != 12 && contador != 23) {
      numero = randomInt(0, (getCountQuotes() - 1))
    }
    else {
      numero = (contador == 12) ? 101 : 102;
    }
    setMensaje(getQuotes(numero))
    setLastQuote(getQuotes(numero))
    setUrl('https://twitter.com/intent/tweet?via=CondeAgur&text=' + getQuotes(numero))
    if (numero == 101 || numero == 102) {
      var song = getAudio(numero);
      setColorFace(true)
      song.play();
      song.addEventListener("ended", function () {
        song.currentTime = 0;
        setColorFace(false)
        setMensaje('... pensando ...')
      });
    }
    else {
      talking(getQuotes(numero).split(' ').length, true)
    }
    setContador(contador + 1)
  }

  function getAudio(number) {
    if (number == 101) {
      return new Audio(audio1);
    }
    if (number == 102) {
      return new Audio(audio2);
    }

  }

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  const talking = (count, value) => {
    setOpen(value)
    if (count != 0) {
      let time = 600
      if (!value) {
        time = 100
      }
      setTimeout(() => {
        talking((count - 1), !value)
      }, time)

    } else {
      setMensaje('... pensando ...')
      setOpen(false)
    }


  }

  return (
    <div id="frame">
      <div id="border">
        <h1>Toca la nariz y descubre la magia</h1>
        <div id="msgConde">


          <div className="bubble bubble-bottom-left">{mensaje}</div>
          <br />
          <div id="animationFace">
            <img id="conde" src={mute} onClick={() => cargarFrase()} ></img>
            {open && <img id='conde' src={talk} ></img>}
            {colorFace && <img id='conde' src={dance} ></img>}
          </div>
        </div>
        <div id="bottom">
          <br /><br />
          <h3>Última frase:</h3>
          <h3 id="quote">"{lastQuote}"</h3>
          <div id="social_icons"><a href={url} target="_blank"><img id="socialLink" src={twitter}></img></a><a href='https://www.facebook.com/agustin.moyano.545' target="_blank"><img id="socialLink" src={fb}></img></a><a href='https://www.instagram.com/condeagur/' target="_blank"><img id="socialLink" src={instagram}></img></a>
          </div>

        </div>
      </div>
      <Counter />
    </div>

  );
}

export default CondeAgur;

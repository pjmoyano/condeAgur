import React, { useEffect, useState } from 'react';
import './App.css';
import { quotes } from './components/conde_quotes/CondeQuotes.js';
import './components/conde_quotes/style.css';
import mute from './imgs/cara_sin_hablar-min.png';
import email from './imgs/email.png';
import fb from './imgs/fb.png';
import talk from './imgs/hablando-min.png';
import instagram from './imgs/instagram.png';
import twitter from './imgs/twitter.png';
const App = () => {



  const [mensaje, setMensaje] = useState('... pensando ...');
  const [imgConde, setImgConde] = '';
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('https://twitter.com/intent/tweet?hashtags=CondeAgur&text=' + mensaje)
  const [lastQuote, setLastQuote] = useState('')
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `${mensaje} `;
  });

  function cargarFrase() {
    let numero = Math.round((Math.random() * 100))
    console.log(numero)
    setMensaje(quotes[numero])
    setLastQuote(quotes[numero])
    setUrl('https://twitter.com/intent/tweet?hashtags=CondeAgur&text=' + quotes[numero])
    talking(quotes[numero].split(' ').length, true)
  }


  const talking = (count, value) => {
    console.log('entro')
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
        {/* <!-- Start of Globel Code --> */}
        {/* <CENTER> */}

        {/* <!-- START DO NOT TAMPER WITH ANYTHING ELSE BELOW THIS LINE FOR YOUR WEBTV & UNIX VISITORS --> */}
        <script language="JavaScript" src="http://006.free-counters.co.uk/count-123.js">
        </script>
        <a href="http://www.free-counters.co.uk" target="_blank">
          <img src="http://006.free-counters.co.uk/count-123.pl?count=condeagur&cntvisible=no&mode=noscript" alt="Free Counters" title="Free Counters" border="0" />
        </a>

        <br /><a href="http://www.free-counters.co.uk" target="_blank">Free Trackers</a><br /> <a href="http://www.free-counters.co.uk" target="_blank">Help</a>
        <br />


        <h1>Toca la nariz y descubre la magia</h1>
        <div id="msgConde">
          <div class="bubble bubble-bottom-left">{mensaje}</div>
          <br />
          <div id="animationFace">
            <img id="conde" src={mute} onClick={() => cargarFrase()} ></img>
            {open && <img id='conde' src={talk} onClick={() => cargarFrase()} ></img>}
          </div>
        </div>
        <div id="bottom">
          <br /><br />
          <h3>Última frase:</h3>
          <h3 id="quote">"{lastQuote}"</h3>
          <div id="social_icons"><a href={url} target="_blank"><img id="socialLink" src={twitter}></img></a><a href={url} target="_blank"><img id="socialLink" src={fb}></img></a><a href={url} target="_blank"><img id="socialLink" src={instagram}></img></a><a href={url} target="_blank"><img id="socialLink" src={email}></img></a>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;

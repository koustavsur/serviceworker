import './App.css';
import React, { useEffect } from 'react';



window.addEventListener('load', () => {
  console.log(`Public url: ${process.env.PUBLIC_URL}`);
  console.log('Inside Event listener');
  if ('serviceWorker' in navigator) {
    console.log('Service worker exists');
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  }
});

const App = () => {

// const handleClick = () => {
//   window.open('https://admirable-starburst-941a01.netlify.app/');
// };

  useEffect(()=>{
    console.log(`Mounted`);
    // const resp = await fetch('https://admirable-starburst-941a01.netlify.app/', {mode: 'cors'});

    // const result = await resp.text();
    
    // console.log(result);

    // document.getElementById('content').innerHTML= result;

  }, []);

  return (
    <div className="App">
      <header>
        <h1>Service Workers Simplified</h1>
        <h2>Caching Strategies</h2>
      </header>
      <main>
        <h2>Page Content</h2>
        <p>
          <img
            src="https://picsum.photos/id/558/300/300/"
            alt="placeholder image"
          />
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ea
          distinctio, quidem nulla nostrum alias. Facere unde odit ipsam
          voluptates soluta laborum optio vero fugiat, iusto voluptas, adipisci
          sunt. Nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem expedita quos alias cumque consectetur. Aperiam ex illo enim
          deleniti, molestias cupiditate dolorem commodi tempore laboriosam
          ducimus suscipit, excepturi, consequatur similique!
        </p>
        <div id="content"></div>
      </main>
    </div>
  );
}

export default App;

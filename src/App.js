import logo from './logo-whitebg.png';
import barofdreamsparticipants from './images/barofdreams-participants.jpg';
import barofdreams from './images/barofdreams-photo.jpg';
import barofdreamsadventure from './images/barofdreams-adventure.jpg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header App-header--phantom">
        Phantom Gift
      </header>
      <p className="App-subheader">Video Games and Immersive Theater</p>

      <div className="App-body">

        <div className="App-body__header">
          <span style={{marginRight: '10px'}}>
            2021
          </span>
          <strong style={{marginRight: '10px'}}>
            Magic.jpeg
          </strong><br/>
          <a target="_blank" href="http://magicjpeg.com">Play Now -></a>
        </div>
        <div className="App-body__header">
          Coloring Game with NFT Ownership
        </div>
        <div className="App-body__embed">
          <iframe style={{border: 'none'}} src="https://streamable.com/e/7li5e2" allowfullscreen></iframe>
        </div>

        <br/><br/>

        <div className="App-body__header">
          <span style={{marginRight: '10px'}}>
            2019
          </span>
          <strong style={{marginRight: '10px'}}>
            Bar of Dreams LA
          </strong><br/>
          <a target="_blank" href="https://noproscenium.com/the-joy-of-waking-up-bar-of-dreams-los-angeles-review-ff4fc8637fa9">
          Read Review ->
          </a>
        </div>
        <div className="App-body__header">
          Interactive Comedy Experience that ran for over a year in North Hollywood
        </div>
        <img className="App-body__image" src={barofdreams}/>
        <img className="App-body__image" src={barofdreamsparticipants}/>


        <br/><br/>
        <br/><br/>

        <div className="App-body__header">
          <span style={{marginRight: '10px'}}>
            2018
          </span>
          <strong style={{marginRight: '10px'}}>
            Bar of Dreams Adventure Series
          </strong><br/>
          <a target="_blank" href="https://noproscenium.com/la-bar-of-dreams-adventure-series-red-b76ecd885acf">
            Read Review ->
          </a>
        </div>
        <div className="App-body__header">
          Prank Experience at In-and-Out Burger
        </div>
        <img className="App-body__image" src={barofdreamsadventure}/>
      </div>

    </div>
  );
}

export default App;

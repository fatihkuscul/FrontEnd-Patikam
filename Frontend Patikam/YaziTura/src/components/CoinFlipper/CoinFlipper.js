import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
    
    state = {
      side: "tura",
      flipping: false,
      toplamAtis: 0,
      turaSayisi: 0,
      yaziSayisi: 0,
      showSonuc: false 
    };
  

  // ilk yüklenildiğinde random sayı belirlemek için
  componentDidMount(){
   this.setState({side: this.sayiBelirle() === 0 ? "tura" : "yazi"})
  }

  sayiBelirle = () => Math.floor(Math.random()*1000%2);

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true, toplamAtis: this.state.toplamAtis+1, showSonuc: true });
   
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    // 0 Tura - 1 Yazı
    this.sayiBelirle() == 0 ? 
        this.setState({side: "tura" , turaSayisi: this.state.turaSayisi+1})      
      : 
        this.setState({side: "yazi" , yaziSayisi: this.state.yaziSayisi+1});
      
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />

        <button onClick={this.handleClick} className="button">Atış</button>
        <p>
          Toplam
          <strong> {this.state.toplamAtis} </strong>
          atıştan
          <br></br>
          <strong> {this.state.turaSayisi} </strong> atış tura
          <br></br>
          <strong> {this.state.yaziSayisi} </strong>
          atış yazı geldi.
        </p>
        {this.state.showSonuc && 
          <p className="sonuc">
             <strong>{this.state.side.toUpperCase()}</strong> geldi
          </p>
        }
      </div>
    );
  }
}

export default CoinFlipper;

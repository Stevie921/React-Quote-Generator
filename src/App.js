import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: ""
    }

    this.useAPI = this.useAPI.bind(this);
  }

 useAPI(){
     fetch("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=50&format=json&lang=en")
       .then(res => res.json())
       .then(
        (result) => {
           this.setState({
           quote: result.quoteText,
           author: result.quoteAuthor,
         });
         },
         (error) => {
          console.log(error);
        }
      )
       let body = document.getElementsByTagName("body")[0];
       let quotes = document.getElementsByClassName("fas");
       let randomColor = Math.floor(Math.random() * 256);
       let finalColor = "";
       for(let i = 0; i < 3; i++){
        randomColor = Math.floor(Math.random() * 256);
        finalColor += randomColor + " ";
       }
      body.style.backgroundColor = "rgb(" + finalColor + ")";
      for(let i = 0; i < quotes.length; i++){
        quotes[i].style.color = "rgb(" + finalColor + ")";
      }
     } 
 
 componentDidMount() {
     this.useAPI();
 } 


  
  render() {
   return (
    <div className="App">
     <div id="quote-box">
      <i className="fas fa-quote-left"></i>
        <div>
         <p id="text">{this.state.quote}</p>
         <p id="author">{"- " + this.state.author}</p>
         <a id="new-quote" onClick={this.useAPI}>New Quote</a>
         <a id="tweet-quote" className="twitter-share-button" href={"https://twitter.com/intent/tweet?text=" + this.state.quote + " - " + this.state.author} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
         </div>
        <i className="fas fa-quote-right"></i>
       </div>
      </div>
    );
  }
}

export default App;

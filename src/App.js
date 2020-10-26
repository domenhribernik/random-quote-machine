import { Component } from "react";


class App extends Component{
  constructor() {
    super();
    this.state = {
      test: "Loading...",
      author: "Loading..."
    }
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote = () => {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let r = Math.floor(Math.random() * data.length)
            console.log(data[r])
            this.setState({
                text: data[r].text,
                author: data[r].author
            })
        })
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.text}</div>
        <div id="author">{this.state.author == null ? "- Unknown" : "- " + this.state.author}</div>
        <div class="buttonContainer">
          <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_black"><i class="fa fa-twitter"></i></a>
          <button id="new-quote" onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

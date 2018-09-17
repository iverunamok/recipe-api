import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  };

  componentDidMount() {
    fetch("https://www.food2fork.com/api/search?key={api_key}&q=sausage")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            recipes: result.recipes
          });
        }
      )
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kelsey's Kitchen</h1>
        </header>
        <Search />
      </div>
    );
  }
}



export default App;

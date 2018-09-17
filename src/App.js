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
    fetch("https://www.food2fork.com/api/search?key={api-key}&q=sausage")
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
        <ul style={{listStyleType: "none"}}>
                    {recipes.map(recipe => (
                        <li key={recipe.recipe_id}>
                            <p>{recipe.title}</p>
                            <a href={recipe.f2f_url}>
                                Check Out the recipe
                            </a>
                            <img src={recipe.image_url}>
                            </img>
                        </li>
                    ))}
                </ul>
      </div>
    );
  }
}



export default App;

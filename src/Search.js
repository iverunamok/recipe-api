import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    };

    render() {
        const {recipes} = this.state;
        return (
            <div>
                <btn>Search</btn>
                <h2>Results</h2>
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
        )
    }
}

export default Search;
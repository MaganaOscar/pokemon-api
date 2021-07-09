import React, { useState, useEffect } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState("");
    // const [clicked, setClicked] = useState(false);



    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
            {
                pokemon.length > 0 && pokemon.map((this_pokemon, index) => {
                    return (
                        <li>{this_pokemon.name}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Pokemon;
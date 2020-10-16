import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Pokemon from './Details'

function Table() {

 
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(res=>{
              setPokemon(res.data.results.map(p => p.name))
              
            
          })
          
      }, []);

    return (
        <div>
           <Pokemon pokemon={pokemon} />
        </div>
    )
}

export default Table

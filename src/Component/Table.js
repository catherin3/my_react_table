import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from './Details'
import Pagination from './Pagination'

function Table() {

    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel
        axios
            .get(currentPageUrl,{
                cancelToken: new axios.CancelToken(c=> cancel = c)
            }).then(res => {
                setLoading(false)
                setNextPageUrl(res.data.next)
                setPrevPageUrl(res.data.previous)
                setPokemon(res.data.results.map(p => p.name))


            })

            return () =>cancel()
            

    }, [currentPageUrl]);

    if(loading) return ("Loading...")

    function goToNextPage(){
        setCurrentPageUrl(nextPageUrl)
    }

    function goToPreviousPage(){
        setCurrentPageUrl(prevPageUrl)
    }

    return (
        <div>
            <Pokemon pokemon={pokemon} />
            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPrevPage={prevPageUrl ? goToPreviousPage: null}
            />
        </div>
    )
}

export default Table

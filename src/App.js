import React, { useEffect, useState,useMemo } from 'react';
import './App.css'
import Table from './ReactTableEx2/Table'


const App = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      const body = await response.json()
      const contacts = body.results
      console.log(contacts)
      setData(contacts)
    }
    doFetch()
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "URL",
        accessor: "url",
      },
      
    ],
    []
  )


  return <div><Table columns={columns} data={data}/></div>
}

export default App


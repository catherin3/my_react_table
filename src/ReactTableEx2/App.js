import React, { useEffect, useState, useMemo } from 'react';
import { Button } from '@material-ui/core'
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
      // {
      //   Header: "ID",
      //   Footer: "ID",
      //   accessor: "tableData.id",
      //   disableSortBy: true
      // },
      {
        Header: () => null,
        id: 'expander', // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        )
      },
      {
        Header: "Name",
        Footer: "Name",
        accessor: "name",
      },
      {
        Header: "URL",
        Footer: "URL",
        accessor: "url",
        disableSortBy: true
      },
      {
        Header: "Actions",
        Footer: "Actions",
        id: 'actions',
        disableSortBy: true,
        accessor: str => "actions",
        Cell: row => (
          <>
            <Button variant="contained" color="primary" style={{ margin: 10 }}>EDIT</Button>
            <Button variant="contained" color="primary" >
              DELETE
          </Button>
          </>

        )
      },

    ],
    []
  )

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "10px"
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );



  return (
    <div> <Table
      columns={columns}
      data={data}
      // We added this as a prop for our table component
      // Remember, this is not part of the React Table API,
      // it's merely a rendering option we created for
      // ourselves
      renderRowSubComponent={renderRowSubComponent}
    />
    </div>
  );
}

export default App


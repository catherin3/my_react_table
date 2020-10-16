import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'

function BasicTable() {

    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(()=> 'https://pokeapi.co/api/v2/pokemon?limit=807',[])

    const tableInstance = useTable({
        columns,
        data
    })

    return (
        <div>
            <table>
                
            </table>
        </div>
    )
}

export default BasicTable

import React from 'react'
import { Button } from '@material-ui/core';

function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div>
            {goToPrevPage && <Button onClick={goToPrevPage} variant="contained" color='primary' style={{margin: 10}}>Previous</Button>}
            {goToNextPage && <Button onClick={goToNextPage} variant="contained" color='primary'>Next</Button>}
        </div>
    )
}

export default Pagination

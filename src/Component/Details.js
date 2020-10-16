import React from 'react'
import { makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
let id = 0;



function Table2({ pokemon }) {

    const useStyles = makeStyles((theme) => ({
        tr: {
            backgroundColor: '#f2f2f2',
        },
        th: {
            padding: 10,
            backgroundColor: '#4CAF50',
            color: 'white',

        },
        table: {
            width: '100%',
            tableLayout: 'fixed',

        }

    }));

    const classes = useStyles();


    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
      }


    return (
        <table className={classes.table} >
            <thead >
                <tr className={classes.tr}>
                    <th className={classes.th}></th>
                    <th className={classes.th}>ID</th>
                    <th className={classes.th}>Name</th>
                    <th className={classes.th}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {pokemon.map(p => (
                    <tr className={classes.tr} key={p}>
                        <td ><input type="checkbox" /></td>
                        <td >{id}</td>
                        <td >{p}</td>
                        <td >
                            <EditIcon  onClick={handleClick} style={{ padding: 8 }} />
                            <AddBoxIcon style={{ padding: 8 }} />
                            <DeleteIcon style={{ padding: 8 }} />
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default Table2

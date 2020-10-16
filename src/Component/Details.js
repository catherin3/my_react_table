import React from 'react'
import { makeStyles,Button,TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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

    const removeData = (id) => {

        if (window.confirm('Are you sure?')) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application.json',
                    'Content-Type': 'application.json'
                }
            })
        }
    }



    return (
        <div>
            <TextField label="Name" variant="outlined" />
            <Button variant="contained" color = "primary" style={{margin:10}}>Add</Button>

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
                                <EditIcon onClick={handleClick} style={{ padding: 8 }} />
                                <DeleteIcon style={{ padding: 8 }} onClick={() => removeData(id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table2




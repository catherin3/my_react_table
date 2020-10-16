import React from 'react';
import { makeStyles, Checkbox, TableHead, TableRow, TableCell, TableBody, Paper, Table, TableContainer } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';

let id = 0;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tr: {
    backgroundColor: '#f2f2f2',
},
th: {
    padding: 10,
    backgroundColor: '#4CAF50',
    color: 'white',

},
});


export default function BasicTable({ pokemon }) {
  const classes = useStyles();
  id++

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tr}>
            <TableCell align="left" className={classes.th}></TableCell>
            <TableCell align="left" className={classes.th}>ID</TableCell>
            <TableCell align="center" className={classes.th}>Name</TableCell>
            <TableCell align="center" className={classes.th}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.map(p => (
            <TableRow>
              <TableCell align="left"><Checkbox /></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center" key={p}>{p}</TableCell>
              <TableCell align="center"><EditIcon style={{ padding: 8 }} /><AddBoxIcon style={{ padding: 8 }} /><DeleteIcon style={{ padding: 8 }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from 'react'
// import { makeStyles} from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import DeleteIcon from '@material-ui/icons/Delete';
// let id = 0;

// function Table2({ pokemon }) {
//     id++
//     const useStyles = makeStyles((theme) => ({
//         tr: {
//             backgroundColor: '#f2f2f2',
//         },
//         th: {
//             padding: 10,
//             backgroundColor: '#4CAF50',
//             color: 'white',

//         },
//         table: {
//             width: '100%',
//             tableLayout: 'fixed',

//         }

//     }));

//     const classes = useStyles();
//     return (
//                 <table cellPadding={10} cellSpacing={10} className={classes.table} >
//                     <thead >
//                         <tr className={classes.tr}>
//                             <th className={classes.th}></th>
//                             <th className={classes.th}>ID</th>
//                             <th className={classes.th}>Name</th>
//                             <th className={classes.th}>Actions</th>
//                             </tr>
//                     </thead>
//                     <tbody>
//                         {pokemon.map(p => (
//                             <tr className={classes.tr}>
//                                 <td><input type="checkbox"/></td>
//                                 <td>1</td>
//                                 <td key={p}>{p}</td>
//                                 <td><EditIcon style={{ padding: 8 }} /><AddBoxIcon style={{ padding: 8 }} /><DeleteIcon style={{ padding: 8 }} /></td>
//                             </tr>
//                         ))}
//                     </tbody>

//                 </table>
//     )
// }

// export default Table2

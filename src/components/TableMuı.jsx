import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styles from "../styles/modules/tableMuı.module.scss"
import Actions, { Completed } from './Actions';

const columns = [
  { id: 's', label: 'S/N', minWidth: 70 },
  { id: 'name', label: 'Name', minWidth: 150 },
  {
    id: 'priority',
    label: 'Priority',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'completed',
    label: 'Completed',
    minWidth: 100,
    align: 'center',

  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'center',
  },
];

function createData(s, name, priority, completed, action) {

  return { s, name, priority, completed, action };
}

const rows = [
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(2, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),
  createData(1, 'isim', "öncelik", <Completed />, <Actions />),

];

function TableMuı() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section className={styles.table}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table className={styles.test} stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow  >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className={styles.title}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
}

export default TableMuı

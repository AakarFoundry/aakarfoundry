import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { TablePagination } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#054470",
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

function createData(name, id, status, department) {
  return { name, id, status, department };
}

const rows = [
  createData("Vinayak Joshi 1", "12345", "54321 09876", "Information Technology"),
  createData("Olivia Smith 2", "67890", "32109 87654", "Human Resources"),
  createData("Liam Johnson 3", "54321", "98765 43210", "Finance"),
  createData("Noah Davis 4", "98765", "91234 56789", "Research and Development"),
  createData("Ava Miller 5", "11111", "87654 32109", "Sales"),
  createData("Isabella Lee 6", "11115", "87651 23459", "Legal"),
  createData("Sophia Martinez 7", "11616", "76512 34980", "Product Management"),
  createData("Mason Clark 8", "11187", "65423 19802", "Customer Service"),
];

export default function Approval() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const slicedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
        mt: "5rem",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> Name</StyledTableCell>
              <StyledTableCell align="center"> ID</StyledTableCell>
              <StyledTableCell align="center">Contact No</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>

              <StyledTableCell align="center">Approval</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.department}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    style={{
                      background: "#64c664",
                      minWidth: "100px",
                      marginRight: "10px",
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      background: "#c42222",
                      minWidth: "100px",
                    }}
                  >
                    No
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
        backIconButtonText="Previous Page"
        nextIconButtonText="Next Page"
      />
    </Container>
  );
}

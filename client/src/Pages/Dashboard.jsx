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
    border: 0,
  },
}));


function createData(name, calories, status, views) {
  return { name, calories, status, views };
}

const rows = [
  createData("Customer 1", "12345", "Approve", "100"),
  createData("Customer 2", "67890", "Pending", "50"),
  createData("Customer 3", "54321", "Incomplete", "75"),
  createData("Customer 4", "98765", "Rejected", "30"),
  createData("Customer 5", "11111", "Success", "90"),
  createData("Customer 6", "11431", "Rejected", "93"),
  createData("Customer 7", "54646", "Pending", "60"),
  createData("Customer 8", "64566", "Incomplete", "80"),
  createData("Customer 9", "23424", "Success", "32"),
];

export default function Dashboard() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Customer Name</StyledTableCell>
              <StyledTableCell align="center">Customer ID</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color={
                      row.status === "Approved"
                        ? "approve"
                        : row.status === "Incomplete"
                        ? "primary"
                        : row.status === "Pending"
                        ? "warning"
                        : row.status === "Rejected"
                        ? "error"
                        : "success"
                    }
                    
                    style={{ minWidth: "8rem" }}
                  >
                    {row.status}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    style={{ background: "#3E5C72D9", minWidth: "100px" }}
                  >
                    View Form
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

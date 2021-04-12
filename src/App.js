import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import rows from "./data.json";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function BasicTable() {
  const classes = useStyles();

  const calculateRewardPointsForCustomer = (price) => {
    if (price >= 50 && price < 100) {
      return  price -50;
    } else if (price > 100) {
      return 2 * (price - 100) + 50;
    }else return 0;
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Customer ID</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Reward Points</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.customerId}>
                <TableCell component="th" scope="row">
                  {`Customer - ${row.customerId}`}
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{ calculateRewardPointsForCustomer(row.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

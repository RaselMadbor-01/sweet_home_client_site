import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.white,
        color: theme.palette.black,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const ManageProducts = () => {
    const [allProperty, setAllProperty] = useState([]);
    useEffect(() => {
      fetch("https://morning-brushlands-15665.herokuapp.com/allProperty")
        .then((res) => res.json())
        .then((data) => setAllProperty(data));
    }, []);
    
  
    const handleDeleteOrder=(id)=>{
        const proceed=window.confirm("Are you sure? you want to delete this product");
        if(proceed){
          fetch(`https://morning-brushlands-15665.herokuapp.com/deleteProperty/${id}`,{
              method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){
                  alert("Deleted successfully Done")
                  const newProperty=allProperty.filter(el=>el._id!=id);
                  setAllProperty(newProperty);
              }
          })
        }
        
  
    }
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Property Name</StyledTableCell>
            <StyledTableCell>Property Location</StyledTableCell>
            <StyledTableCell>PerMonth Rent</StyledTableCell>
            <StyledTableCell>Build In</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProperty.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>{item.location}</StyledTableCell>
              <StyledTableCell>${item.price}</StyledTableCell>
              <StyledTableCell>{item.build} </StyledTableCell>
              <StyledTableCell  onClick={()=>handleDeleteOrder(item._id)}>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon style={{color:"red"}} />
                  </IconButton>
                </Tooltip>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageProducts;
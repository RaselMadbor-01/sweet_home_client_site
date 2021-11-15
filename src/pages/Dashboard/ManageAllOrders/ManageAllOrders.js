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
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from "@mui/material";
import "./ManageAllOrders.css";

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




const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://morning-brushlands-15665.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  
  const handleChange = id => {
    fetch(`https://morning-brushlands-15665.herokuapp.com/updateStatus/${id}`,{
        method:"PUT"
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.modifiedCount>0){
           alert("Update was successFully done")
       }
    })
    
  };
  const handleDeleteOrder=(id)=>{
      const proceed=window.confirm("Are you sure? you want to delete this product");
      if(proceed){
        fetch(`https://morning-brushlands-15665.herokuapp.com/deleteBookOrder/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("Deleted successfully Done")
                const newOrders=allOrders.filter(el=>el._id!=id);
                setAllOrders(newOrders);
            }
        })
      }
      

  }

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email ID</StyledTableCell>
            <StyledTableCell>Property Name</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {allOrders.map((item) => (
            <StyledTableRow key={item._id} style={{fontWeight:"bold"}}>
              <StyledTableCell component="th" scope="row">
                {item.userName}
              </StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell> <FormControl variant="standard" sx={{ m: 1, minWidth: 120 ,border:0}}>
       
              <NativeSelect
          defaultValue={item.status}
          onChange={()=>handleChange(item._id)}
        >
          <option value={"pending"}>Pending</option>
          <option value={"shipped"}>Shipped</option>
        </NativeSelect>
      </FormControl></StyledTableCell>
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

export default ManageAllOrders;

import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import notfoundImage from "../../images/notFound/notfound.png";
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';

const Notfound = () => {
    const history=useHistory();
    const handleBackToHome=()=>{
        history.push('/');
    }
    return (
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={notfoundImage} alt="" />
            <Button variant="contained" color="success" onClick={handleBackToHome} startIcon={<SendIcon />}>
  Back To Home
</Button>

        </Box>
    );
};

export default Notfound;
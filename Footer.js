import React, { useState } from 'react';
import {makeStyle, makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  root:{
    width:500,
  }
})

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'relative',
    bottom: 0,
  },
};
function Footer(){
  const classes = useStyles()
  const[value,setValue] = useState(0)

  const handleChange = (event,newValue)=>{
    setValue(newValue)

  }
return(
  <div>
       <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
    <BottomNavigation className={classes.stickToBottom}
    value={value}
    onChange={(event,newValue)=> handleChange(event,newValue)}
    >
    <BottomNavigationAction label="Terms and Condition" icon={<FileCopyIcon/>}/>
    <BottomNavigationAction label="Contact us" icon={<PhoneIcon/>}/>
    <BottomNavigationAction label="Mail" icon={<MailIcon/>}/>
    </BottomNavigation>
    </AppBar>
  </div>
)

}
export default Footer;

import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to="/" style={{marginRight: '20px', color: 'white', textDecoration: 'none'}}>Home</NavLink>
                    <NavLink to="/page1" style={{marginRight: '20px', color: 'white', textDecoration: 'none'}}>Page 1</NavLink>
                    <NavLink to="/page2" style={{marginRight: '20px', color: 'white', textDecoration: 'none'}}>Page 2</NavLink>
                </Toolbar>
            </AppBar>
        </>      
      );
}

export default Navbar;
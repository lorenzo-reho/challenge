import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

const MainPage = () => {
    return (
        <>
            <Navbar />
            <div style={{padding: '10px'}}>
                <Outlet />
            </div>
        </>
    );
}

export default MainPage;
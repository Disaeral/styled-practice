import { Link } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export const Login = () => {
    return (
        <div>
            <Navbar/>
            this is login page
            <Link to="/">to main</Link>
            <Footer/>     
        </div>
    );
};
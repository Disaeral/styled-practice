import { Link } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export const Register = () => {
    return (
        <div>
            <Navbar/>
            this is register page
            <Link to="/">to main</Link>
            <Footer/>     
        </div>
    );
};
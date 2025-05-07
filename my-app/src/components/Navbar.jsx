import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { IoIosCafe } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GrCafeteria } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";

function MyNavbar() {
    return (
        <Navbar expand="lg" className="navhead">
            <Container fluid className='nav-total-head'>
                <Navbar.Brand className="name">
                     ☕ Cafe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto navlink">
                        <Link className="link1" to="/home"> <SiHomeassistantcommunitystore /> Home</Link>
                        <Link className="link1" to="/product"><GrCafeteria /> Product</Link>
                        <Link className="link1" to="/wishlist"><FaHeart /> Wishlist</Link>
                        {/* <Link className="link1" to="/location"><FaLocationDot /> Location</Link> */}
                        <Link className="link1" to="/login"><IoLogIn /> Login</Link>
                        <Link className="link1" to="/contact"><IoMdContact /> contact</Link>
                        <Link className="link1" to="/about"><MdOutlineRoundaboutRight />    About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;

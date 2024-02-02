import { Link } from "react-router-dom";


const NavBar = () => (
    <section className="navbar">
        <nav>
            <ul>
                <Link className="link" to="/">ALL</Link>
                <Link className="link" to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link>
                <Link className="link" to="/datascience">DATASCIENCE</Link>
                <Link className="link" to="/cybersecurity">CYBER SECURITY</Link>
                <Link className="link" to="/career">CAREER</Link>
            </ul>
        </nav>
    </section> 
)

export default NavBar;
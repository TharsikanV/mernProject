import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
export default function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                    </li>

                    <li>
                        <NavDropdown title={
                            <i className='fa fa-product-hunt'> Product</i>
                        }>
                            <NavDropdown.Item onClick={()=>navigate('/admin/')}><i className='fa fa-shopping-basket'>All</i></NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li>
                        <a href="#"><i className="fas fa-shopping-basket"></i> Orders</a>
                    </li>

                    <li>
                        <a href="#"><i className="fas fa-users"></i> Users</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
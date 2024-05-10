import {Link} from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to=""><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fab fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <a href="#"><i className="fas fa-clipboard-list"></i> All</a>
                            </li>

                            <li>
                                <a href="#"><i className="fas fa-plus"></i> Create</a>
                            </li>
                        </ul>
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

import { NavLink } from "react-router-dom";
const SideBar = () => {
    return (
        <div className="sidebar">
            <h2 className="title">Категории</h2>
            <nav className="sidebar-menu">
                <ul>
                    <li>
                       <NavLink to={`/categories/${1}`}>Link</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="side-footer">
                <a target="_blank" href="/help">
                    Help
                </a>
                <a href="/terms" target="_blank" >
                Term & Conditions
                </a>
            </div>


        </div>
        )

}

export default SideBar
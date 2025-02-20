import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const list = useSelector(state => state.categories.list);

    return (
        
            <nav className="sidebar">
            <h2 className="sidebar-title">Категории</h2>
                <ul className="sidebar-list">
                    {list.map(category => (
                        <li key={category.id}>
                            <NavLink to={`/categories/${category.slug}`}>
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
       
    );
};

export default SideBar;

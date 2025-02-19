import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const list = useSelector(state => state.categories.list);

    return (
        <div className="sidebar">
            <h2 className="title">Категории</h2>
            <nav className="sidebar-menu">
                <ul>
                    {list.map(category => (
                        <li key={category.id}>
                            <NavLink to={`/categories/${category.slug}`}>
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;

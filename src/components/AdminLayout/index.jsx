import PropTypes from "prop-types";
import userImg from "../../assets/icons/user.svg";
import "./AdminLayout.scss";
import { NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
    return (
        <div className='admin-layout'>
            <div className='admin-layout__start'>
                <div className='admin-layout__start--user-information d-flex align-items-center'>
                    <div className='admin-layout__start--user-wrapper'>
                        <img
                            className='admin-layout__start--user-img'
                            src={userImg}
                            width={40}
                            height={40}
                            alt='User img'
                        />
                    </div>

                    <div>
                        <h5 className='admin-layout__start--user-name'>
                            Shakhbozbek Usmonov
                        </h5>
                        <p className='admin-layout__start--user-role'>
                            Administration
                        </p>
                    </div>
                </div>

                <ul className='admin-layout__start--nav-list'>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/users'
                            className='admin-layout__start--nav-link'>
                            Users
                        </NavLink>
                    </li>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/dashboard'
                            className='admin-layout__start--nav-link'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/menus'
                            className='admin-layout__start--nav-link'>
                            Menus
                        </NavLink>
                    </li>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/news/uz'
                            className='admin-layout__start--nav-link'>
                            News (UZ)
                        </NavLink>
                    </li>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/news/en'
                            className='admin-layout__start--nav-link'>
                            News (EN)
                        </NavLink>
                    </li>
                    <li className='admin-layout__start--nav-item'>
                        <NavLink
                            to='/admin/news/ru'
                            className='admin-layout__start--nav-link'>
                            News (RU)
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='admin-layout__end'>{children}</div>
        </div>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.object,
};

export default AdminLayout;

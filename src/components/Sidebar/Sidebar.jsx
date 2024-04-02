import { Link, useLocation } from 'react-router-dom';
import cls from './styles.module.scss';
import { Box, Button } from '@chakra-ui/react';
import { authStore } from 'store/auth.store';
import { useState } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { TbUsers } from 'react-icons/tb';
import { MdGroups } from 'react-icons/md';
import { MdRestaurant } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import { MdEditCalendar } from 'react-icons/md';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { FiChevronsRight } from 'react-icons/fi';
import { FiChevronsLeft } from 'react-icons/fi';
import { Profile } from 'modules/Admin/Profile';
import { MdFastfood } from 'react-icons/md';
export const Sidebar = ({ openNav, closeNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    localStorage.clear();
    authStore.logout();
  };

  const links = [
    { path: 'admin/dashbord', icon: <FiBarChart2 /> },
    { path: 'admin/courses', icon: <FiShoppingCart /> },
    { path: 'admin/groups', icon: <TbUsers /> },
    { path: 'admin/students', icon: <MdGroups /> },
    { path: 'admin/category', icon: <MdRestaurant /> },
    { path: 'admin/location', icon: <MdMyLocation /> },
    { path: 'admin/calendar', icon: <MdEditCalendar /> },
  ];
  const adminLinks = [
    { path: 'admin/category', title: 'Категория' },
    { path: 'admin/profile', title: 'Профил' },
  ];

  return (
    <Box className={cls.sidebar} style={{ width: isOpen ? '280px' : '88px' }}>
      {/* Sidebar content */}
      <Box className={cls.titleWrapper}>
        <p className={cls.title}>D</p>
      </Box>

      <Box className={cls.toggleButton} onClick={handleToggleSidebar}>
        {isOpen ? (
          <button className={cls.chevronR} variant="ghost">
            <FiChevronsLeft />
          </button>
        ) : (
          <button variant="ghost">
            <FiChevronsRight />
          </button>
        )}
      </Box>

      <Box className={cls.wrapperSidebar}>
        <nav className={cls.navbar}>
          <ul className={cls.navList}>
            {links.map((link, index) => (
              <li className={cls.navItem} key={index}>
                <Link to={link.path} className={`${cls.navLink} ${pathname.includes(link.path) ? cls.active : ''}`}>
                  <p> {link.icon}</p>
                </Link>
              </li>
            ))}
            <li className={cls.navItem}>
              <button className={cls.navLink} onClick={handleLogOut}>
                <p>
                  <CiLogout className={cls.logOutIcon} />
                </p>
              </button>
            </li>
          </ul>
        </nav>
        <Box className={cls.CategoryLinks}>
          {adminLinks.map((link, index) => (
            <Link to={link.path} className={`${cls.navLink} ${pathname.includes(link.path) ? cls.active : ''}`}>
              <p> {link.title}</p>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

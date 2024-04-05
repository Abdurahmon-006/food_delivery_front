import { Link, useLocation } from 'react-router-dom';
import cls from './styles.module.scss';
import { Box, Button } from '@chakra-ui/react';
import { authStore } from 'store/auth.store';
import { useState, useRef, useEffect } from 'react';
import { FiBarChart2, FiShoppingCart, FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';
import { TbUsers } from 'react-icons/tb';
import { MdGroups, MdRestaurant, MdMyLocation, MdEditCalendar } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { Profile } from 'modules/Admin/Profile';
import { IoIosSettings } from 'react-icons/io';
import { SettingsIcon } from '@chakra-ui/icons';
export const Sidebar = ({ openNav, closeNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const sidebarRef = useRef(null);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    localStorage.clear();
    authStore.logout();
  };

  const handleLinkClick = (path) => {
    if (path === 'admin/category') {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const links = [
    { path: 'admin/dashboard', icon: <FiBarChart2 /> },
    { path: 'admin/shopping', icon: <FiShoppingCart /> },
    { path: 'admin/groups', icon: <TbUsers /> },
    { path: 'admin/students', icon: <MdGroups /> },
    { path: 'admin/category', icon: <MdRestaurant /> },
    { path: 'admin/location', icon: <MdMyLocation /> },
    { path: 'admin/calendar', icon: <MdEditCalendar /> },
  ];
  const adminLinks = [
    { path: 'admin/category', title: 'Категории' },
    { path: 'admin/shopping', title: 'Магазин' },
  ];

  return (
    <Box className={cls.sidebar} style={{ width: isOpen ? '280px' : '88px' }}>
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

      <Box ref={sidebarRef} className={cls.wrapperSidebar}>
        <nav className={cls.navbar}>
          <ul className={cls.navList}>
            {links.map((link, index) => (
              <li className={cls.navItem} key={index}>
                <Link
                  to={link.path}
                  className={`${cls.navLink} ${pathname.includes(link.path) ? cls.active : ''}`}
                  onClick={() => handleLinkClick(link.path)}
                >
                  <p>{link.icon}</p>
                </Link>
              </li>
            ))}
            <li className={cls.logOutIconWrapper}>
              <button className={cls.navLink} onClick={handleLogOut}>
                <p>
                  <CiLogout className={cls.logOutIcon} />
                </p>
              </button>
            </li>
            <li className={cls.SettingIconWrapper}>
              <button className={cls.navLink}>
                <p>
                  <SettingsIcon className={cls.logOutIcon} />
                </p>
              </button>
            </li>
          </ul>
        </nav>
        {isOpen && (
          <Box className={cls.CategoryLinks}>
            {adminLinks.map((link, index) => (
              <Link
                to={link.path}
                className={`${cls.SecondarynavLink} ${pathname.includes(link.path) ? cls.active : ''}`}
                onClick={() => handleLinkClick(link.path)}
                key={index}
              >
                <p>{link.title}</p>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

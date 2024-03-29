import { Link, useLocation } from 'react-router-dom';
import cls from './styles.module.scss';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import { Footer } from 'components/Footer';

import { authStore } from 'store/auth.store';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';
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
export const Sidebar = ({ openNav, closeNav }) => {
  const links = [
    // {
    //   title: 'Меню',
    //   path: 'admin/dashbord',
    //   src: DashbordIcon,
    //   alt: 'dashbordIcon',
    // },
    {
      title: 'Товары',
      path: 'admin/courses',
      // src: Courses,
      // alt: 'Courses',
    },
    {
      title: 'Категория',
      path: 'admin/groups',
      // src: GroupsIcon,
      alt: 'Группы',
    },
    // {
    //   title: 'Атрибуты товаров',
    //   path: 'admin/students',
    //   src: UserIcon,
    //   alt: 'UserIcon',
    // },
    // {
    //   title: 'Бренды',
    //   path: 'admin/mentors',
    //   src: UserIcon,
    //   alt: 'UserIcon',
    // },
    // {
    //   title: 'Единица измерения',
    //   path: 'admin/payments',
    //   src: Payment,
    //   alt: 'payment',
    // },
    // {
    //   title: 'Теги',
    //   path: 'admin/reports',
    //   src: Reports,
    //   alt: 'отчеты',
    // },
    // {
    //   title: 'Профиль',
    //   path: 'admin/profile',
    //   src: InfoIcon,
    //   alt: 'InfoIcon',
    // },
  ];
  const auth = JSON.parse(localStorage.getItem('auth'));
  const [openItem, setOpenItem] = useState(links.title);
  console.log(openItem);
  function openNav() {
    document.getElementById('mySidenav').style.width = '280px';
    document.getElementById('outlet').style.marginLeft = '285px';
    document.getElementById('header').style.left = '280px';
    document.getElementById('header').style.paddingRight = '285px';
    document.getElementById('headerDetail').style.left = '285px';
    document.getElementById('headerDetail').style.paddingRight = '285px';
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '88px';
    document.getElementById('outlet').style.marginLeft = '93px';
    document.getElementById('header').style.paddingRight = '93px';
    document.getElementById('header').style.left = '88px';
    document.getElementById('headerDetail').style.paddingRight = '93px';
    document.getElementById('headerDetail').style.left = '88px';
  }

  const handleLogOut = () => {
    localStorage.clear();
    authStore.logout();
  };
  const { pathname } = useLocation();

  console.log(pathname);
  // const navLinks = document.getElementById('Nav');
  // const active = () => {
  //   if (navLinks.href && links.href.includes(activePage.trim())) {
  //     links.classList.toggle('active');
  //     console.log(links);
  //   }
  // };
  // const [active, setActive] = useState(null)
  return (
    <Box className={cls.sidebar} id="mySidenav">
      <div className={cls.wraperSiadbar}>
        <Box className={cls.wrapper}>
          <Box className={cls.userBox}>
            <Link
              to={'/admin/profile'}
              className={`${cls.userPath}  ${pathname.includes('admin/profile') ? cls.active : ''}`}
            >
              <CgProfile />
            </Link>
          </Box>
        </Box>
        <Box className={cls.btnClose}>
          <button type="button">
            {links.title === openItem ? (
              <button className={cls.sidebarBtn} onClick={() => setOpenItem('')}>
                <Box className={cls.closeBtn} onClick={closeNav}>
                  <AiOutlineAlignRight />
                </Box>
              </button>
            ) : (
              <button className={cls.sidebarBtn} onClick={() => setOpenItem(links.title)}>
                <Box className={cls.closeBtn} onClick={openNav}>
                  <AiOutlineAlignLeft />
                </Box>
              </button>
            )}
          </button>
        </Box>
      </div>
      <nav className={cls.navbar}>
        <ul className={cls.navList} id="Nav">
          <li className={cls.navItem}>
            <Link
              to={'admin/dashbord'}
              className={`${cls.navLink}  ${pathname.includes('admin/dashbord') ? cls.active : ''}`}
            >
              <FiBarChart2 />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/courses'}
              className={`${cls.navLink}  ${pathname.includes('admin/courses') ? cls.active : ''}`}
            >
              <FiShoppingCart />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/groups'}
              className={`${cls.navLink}  ${pathname.includes('admin/group') ? cls.active : ''}`}
            >
              <TbUsers />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/students'}
              className={`${cls.navLink}  ${pathname.includes('admin/students') ? cls.active : ''}`}
            >
              <MdGroups />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/category'}
              className={`${cls.navLink}  ${pathname.includes('admin/category') ? cls.active : ''}`}
            >
              <MdRestaurant />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/location'}
              className={`${cls.navLink}  ${pathname.includes('admin/location') ? cls.active : ''}`}
            >
              <MdMyLocation />
            </Link>
          </li>
          <li className={cls.navItem}>
            <Link
              to={'admin/calendar'}
              className={`${cls.navLink}  ${pathname.includes('admin/calendar') ? cls.active : ''}`}
            >
              <MdEditCalendar />
            </Link>
          </li>

          {/* {links?.map((link, index) => (
            <li className={cls.navItem} key={index}>
              <Link className={`${cls.navLink} ${pathname.includes(link?.path) ? cls.active : ''}`} to={link?.path}>
                <img src={link?.src} alt={link?.alt} width={20} height={20} />
                {links.title == openItem && <span className={cls.navText}>{link?.title}</span>}
              </Link>
            </li>
          ))} */}
          {/* <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Пользователи
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li className={cls.navItem}>
                  <Link className={cls.navLink} to="admin/students">
                    <img src={UserIcon} alt="пользователи" width={20} height={20} />
                    {links.title == openItem && <span className={cls.navText}>Ученики</span>}
                  </Link>
                </li>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */}

          {/* for log out */}
          <li className={cls.navItem}>
            <button className={cls.navLink} onClick={handleLogOut}>
              {links.title == openItem && (
                <span className={cls.navText}>
                  <CiLogout />
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
      {links.title === openItem ? <Footer auth={auth} /> : ''}
    </Box>
  );
};

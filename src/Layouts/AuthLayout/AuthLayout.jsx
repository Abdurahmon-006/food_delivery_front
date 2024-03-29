import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import AuthImg from 'assets/img/food-delivery-3.jpg';

export const AuthLayout = () => {
  return (
    <>
      <Box className={cls.wrapper}>
        <Box className={cls.wrapperLeft}>
          <h2 className={cls.title}>Food Delevery</h2>
        </Box>
        <Box className={cls.wrapperContent}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

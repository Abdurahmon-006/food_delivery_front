import { Outlet } from 'react-router-dom';
import { Sidebar } from 'components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { Container } from 'components/Container';
export const MainLayout = () => {
  return (
    <>
      <Box className={cls.content}>
        <Sidebar />
        <Box marginLeft={'280px'} className={cls.wrapper} id="outlet">
          <Outlet className={cls.outlet} />
        </Box>
      </Box>
    </>
  );
};

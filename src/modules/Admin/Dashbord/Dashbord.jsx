import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuChefHat } from 'react-icons/lu';
import { MdEmojiPeople } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

export const Dashbord = () => {
  return (
    <Box className={cls.dashbord}>
      <Container>
        <Header title="Дашборд" />
        <ul className={cls.list}>
          <li className={cls.item}>
            <Box className={cls.wrapperText}>
              <div>
                <span className={cls.count}>40</span>
                <h2 className={cls.subtitle}>Kuryerlar</h2>
              </div>
              <TbTruckDelivery className={cls.icons} />
            </Box>
          </li>
          <li className={cls.item}>
            <Box className={cls.wrapperText}>
              <div>
                <span className={cls.count}>10</span>
                <h2 className={cls.subtitle}>Oshvpazlar</h2>
              </div>
              <LuChefHat className={cls.icons} />
            </Box>
          </li>
          <li className={cls.item}>
            <Box className={cls.wrapperText}>
              <div>
                <span className={cls.count}>15</span>
                <h2 className={cls.subtitle}>Afitsantlar</h2>
              </div>
              <MdEmojiPeople className={cls.icons} />
            </Box>
          </li>
          <li className={cls.item}>
            <Box className={cls.wrapperText}>
              <div>
                <span className={cls.count}>8</span>
                <h2 className={cls.subtitle}>Adminstratorlar</h2>
              </div>
              <RiAdminFill className={cls.icons} />
            </Box>
          </li>
        </ul>
      </Container>
    </Box>
  );
};

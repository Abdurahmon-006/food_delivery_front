import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { AddModal } from 'components/AddModal';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
export const Header = ({
  onOpen = () => {},
  isOpen,
  register = () => {},
  title,
  onClose = () => {},
  handleAccept = () => {},
}) => {
  return (
    <header id="header" className={cls.header}>
      <Box className={cls.wrapper}>
        <h1 className={cls.title}>{title}</h1>
        <Box gap={10} className={cls.wrapperLeft}>
          <Link to={'/admin/category'}>
            <Button border={'1px solid #E5E9EB'} background={'transparent'} color={'red'}>
              - Отменить
            </Button>
          </Link>
          <Link to={'/admin/categorydetail'} onClick={onOpen}>
            <Button background={'blue'} color={'white'}>
              {' '}
              + Добавить
            </Button>
          </Link>
        </Box>
      </Box>
      <AddModal handleAccept={handleAccept} register={register} isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

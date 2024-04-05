import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { SearchInput } from 'components/SearchInput';
import { BtnSubmit } from 'components/BtnSubmit';
import { Filter } from 'components/Filter';
import { BtnDownload } from 'components/BtnDownload';
import { AddModal } from 'components/AddModal';
import { Link } from 'react-router-dom';

export const Header = ({
  onOpen = () => {},
  isOpen,
  register = () => {},
  title,
  onClose = () => {},
  onChange = () => {},
  handleAccept = () => {},
}) => {
  return (
    <header id="header" className={cls.header}>
      <Box className={cls.wrapper}>
        <h1 className={cls.title}>{title}</h1>
        <Box className={cls.wrapperLeft}>
          <BtnDownload />
          <SearchInput onChange={onChange} className={cls.searchInput} />
          <Filter />
          <Link to={'/admin/categorydetail'} onClick={onOpen}>
            <BtnSubmit className={cls.btnAdd} text="+ Добавить" />
          </Link>
        </Box>
      </Box>
      <AddModal handleAccept={handleAccept} register={register} isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

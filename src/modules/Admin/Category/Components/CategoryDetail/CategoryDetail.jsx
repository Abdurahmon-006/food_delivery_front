import React, { useState } from 'react';
import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import cls from './style.module.scss';
import { Header } from 'components/Header';

export const CategoryDetail = ({ title }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image:', image);
  };

  return (
    <div className={cls.categoryDetail}>
      <Header title={'Общие сведения'} />
      <Box padding={20} className={cls.Allwrapper}>
        <div className={cls.wrapper}>
          <p className={cls.title}>Общие настройки</p>
          <hr />
          <form className={cls.form} onSubmit={handleSubmit}>
            <Button
              as="label"
              htmlFor="imageInput"
              width={150}
              height={150}
              background="white"
              border={'1px solid black'}
              cursor="pointer"
            >
              Макс размер 4 МБ
            </Button>
            <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
              <label htmlFor="nameInput">Название</label>
              <Input
                width={300}
                id="nameInput"
                type="text"
                marginBottom={5}
                accept="image/*"
                onChange={handleImageChange}
              />
            </Box>

            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the default file input
            />

            <Button className={cls.btn} type="submit" colorScheme="blue">
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
};

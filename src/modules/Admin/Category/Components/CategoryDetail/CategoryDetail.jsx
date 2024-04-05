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
      <Header title={title} />
      <Box padding={20} className={cls.Allwrapper}>
        <div className={cls.wrapper}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Name:</label>
            <Input id="nameInput" type="text" marginBottom={5} accept="image/*" onChange={handleImageChange} />
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the default file input
            />

            <Box className={cls.formControl}>
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
              <Button className={cls.btn} type="submit" colorScheme="blue">
                Submit
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </div>
  );
};

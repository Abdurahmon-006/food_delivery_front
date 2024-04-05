import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import cls from './style.module.scss';
import { Header } from 'components/Header';
export const CategoryDetail = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image:', image);
    // You can add code here to handle the form submission, such as sending the data to a server
  };

  return (
    <div>
      <Header title={'Общие сведения'} />
      <div className={cls.wrapper}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Общие сведения:</FormLabel>
          <FormLabel>Name:</FormLabel>
          <Input type="text" marginBottom={5} accept="image/*" onChange={handleImageChange} />
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
              widtFormControlh={150}
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
    </div>
  );
};

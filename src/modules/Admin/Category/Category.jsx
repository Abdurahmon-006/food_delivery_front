import { useCategoryProps } from './useCategoryProps';
import { Box, Input, Select, TabPanels } from '@chakra-ui/react';
// import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { CustomTable } from 'components/CustomTable';
// import cls from './style.module.scss';
import { Pagination } from 'components/Pagination';
// import { EditModal } from 'components/EditModal';
// import { FormControl } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from '@chakra-ui/react';
import { AddModal } from 'components/AddModal';

import React, { useState } from 'react';

export const Category = () => {
  const {
    data,
    currentRecords,
    isOpen,
    onClose,
    onOpen,
    columns,
    // onSubmit,
    nPages,
    currentPage,
    setCurrentPage,
    register,
    handleSubmit,
    onChange,
  } = useCategoryProps();
  console.log(data);
  return (
    <>
      <Box margin="68px 0">
        <Header
          title="Ishchilar"
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onChange={onChange}
          // handleAccept={handleSubmit(onSubmit)}
          register={register}
        />
        <Box>
          <CustomTable columns={columns} data={data} />
        </Box>

        {/* <AddModal handleAccept={handleSubmit(onSubmit)} isOpen={isOpen} register={register} onClose={onClose}>
          <FormControl as="form">
            <Box classNhandleEditame={cls.wrapper}>
              <Select {...register('course_id')} placeholder="Название потока">
                {currentRecords?.map((item, index) => {
                  return (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <Input {...register('name')} className={cls.input} type="text" placeholder=" Название группы" />
            </Box>
            <Box className={cls.wrapper}>
              <Select {...register('type')}>
                <option value={'Online'}>Online </option>
                <option value={'Offline'}>Offline </option>
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <Select placeholder="Учитель" {...register('teacher_id')}>
                {userMentors?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.first_name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <Box className={cls.wrapper}>
                <label htmlFor="end data">Начинать</label>

                <Input {...register('start_date')} type="date" placeholder="Дата начала" />
              </Box>

              <Box className={cls.wrapper}>
                <label htmlFor="end data">Окончание</label>
                <Input {...register('end_date')} type="date" placeholder="Дата начала" />
              </Box>
            </Box>
          </FormControl>
        </AddModal> */}

        {/* <EditModal
          onOpen={onOpenE}
          isOpen={isOpenE}
          onClose={onCloseE}
          handleDeleteGroup={handleDeleteGroup}
          handleAccept={handleSubmit(handleEdit)}
          id={activeGroupId}
          register={register}
          handleCloseGroupEdit={() => {
            onClose();
            setActiveGroupId('');
          }}
        >
          <FormControl as="form">
            <Box className={cls.wrapper}>
              {data?.map((item, index) => (
                <div>
                  <p>{item?.name}</p>
                </div>
              ))}
            </Box>
          </FormControl>
        </EditModal> */}
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Box>
    </>
  );
};

import cls from './styles.module.scss';
import { Box, FormControl } from '@chakra-ui/react';
import { CustomTable } from 'components/CustomTable';
import { Pagination } from 'components/Pagination';
import { AddModal } from 'components/AddModal';
import { Header } from 'components/Header';
import { CoursesInput } from './Components/CoursesInput';
import DownloadIcon from 'assets/img/icon/download.svg';
import { useShoppingProps } from './useShoppingProps';
import FileUploadComponent from 'components/UploadFile/UploadFile';

export const Shopping = () => {
  const {
    register,
    categories,
    fileInputRef,
    handleClick,
    currentPage,
    nPages,
    setCurrentPage,
    isOpen,
    handleClose,
    handleOpen,
    columns,
    data,
    handleSubmit,
    onSubmit,
    onChange,
  } = useShoppingProps();

  return (
    <Box className={cls.content}>
      <Header
        title="Haridlar"
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        onChange={onChange}
        handleAccept={handleSubmit(onSubmit)}
        register={register}
      />
      <Box className={cls.table}>
        {/* <FileUploadComponent /> */}
        <CustomTable columns={columns} data={data} />
      </Box>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Modals */}
      <AddModal
        size="lg"
        handleAccept={handleSubmit(onSubmit)}
        register={register}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <FormControl as="form">
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="file">
              Загрузить файл
            </label>
            <button className={cls.btn} onClick={handleClick} type="button">
              <img src={DownloadIcon} alt="download" width="24px" height="24px" />
              Загрузить файл
            </button>
            <input
              className={cls.fileInput}
              type="file"
              id="file"
              ref={fileInputRef}
              // register={register}
              name="file"
            />
          </Box>
          <CoursesInput
            label="Название курса"
            id="name"
            placeholder="Введите Название курса"
            type="text"
            register={register}
            name="name"
            required
          />
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="description">
              Описание
            </label>
            <textarea
              className={cls.input}
              {...register('description')}
              id="description"
              cols="10"
              rows="2"
              placeholder="Введите описание"
            />
          </Box>
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="type">
              Категории
            </label>
            <select className={cls.input} {...register('category_id')} id="">
              {categories?.category?.map((category) => (
                <option key={category?.id} value={category?.id}>
                  {category?.name}
                </option>
              ))}
              <option value="">
                <button>+ Добавить</button>
              </option>
            </select>
          </Box>
          <CoursesInput
            label="Повторяемость:"
            id="weekly_number"
            placeholder="Введите повторяемость"
            type="number"
            register={register}
            name="weekly_number"
            required
          />
          <CoursesInput
            label="Длительность урока:"
            id="duration"
            placeholder="Введите длительность урока"
            type="number"
            register={register}
            name="duration"
            required
          />
          <CoursesInput
            label="Сумма"
            id="price"
            placeholder="Введите сумму"
            type="number"
            register={register}
            name="price"
            required
          />
        </FormControl>
      </AddModal>
    </Box>
  );
};

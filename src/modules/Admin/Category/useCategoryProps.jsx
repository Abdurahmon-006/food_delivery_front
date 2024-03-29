import Edit from 'assets/img/icon/edit.svg';
import { Button, FormControl, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
import { useGetCourses, useGetSearchCourse } from 'services/courses.service';
import request from 'services/httpRequest';
import EyeView from 'assets/img/icon/EyeView.svg';
import { useDeleteUserById, useGetMentors, useGetUserById, useUpdateUserById } from 'services/users.service';
import { useGetCategories } from 'services/category.service';

export const useCategoryProps = () => {
  // const [activeGroup, setActiveGroup] = useState('');
  // const [activeGroupId, setActiveGroupId] = useState('');
  const [courseSearch, setCourseSearch] = useState('');
  // const getGroups = useGetSearchCourse({ search: courseSearch });

  const onChange = (e) => setCourseSearch(e.target.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  // const { data: getGroupById, isSuccess } = useGetGroupById({ groupId: activeGroupId });
  // const { mutate: updateGroup } = useUpdateGroupById();
  const { data: categories, refetch } = useGetCategories();
  // const { mutate: createGroup } = useCreateGroup();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(categories / recordsPerPage) || 1;
  const currentRecords = categories?.categories?.slice(indexOfFirstRecord, indexOfLastRecord);
  // const [isOpenModuleEdit, setOpenModuleEdit] = useState(false);
  // const handleOpenGroupEdit = () => setOpenModuleEdit(true);
  // const handleCloseGroupEdit = () => {
  //   setOpenModuleEdit(false);
  // }; // reset();
  const [isOpenE, setIsOpen] = useState(false);
  const onCloseE = () => setIsOpen(false);
  const onOpenE = () => setIsOpen(true);
  // const [state, setState] = useState({
  //   isOpen: false,
  //   courseSearch: '',
  //   currentPage: 1,
  //   recordsPerPage: 10,
  // });
  // const handleEdit = (data) => {
  //   updateGroup(
  //     {
  //       ...data,
  //       id: activeGroupId,
  //     },
  //     {
  //       onSuccess: () => {
  //         refetch();
  //         onClose();
  //       },
  //     },
  //   );
  // };
  // const { mutate: deleteGroup } = useDeleteGroupById();
  // const handleDeleteGroup = (data) => {
  //   deleteGroup(
  //     { activeGroupId: activeGroup?.activeGroupId, ...data },
  //     {
  //       onSuccess: () => {
  //         navigate('/admin/groups');
  //         refetch();
  //         onClose();
  //       },
  //       onError: (error) => {
  //         alert(error?.response?.data);
  //       },
  //     },
  //   );
  // };

  // const onSubmit = (res) => {
  //   const data = {
  //     name: res?.name,
  //     type: res?.type,
  //     course_id: res?.course_id,
  //     end_date: res?.end_date,
  //     start_date: res?.start_date,
  //     type: res?.type,
  //     teacher_id: res?.teacher_id,
  //   };
  //   createGroup(
  //     {
  //       ...data,
  //     },
  //     {
  //       onSuccess: () => {
  //         handleClose();
  //         reset();
  //         refetch();
  //         toast({
  //           position: 'top center',
  //           duration: 3000,
  //           isClosable: true,
  //           title: 'Вы успешно добавили курс',
  //           status: 'success',
  //         });
  //       },
  //       onError: (error) => {
  //         toast({
  //           position: 'top center',
  //           duration: 3000,
  //           isClosable: true,
  //           title: error?.response?.data,
  //           status: 'error',
  //         });
  //       },
  //     },
  //   );
  // };

  const columns = [
    { title: '№', dataIndex: 'number', key: 'number', width: 88 },
    { title: 'Uzb', dataIndex: 'name_uz', key: 'name_uz', width: 420 },
    { title: 'Russ', dataIndex: 'name_ru', key: 'name_ru', width: 410 },
    {
      title: 'Endlish',
      dataIndex: 'name_en',
      key: 'name_en',
      width: 200,
    },

    {
      title: 'Статnumberус',
      key: 'number',
      dataIndex: 'number',
      width: 360,
    },

    {
      title: '',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button
              padding="4px"
              colorScheme="transparent"
              onClick={() => {
                onOpenE();
                setActiveGroupId(item?.id);
              }}
            >
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
            {/* <Button
              padding="4px"
              colorScheme="transparent"
              onClick={() => {
                onOpen();
                // setActiveUserId(item?.id)
              }}
            >
              <img src={EyeView} width={20} height={20} alt="edit" />
            </Button> */}
          </div>
        );
      },
    },
  ];

  // const data = getGroups?.data?.courses?.map((item, index) => {
  //   return {
  //     ...item,
  //     number: index + 1,
  //   };
  // });
  const data = categories?.map((item, index) => {
    return {
      ...item,
      number: index + 1,
    };
  });

  return {
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
  };
};

import { useForm } from "react-hook-form";
import { useDisclosure } from "@chakra-ui/react";
import { useCreateGroup, useGetGroups } from "services/groups.service";
import { useGetCourseById, useGetDownloadCourses } from "services/courses.service";

export const useBtnsProps = (activeCourse) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        register,
        handleSubmit,
    } = useForm();

    const downloadCourses = useGetDownloadCourses();    

    const handleDownload = (data) => {
        downloadCourses
    }

    // const { refetch } = useGetCourseById( course_id )
    const { refetch } = useGetGroups({ groupId: activeCourse.id });

    const { mutate, reset} = useCreateGroup();
    const onSubmit = (data) => {
        mutate({
            course_id: activeCourse?.id,
            ...data
        }, {
            onSuccess: () => {
              refetch()
              reset
              onClose()
            }
        })
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        isOpen, 
        onOpen, 
        handleDownload,
        onClose 
    };
}
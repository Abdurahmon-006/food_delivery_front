import StudentsIcon from "assets/img/icon/Students.svg";
import MentorsIcon from "assets/img/icon/Mentors.svg";
import CurrentCourse from "assets/img/icon/CurrentCourse.svg";
import NewCourse from "assets/img/icon/NewCourse.svg";

export const useDashbordProps = () => {
  const list = [
    {
      title: "Студенты",
      count: 20,
      src: StudentsIcon,
      alt: "студенты",
    },
    {
      title: "Менторы",
      count: 10,
      src: MentorsIcon,
      alt: "менторы",
    },
    {
      title: "Нынешные курсы",
      count: 30,
      src: CurrentCourse,
      alt: "Нынешние курсы",
    },
    {
      title: "Новые курсы",
      count: 30,
      src: NewCourse,
      alt: "Новые курсы",
    },
  ]
  return {
    list
  }
}
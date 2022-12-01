import { BsFillBriefcaseFill, 
    BsListCheck, 
    BsPeopleFill,
    BsLayoutTextWindowReverse,
    BsFillAwardFill,
    BsFillStarFill,
    BsFillHouseFill } from "react-icons/bs";

export const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <BsFillHouseFill />,
    },
    {
      path: "/dashboard/kursus",
      name: "Kursus",
      icon: <BsFillBriefcaseFill />,
    },
    {
      path: "/dashboard/materi",
      name: "Materi",
      icon: <BsListCheck />,
    },
    {
      path: "/dashboard/mantee",
      name: "Mantee",
      icon: <BsPeopleFill />,
    },
    {
      path: "/dashboard/tugas",
      name: "Tugas",
      icon: <BsLayoutTextWindowReverse />,
    },
    {
      path: "/dashboard/review",
      name: "Review",
      icon: <BsFillAwardFill />,
    },
    {
      path: "/dashboard/quiz",
      name: "Quiz",
      icon: <BsFillStarFill />,
    }
  ]
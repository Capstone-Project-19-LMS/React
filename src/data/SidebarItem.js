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
      path: "/kursus",
      name: "Kursus",
      icon: <BsFillBriefcaseFill />,
    },
    {
      path: "/materi",
      name: "Materi",
      icon: <BsListCheck />,
    },
    {
      path: "/mantee",
      name: "Mantee",
      icon: <BsPeopleFill />,
    },
    {
      path: "/tugas",
      name: "Tugas",
      icon: <BsLayoutTextWindowReverse />,
    },
    {
      path: "/review",
      name: "Review",
      icon: <BsFillAwardFill />,
    },
    {
      path: "/quiz",
      name: "Quiz",
      icon: <BsFillStarFill />,
    }
  ]
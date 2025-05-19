import Dashboard from "../assets/svgIcons/dashboard.svg";
import Book from "../assets/svgIcons/book.svg";
import Calender from "../assets/svgIcons/calender.svg";
import { Strings } from "../Strings/Strings";
import Doc from "../assets/svgIcons/document.svg";
import Task from "../assets/svgIcons/task.svg";
import Users from "../assets/svgIcons/users.svg"
export const SidebarRoutes = [
    {
      name: ["explorechapter","explorepeoples","exploreevents","chapterDetails"],
      routes: [
        { id: 1, label: Strings.events, icon: Calender, path: "/exploreevents" },
        { id: 2, label: Strings.peoples, icon: Dashboard, path: "/explorepeoples" },
        { id: 3, label: Strings.chapter, icon: Book, path: "/explorechapter" },
      ],
    },
    {
      name: ["my-chapter","mychapterprofile","mychapterdocrepo","mychaptermembers"],
      routes: [
        { id: 1, label: "Chapter Profile", icon:Book , path: "/mychapterprofile" },
        { id: 2, label: "Upcoming Events", icon: Calender, path: "/mychapterevents" },
        { id: 3, label: "Calender", icon:Calender , path: "/mychaptercalender" },
        { id: 4, label: "Doc Repository", icon: Doc, path: "/mychapterdocrepo" },
        { id: 5, label: "Tasks ", icon: Task, path: "/mychaptertasks" },
        { id: 6, label: "Members", icon: Users, path: "/mychaptermembers" },
        { id: 7, label: "Announcements", icon: Book, path: "/mychapterannouncements" },
      ],
    },
    {
      name: ["settings"],
      routes: [
        { id: 1, label: "Chapter Management", icon: Calender, path: "/settingsmanagement" },
        { id: 2, label:" Controls", icon: Dashboard, path: "/settingscontrols" },
        { id: 3, label: "Security & Privacy", icon: Book, path: "/settingssecurity" },
      ],
    },
    // {
    //   name: "message-center",
    //   routes: [
    //     { id: "events", label: Strings.events, icon: Calender, path: "/events" },
    //     { id: "peoples", label: Strings.peoples, icon: Dashboard, path: "/peoples" },
    //     { id: "chapter", label: "Strings.chapter", icon: Book, path: "/chapter" },
    //   ],
    // },
  ];
  

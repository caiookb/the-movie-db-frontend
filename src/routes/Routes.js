import Main from "../views/Main/Main";
import Details from "../views/Details/Details";

export const routes = [
  { path: "/main", component: Main, isPrivate: false },
  { path: "/detaile/:id", component: Details, isPrivate: false },
];

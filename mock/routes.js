module.exports = [
  {
    id: 1,
    path: "/",
    parameters: null,
    element: "MainPage",
  },
  {
    id: 2,
    path: "/about",
    parameters: null,
    element: "AboutPage",
  },
  {
    id: 3,
    path: "/notice",
    parameters: null,
    element: "NoticeListPage",
  },
  {
    id: 4,
    path: "/notice/:id",
    parameters: ["id"],
    element: "NoticeDetailPage",
  },
];

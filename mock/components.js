module.exports = {
  Menu: {
    id: 1,
    name: "Menu",
    props: [
      {
        key: "logo",
        type: "imgSrc",
      },
      {
        key: "items",
        type: "array",
      },
    ],
  },
  Banner: {
    id: 2,
    name: "Banner",
    props: [
      {
        key: "companyName",
        type: "text",
      },
      {
        key: "companySlogan",
        type: "text",
      },
    ],
  },
  ProgressBar: {
    id: 3,
    name: "ProgressBar",
    props: [
      {
        key: "percentage",
        type: "number",
      },
    ],
  },
  Article: {
    id: 4,
    name: "Article",
    props: [
      {
        key: "title",
        type: "text",
      },
      {
        key: "subtitle",
        type: "text",
      },
      {
        key: "contents",
        type: "html",
      },
    ],
  },
  PageHeader: {
    id: 5,
    name: "PageHeader",
    props: [
      {
        key: "title",
        type: "text",
      },
    ],
  },
  NoticeList: {
    id: 6,
    name: "List",
    props: [
      {
        key: "items",
        type: "array",
      },
    ],
  },
};

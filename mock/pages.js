const component = require("./components");

const CommonMenu = {
  ...component.Menu,
  props: [
    {
      key: "logo",
      type: "imgSrc",
      value: "https://avatars.githubusercontent.com/u/106324863?s=200&v=4",
    },
    {
      key: "items",
      type: "array",
      value: [
        {
          path: "/about",
          title: "About",
        },
        {
          path: "/notice",
          title: "Notice",
        },
      ],
    },
  ],
};

module.exports = [
  {
    id: 1,
    name: "MainPage",
    type: "components",
    components: [
      CommonMenu,
      {
        ...component.Banner,
        props: [
          {
            key: "companyName",
            type: "string",
            value: "Staticks Inc.",
          },
          {
            key: "companySlogan",
            type: "string",
            value: "A static site generator",
          },
        ],
      },
      {
        ...component.ProgressBar,
        props: [
          {
            key: "percentage",
            type: "number",
            value: 23,
          },
        ],
      },
      {
        ...component.Article,
        props: [
          {
            key: "title",
            type: "text",
            value: "Our development is in progress",
          },
          {
            key: "subtitle",
            type: "text",
            value: "We are working hard to make this project a success",
          },
          {
            key: "contents",
            type: "html",
            value:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl</p>",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "AboutPage",
    type: "components",
    components: [
      CommonMenu,
      {
        ...component.PageHeader,
        props: [
          {
            key: "title",
            type: "text",
            value: "About",
          },
        ],
      },
      {
        ...component.Article,
        props: [
          {
            key: "title",
            type: "text",
            value: "Simple but powerful",
          },
          {
            key: "subtitle",
            type: "text",
            value: "Staticks is a static site generator",
          },
          {
            key: "contents",
            type: "html",
            value:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl</p>",
          },
        ],
      },
      {
        ...component.Article,
        props: [
          {
            key: "title",
            type: "text",
            value: "It's fast and easy",
          },
          {
            key: "subtitle",
            type: "text",
            value: "Need a quick start? Try staticks",
          },
          {
            key: "contents",
            type: "html",
            value:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, euismod aliquam nunc nisl</p>",
          },
        ],
      },
      {
        ...component.Article,
        props: [
          {
            key: "title",
            type: "text",
            value: "Join the community!",
          },
          {
            key: "subtitle",
            type: "text",
            value: "Join the community and help us to make it better",
          },
          {
            key: "contents",
            type: "html",
            value: "<a href='#'>Join the community</a>",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "NoticeListPage",
    type: "components",
    components: [
      CommonMenu,
      {
        ...component.PageHeader,
        props: [
          {
            key: "title",
            type: "text",
            value: "Notice",
          },
        ],
      },
      {
        ...component.NoticeList,
        props: [
          {
            key: "items",
            type: "array",
            value: [
              {
                title: "Notice 1",
                date: "2020-01-01",
              },
              {
                title: "Notice 2",
                date: "2020-01-01",
              },
              {
                title: "Notice 3",
                date: "2020-01-01",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "NoticeDetailPage",
    type: "components",
    parameters: ["id"],
    components: [
      CommonMenu,
      {
        ...component.PageHeader,
        props: [
          {
            key: "title",
            type: "text",
            value: "Notice",
          },
        ],
      },
      {
        ...component.Article,
        props: [
          {
            key: "title",
            type: "text",
            value: "Notice Title",
          },
          {
            key: "subtitle",
            type: "text",
            value: "2020-01-01",
          },
          {
            key: "contents",
            type: "html",
            value: "<p>Notice Contents</p>",
          },
        ],
      },
    ],
  },
];

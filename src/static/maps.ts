//todo menu list
const navItems = [
  {
    title: "Activity 1",
    active: true,
    subItem: [
      {
        title: "1. Center “Hello World”",
        url: "/activity1/pageOne",
      },
      {
        title: "2. Create a counter app",
        url: "/activity1/pageTwo",
      },
      {
        title: "3. Create a simple calculator",
        url: "/activity1/pageThree",
      },
      {
        title: "4. Create a centered button",
        url: "/activity1/pageFour",
      },
      {
        title: "5. Create a basic todo list",
        url: "/activity1/pageFive",
      },
      {
        title: "6. Create a “CardList”",
        url: "/activity1/pageSix",
      },
    ],
  },
  {
    title: "Activity 2",
    active: false,
    url: "/activity2",
    subItem: [],
  },
];

const todoItems = [
  { id: 0, title: "Read the book", active: false },
  { id: 1, title: "Watch TV", active: true },
];

// add new static

export { navItems, todoItems };

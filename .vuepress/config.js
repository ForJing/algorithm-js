module.exports = {
  title: "JavaScript算法",

  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/ForJing/algorithm-js" }],

    sidebar: [
      {
        title: "排序",
        path: "/sort",
        collapsable: false, // 可选的, 默认值是 true,
        children: ["/sort/bubble.md", "/sort/quick.md"]
      }
    ]
  }
};

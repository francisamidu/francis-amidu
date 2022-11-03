const clickAway = (content, toggle) => {
  if (process.browser) {
    document.addEventListener("mousedown", (e) => {
      if (toggle?.current && toggle?.current?.contains(e.target)) {
        content?.current?.classList.toggle("active");
      } else if (content?.current && !content?.current?.contains(e.target)) {
        content?.current?.classList.toggle("active");
        content?.current?.classList.remove("active");
      }
    });
  }
};

export default clickAway;

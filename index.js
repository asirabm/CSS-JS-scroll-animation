window.addEventListener("scroll", setScrolVar);

function setScrolVar() {
  const htmlElemnt = document.documentElement;
  const percentangeOfScreenHEightScroll =
    htmlElemnt.scrollTop / htmlElemnt.clientHeight;
  const a = htmlElemnt.style.setProperty(
    "--scroll",
    Math.min(percentangeOfScreenHEightScroll * 100, 100)
  );
  //  console.log(Math.min(percentangeOfScreenHEightScroll * 100, 100));
}
const observer = new IntersectionObserver((entries) => {
  //console.log(entries);
  for (let i = entries.length - 1; i > -0; i--) {
    const entry = entries[i];
  }
});

const sections = document.querySelectorAll("[data-img-to-show]");
sections.forEach((section) => {
  observer.observe(section);
});

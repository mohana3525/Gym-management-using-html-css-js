const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

console.log(links);
console.log(sections);

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    if (activeLink != i) {
      links[activeLink].classList.remove("active");
      links[i].classList.add("active");
      sections[activeLink].classList.remove("active");
      sections[i].classList.add("active");
      activeLink = i;
    }
  });
});
$('form').card({
  container: '.card-wrapper',
  width: 280,

  formSelectors: {
      nameInput: 'input[name="first-name"], input[name="last-name"]'
  }
});
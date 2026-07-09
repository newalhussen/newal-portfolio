export function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    const offset = 72;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// Código da suavização do scroll de quando aperta um link interno.

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //dessa forma não precisa pegar o offsetTop, esse método basicamente diz: traz o elemento pra minha visão, e ai abre o objeto e passa as parada
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa de fazer o scroll suave
    /*   const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

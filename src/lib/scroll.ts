export function scrollToSection(href: string): void {
  if (href === '#hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}

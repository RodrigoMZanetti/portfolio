export const site = {
  name: "Rodrigo Zanetti",
  logo: "Zanetti",
  role: "Full Stack Developer",
  tagline: "Turn ideas into real solutions.",
  location: "Brussels, Belgium",
  cvPath: "/cv/Rodrigo_Zanetti_Full-stack_CV.pdf",
  photo: "/images/profile.png",
};

export const contact = {
  email: "rzanetti.dev@outlook.com",
  // wa.me links take the number with country code and no symbols
  whatsapp: "https://wa.me/5516997713236",
  linkedin: "https://www.linkedin.com/in/rodrigomaturanozanetti/",
  github: "https://github.com/RodrigoMZanetti",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: site.cvPath, external: true },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

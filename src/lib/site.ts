// All of the personal content on the About page lives here.
// Blog posts live in content/blog/*.md.

export const site = {
  name: "Eli Hammond",
  initials: "EH",
  description: "Eli Hammond's personal website.",

  // A sentence or two for the top of the page.
  intro:
    "I'm Eli Hammond, a May 2026 Computer Science graduate from UC Berkeley.",

  // Set href to a real URL (or a mailto: link). Entries left as "#" are hidden.
  links: [
    { label: "GitHub", href: "https://github.com/eghammond" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eghammond" },
    { label: "Email", href: "mailto:eli.gb.hammond@gmail.com" },
  ],

  // Empty lists hide their section.
  experience: [
    {
      role: "UCS2 / UGSI",
      org: "UC Berkeley",
      dates: "Aug 2025 – May 2026",
      summary: "TA for Data 100. Worked on Content and Lectures teams.",
    },
    {
      role: "Technical Intern",
      org: "SplitSecure",
      dates: "May 2025 - Aug 2025",
      summary: "Made a web scraping tool in Python.",
    },
    {
      role: "UCS1 / Tutor",
      org: "UC Berkeley",
      dates: "Aug 2024 - Aug 2025",
      summary: "Tutor for Data 100. Worked on grading and Lectures teams.",
    }
  ],

  projects: [
    {
      name: "Secure Database Project",
      href: "#",
      summary: "Designed and implemented a secure file-sharing system in Go.",
    },
  ],

  // The human part: music, coffee, books, opinions.
  personally:
    //"A few lines about what you like outside of work. Favorite albums, a ranked list of cafes, whatever feels like you.",
    "",
};

// Get all 6 buttons
const contact_info_button = document.getElementById("contact-info-button")
const projects_button = document.getElementById("projects-button")
const skills_button = document.getElementById("skills-button")
const education_button = document.getElementById("education-button")
const work_experience_button = document.getElementById("work-experience-button")
const volunteer_button = document.getElementById("volunteer-button")

// Get the places to place the info from forms
const about_me_section = document.getElementById("about-me")
const project_section = document.getElementById("projects")
const skills_section = document.getElementById("skills")
const education_section = document.getElementById("education")
const work_experience_section = document.getElementById("work-experience")
const volunteer_section = document.getElementById("volunteer")

const buttons = [contact_info_button, projects_button, skills_button, education_button, work_experience_button, volunteer_button]
const sections = [about_me_section, project_section, skills_section, education_section, work_experience_section, volunteer_section]

// add an event listener to the window so that when you scroll, buttons highlight
window.addEventListener('scroll', () => {
    let activeIndex = -1;
  
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0) {
        activeIndex = i;
        break; // Stop at the first match (topmost)
      }
    }
  
    buttons.forEach((btn, i) => {
      if (i === activeIndex) {
        btn.classList.add('active'); // Add your highlight class
      } else {
        btn.classList.remove('active');
      }
    });
  });

for (let i = 0; i < buttons.length; i++) {
    // Add event listeners to buttons so that when clicked, they scroll to the section
    buttons[i].addEventListener("click", () => {
        const offset = 134;
        const targetY = sections[i].getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetY,
            behavior: 'smooth'
        });
    })
}


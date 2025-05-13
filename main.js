// Get all 4 buttons
const contact_info_button = document.getElementById("contact-info-button")
const education_button = document.getElementById("education-button")
const work_experience_button = document.getElementById("work-experience-button")
const skills_button = document.getElementById("skills-button")

// Get all 4  forms
const contact_info_form = document.getElementById("contact-info-form")
const education_info_form = document.getElementById("education-info-form")
const work_info_form = document.getElementById("work-info-form")
const skills_info_form = document.getElementById("skills-info-form")

// Get the places to place the info from forms
const about_me_section = document.getElementById("about-me-section")
const education_section = document.getElementById("education-section")
const work_section = document.getElementById("work-section")
const skills_section = document.getElementById("skills-section")


// load the default information
const about_me = new AboutMe();
let about_me_card = about_me.toHTML()
about_me_card.className = "about-me-card"
about_me_section.replaceChildren(about_me_card)
const education = new Education();

// Add event listener to about me form so that it updates the about me section by keystroke
contact_info_form.addEventListener("input", e => {
    const about_me = new AboutMe();
    let about_me_card = about_me.toHTML()
    about_me_card.className = "about-me-card"
    about_me_section.replaceChildren(about_me_card)
})

// Load in default education
let education_counter = 1
for (data in educationData) {
    this_education = new Education(
        educationData[data]["logo"], 
        educationData[data]["name"], 
        educationData[data]["gradDate"], 
        educationData[data]["degree"], 
        educationData[data]["field"]
    )
    const educationCard = this_education.toHTML()
    educationCard.className = "education-card"
    educationCard.id = `education-card-${education_counter}`

    // Add event listener to every education card to delete on double click
    educationCard.addEventListener("click", (e) => {
        education_section.removeChild(educationCard)      
    })

    // append as a child to the education section and add to the ID counter
    education_section.appendChild(educationCard)
    education_counter++
}

// Add event listener to education info form button so that it updates the education
education_info_form.addEventListener("submit", e => {
    e.preventDefault();
    
    // create a new Education object
    const school_url = document.getElementById("school-logo-url").value
    const school_name = document.getElementById("school-name").value
    const graduation_date = document.getElementById("graduation-date").value
    const degree = document.getElementById("degree").value
    const field_of_study = document.getElementById("field-of-study").value
    const education = new Education(school_url, school_name, graduation_date, degree, field_of_study);

    // Education object to HTML as education card, add class name and ID
    const educationCard = education.toHTML()
    educationCard.className = "education-card"
    educationCard.id = `education-card-${education_counter}`
    
    // Add event listener to every education card to delete on double click
    educationCard.addEventListener("click", (e) => {
        education_section.removeChild(educationCard)      
    })

    // append as a child to the education section and add to the ID counter
    education_section.appendChild(educationCard)
    education_info_form.reset()
    education_counter ++;
})

// Load in default work
let work_counter = 1
for (data in workData) {
    this_work = new Work(
        workData[data]["name"], 
        workData[data]["title"], 
        workData[data]["start"], 
        workData[data]["end"], 
        workData[data]["description"]
    )
    const workCard = this_work.toHTML()
    workCard.className = "work-card"
    workCard.id = `work-card-${work_counter}`

    // Add event listener to every work card to delete on double click
    workCard.addEventListener("click", (e) => {
        work_section.removeChild(workCard)      
    })

    // append as a child to the work section and add to the ID counter
    work_section.appendChild(workCard)
    work_counter++
}

// Add event listener to work info form button so that it updates the work
work_info_form.addEventListener("submit", e => {
    e.preventDefault();
    
    // create a new Work object

    company_name = document.getElementById("company-name").value
    job_title = document.getElementById("job-title").value
    start_date = document.getElementById("start-date").value
    end_date = document.getElementById("end-date").value
    responsibilities = document.getElementById("responsibilities").value
    const work = new Work(company_name, job_title, start_date, end_date, responsibilities);

    // Work object to HTML as work card, add class name and ID
    const workCard = work.toHTML()
    workCard.className = "work-card"
    workCard.id = `work-card-${work_counter}`
    
    // Add event listener to every work card to delete on double click
    workCard.addEventListener("click", (e) => {
        work_section.removeChild(workCard)      
    })

    // append as a child to the work section and add to the ID counter
    work_section.appendChild(workCard)
    work_info_form.reset()
    work_counter ++;
})

// Load in default work

let skill_counter = 1
for (data in skillsData) {
    let this_skill = new Skill(
        skillsData[data]["skill"], 
        skillsData[data]["level"], 
    )
    const skillsCard = this_skill.toHTML()
    skillsCard.className = "skill-card"
    skillsCard.id = `skill-card-${skill_counter}`

    // Add event listener to every skills card to delete on double click
    skillsCard.addEventListener("click", (e) => {
        skills_section.removeChild(skillsCard)      
    })

    // append as a child to the skills section and add to the ID counter
    skills_section.appendChild(skillsCard)
    skill_counter++
}

// Add event listener to skill info form button so that it updates the skill
skills_info_form.addEventListener("submit", e => {
    e.preventDefault();
    
    // create a new Skill object
    this_skill = document.getElementById("skill-name").value
    this_skill_proficiency = document.getElementById("skill-proficiency").value
    const skill = new Skill(this_skill, this_skill_proficiency);

    // Skill object to HTML as skill card, add class name and ID
    const skillCard = skill.toHTML()
    skillCard.className = "skill-card"
    skillCard.id = `skill-card-${skill_counter}`
    
    // Add event listener to every skill card to delete on double click
    skillCard.addEventListener("click", (e) => {
        skills_section.removeChild(skillCard)      
    })

    // append as a child to the skill section and add to the ID counter
    skills_section.appendChild(skillCard)
    skills_info_form.reset()
    skill_counter ++;
})


// Add event listeners to the menu buttons to hide or reveal elements as necessary
contact_info_button.addEventListener("click", (e) => {
    e.preventDefault()
    contact_info_form.hidden = !contact_info_form.hidden;
    education_info_form.hidden=true;
    work_info_form.hidden=true;
    skills_info_form.hidden=true;

    // toggle button behavior when clicked
    contact_info_button.setAttribute("data-selected", String(!contact_info_form.hidden))
    education_button.setAttribute("data-selected", "false")
    work_experience_button.setAttribute("data-selected", "false")
    skills_button.setAttribute("data-selected", "false")

})

education_button.addEventListener("click", e => {
    e.preventDefault()
    contact_info_form.hidden=true;
    education_info_form.hidden=!education_info_form.hidden;
    work_info_form.hidden=true;
    skills_info_form.hidden=true;

    contact_info_button.setAttribute("data-selected", "false")
    education_button.setAttribute("data-selected", String(!education_info_form.hidden))
    work_experience_button.setAttribute("data-selected", "false")
    skills_button.setAttribute("data-selected", "false")
})

work_experience_button.addEventListener("click", e => {
    e.preventDefault()
    contact_info_form.hidden=true;
    education_info_form.hidden=true;
    work_info_form.hidden=!work_info_form.hidden;
    skills_info_form.hidden=true;

    contact_info_button.setAttribute("data-selected", "false")
    education_button.setAttribute("data-selected", "false")
    work_experience_button.setAttribute("data-selected", String(!work_info_form.hidden))
    skills_button.setAttribute("data-selected", "false")

})

skills_button.addEventListener("click", e => {
    e.preventDefault()
    contact_info_form.hidden=true;
    education_info_form.hidden=true;
    work_info_form.hidden=true;
    skills_info_form.hidden=!skills_info_form.hidden;

    contact_info_button.setAttribute("data-selected", "false")
    education_button.setAttribute("data-selected", "false")
    work_experience_button.setAttribute("data-selected", "false")
    skills_button.setAttribute("data-selected", String(!skills_info_form.hidden))

})


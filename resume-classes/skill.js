class Skill {
    constructor(skill, skill_proficiency) {
        this.skill = skill
        this.skill_proficiency = skill_proficiency
    }

    newDiv(inner){
        let div = document.createElement("div")
        div.innerHTML = `${inner}`
        return div
    }

    toHTML(){
        let wrapper = document.createElement("div")

        let skill_div = document.createElement("div")
        skill_div.innerHTML = `<b>${this.skill}: </b>${this.skill_proficiency}`

        // append all education information as new divs
        wrapper.appendChild(skill_div)

        return wrapper
    }
}
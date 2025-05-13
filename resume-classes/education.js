class Education {
    constructor(school_url, school_name, graduation_date, degree, field_of_study) {
        this.school_url = school_url
        this.school_name = school_name
        this.graduation_date = graduation_date
        this.degree = degree
        this.field_of_study = field_of_study
    }

    newDiv(text, inner){
        let div = document.createElement("div")
        div.innerHTML = `<b>${text}</b>${inner}`
        return div
    }

    toHTML(){
        let wrapper = document.createElement("div")
        // create div for the picture
        let image_div = document.createElement("div")
        image_div.className = "image-div"
        let img = document.createElement("img")
        img.src = this.school_url
        img.alt = "School logo"
        image_div.appendChild(img)
        
        // append all education information as new divs
        wrapper.appendChild(image_div)
        let info_div = document.createElement("div")
        info_div.appendChild(this.newDiv("School: ", this.school_name))
        info_div.appendChild(this.newDiv("Graduation Date: ", this.graduation_date))
        info_div.appendChild(this.newDiv("Degree: ", this.degree))
        info_div.appendChild(this.newDiv("Field of Study: ", this.field_of_study))
        wrapper.append(info_div)
        
        return wrapper
    }
}
class AboutMe {
    constructor() {
        this.name = document.getElementById("name").value
        this.image_url = document.getElementById("image-url").value
        this.email_address = document.getElementById("email-address").value
        this.phone_number = document.getElementById("phone-number").value
        this.street = document.getElementById("street").value
        this.city = document.getElementById("city").value
        this.state = document.getElementById("state").value
        this.zipcode = document.getElementById("zipcode").value
        this.address = `${this.street}, ${this.city}, ${this.state}, ${this.zipcode}`
    }

    newDiv(text, inner){
        let div = document.createElement("div")
        div.innerHTML = `<b>${text}</b>${inner}`
        return div
    }

    toHTML(){
        let wrapper = document.createElement("div")
        
        let img = document.createElement("img")
        img.src = this.image_url
        img.alt = "Portrait of individual"

        let name_header = document.createElement("h2")
        name_header.innerHTML = this.name

        let skill_div = document.createElement("div")
        skill_div.innerHTML = `<b>${this.skill}: </b>${this.skill_proficiency}`

        // append all information to the wrapper and return
        wrapper.appendChild(img)
        wrapper.append(name_header)
        wrapper.append(this.newDiv("Phone Number: ", this.phone_number))
        wrapper.append(this.newDiv("Email Address: ", this.email_address))
        wrapper.append(this.newDiv("Address: ", this.address))

        return wrapper
    }
}
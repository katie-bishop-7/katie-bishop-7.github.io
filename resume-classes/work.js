class Work {
    constructor(company_name, job_title, start_date, end_date, responsibilities) {
        this.company_name = company_name
        this.job_title = job_title
        this.start_date = start_date
        if (end_date){
            this.end_date = end_date
        } else {
            this.end_date = "Present"
        }
        this.responsibilities = responsibilities
    }

    newDiv(text, inner){
        let div = document.createElement("div")
        div.innerHTML = `<b>${text}</b>${inner}`
        return div
    }

    toHTML(){
        let wrapper = document.createElement("div")

        // put the company and time worked in the same header div        
        let header_div = document.createElement("div")
        header_div.className = "company-header"
        header_div.appendChild(this.newDiv("Company: ", this.company_name))
        let time_worked = document.createElement("div")
        time_worked.innerHTML = `${this.start_date} - ${this.end_date}`
        header_div.appendChild(time_worked)

        // append all education information as new divs
        wrapper.appendChild(header_div)
        wrapper.appendChild(this.newDiv("Job Title: ", this.job_title))
        wrapper.appendChild(this.newDiv("Responsibilities: ", this.responsibilities))

        return wrapper
    }
}
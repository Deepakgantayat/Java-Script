const person = {
    name : 'Deepak',
    age: 23,
    city: 'Bangalore',
    hobbies: ['Riding', 'Travelling'],
    education: [{class: +2, college: 'Om BBS', graduationYear: 2013, grade: 'A' },
                {class: 'B.Tech', college: 'GIET', graduationYear: 2017, grade: 'A'}
                ],
    isExperience : true/false,
    experience: [{company:'NA', term: 'NA', designation: 'NA'}],
    conatct: {email:'deepakgantayat29@.com', mob: 7978218286},
    bio: 'full stack developer',
    projects : [{title: 'DNA Encryption', description: 'encrypt sensitive data', roll: 'researcher'}],
    showEducation: function(){
        let result = ``
        for(let i = 0; i<this.education.length; i++){
            result += `
            class- ${this.education[i].class}
            college - ${this.education[i].college}
            graduationYear - ${this.education[i].graduationYear}
            grade - ${this.education[i].grade}
            `
        }
        return result
    },
    print: function(){
        return `${this.name}                 ${this.conatct.email}        ${this.conatct.mob}
        
        ${this.bio}
        
        Education
        ${this.showEducation()}
        
        
        Projects
        ${this.projects.title}
        ${this.projects.description}
        ${this.projects.roll}
        
        Experience
        ${this.experience.comapny}
        ${this.experience.term}
        ${this.experience.designation}
        
        Hobiies
        ${this.hobbies}
        
        Age
        ${this.age}
        
        City
        ${this.city}`
    }
}

    console.log(person.print())





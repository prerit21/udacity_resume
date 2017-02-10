var bio = {
    "name": "Prerit Bajaj",
    "role": "Budding Developer",
    "contacts": {
        "email": "prerit.bajaj21@gmail.com",
        "github": "/prerit21",
        "twitter": "@prerit21",
        "location": "Panchkula, Haryana, India"
    },
    "picture": "img/me.jpg",
    "WelcomeMessage": "I'm currently learning to be a Software Developer.Its my first resume",
    "skills": ["JavaScript", "CSS", "Object-Oriented Programming", "LINUX"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);

var formattedContact = [];
formattedContact.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContact.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

      for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContact) {
    $("#topContacts").append(formattedContact[i]);
    $("#footerContacts").append(formattedContact[i]);
}


var work = {
    "jobs": [
        {
            "employer": "Internshala",
            "title": "Front-End Developer",
            "place": "Gurugram,Haryana,India",
            "dates": "January 2017 - Feburary 2017",
            "description": "I worked on Front-End web development as part of an internship provided to me by Internshala.The work was focussed on front end of an interactive website and given appropriate training for that."
        },
        {
            "employer": "Chitkara University",
            "title": "Object-Oriented programmer",
            "place": "Chandigarh,India",
            "dates": "March 2016 - September 2016",
            "description": "I built a software for back-end clients in C++ language.This included designing the logic of back end data and little bit of front end interfaces for end users."
        },
    ]
};

work.print = function() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

          for (i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedworkPlace = HTMLworkLocation.replace("%data%", work.jobs[i].place);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerworkTitle = formattedworkEmployer + formattedworkTitle;

            $(".work-entry:last").append(formattedEmployerworkTitle);
            $(".work-entry:last").append(formattedworkPlace);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkDescription);
        }

    }

}

work.print();


var education = {
    "schools": [
        { "name": "Chitkara University",
            "dates": "2015 - 2019",
            "location": "Rajpura,Punjab,India",
            "degree": "B.E(Computer Science Engineering)",
            "major": "Computer Science",
            "url": "https://www.chitkara.edu.in"
        },
        { "name": "DC Model Sr. Sec. School",
            "dates": "2013 - 2015",
            "location": "Panchkula,Haryana,India",
            "degree": "Secondary Education",
            "major": "Science",
            "url": "https://www.dcmspkl.ztc.in",
},
    ],
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Front-End Nanodegree",
            "status": "Ongoing",
            "url": "https://www.udacity.com"
        },
        { "school": "Duolingo",
            "title": "Spanish",
            "status": "January 2016",
            "url": "https://www.duolingo.com/"
        },
        { "school": "Udacity",
            "title": "Basics Of Javascript",
            "status": "December 2016",
            "url": "https://www.udacity.com/"
        },
        { "school": "Coursera",
            "title": "Intro to Programming",
            "status": "December 2016",
            "url": "https://www.coursera.com/"
        },
    ]
};

education.print = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
          for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
              for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].status);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.print();


var projects = {
    "projects": [
        {
            "title": "Animal Card",
            "datesWorked": "January 2017",
            "description": "Created an animal card using HTML5 and CSS as part of Udacity's Front-End Web Development Nanodegree.",
            "images": ["img/card.png"],
            "url":"https://github.com/prerit21/Animal_Card"
        },
        {
            "title": "Online Portfolio",
            "datesWorked": "January 2017",
            "description": "Created an online portfolio as part of Udacity's Front-End Web Development Nanodegree.",
            "images": ["img/portfolio.png"],
            "url":"https://github.com/prerit21/udacity_portfolio",
        },
    ]
};


projects.print = function() {
    if(projects.projects.length > 0) {
          for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);

            for(img in projects.projects[i].images) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedprojectImage);
            }


        }
    }
}

projects.print();


$("#mapDiv").append(googleMap);
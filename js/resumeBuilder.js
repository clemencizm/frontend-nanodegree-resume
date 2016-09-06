var months = ["Diciembre", "Enero", "Febrero", "Marzo", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
    
var date = new Date();
var localTime = date.getTime();
var localOffset = date.getTimezoneOffset() * 60000;
var utc = localTime + localOffset;

var offset_spain = 2;   
var timestamp_spain = new Date(utc + (3600000*offset_spain));
document.getElementById("time_es").innerHTML = timestamp_spain.getDate() + " " + months[timestamp_spain.getMonth()] + " " + timestamp_spain.getFullYear() + ", " + timestamp_spain.getHours() + ":" + timestamp_spain.getMinutes();

var offset_mexico = -5;   
var timestamp_mexico = new Date(utc + (3600000*offset_mexico));
document.getElementById("time_mx").innerHTML = timestamp_mexico.getDate() + " " + months[timestamp_mexico.getMonth(-1)] + " " + timestamp_mexico.getFullYear() + ", " + timestamp_mexico.getHours() + ":" + timestamp_mexico.getMinutes();

var bio = {
    "name" : firstName, 
    "role" : role, 
    "contactInfo" : {
        "email" : "clemence.lc@gmail.com",
        "skype" : "jamgraphic",
        "github" : "https://github.com/clemencizm",
        "twitter" : "https://twitter.com/jamgraphic",
        "blog" : "http://jam-graphic.tumblr.com/",
        "behance" : "https://www.behance.net/clemencizm",
        "linkedin" : "https://mx.linkedin.com/in/clemencizm",
        "location" : "Mexico, relocating to BCN within the next 5 months. Depend of job oportunity."
    }, 
    "pictureURL" : "images/logo-jam-graphic-diseno-digital.png",  
    "welcomeMessage" : "Mi curriculum digital | UX UI designer / Graphic Designer", 
    "skills" : [
        "UX", "UI", "look + feel", "visual concept", "diseño gráfico", "css3", "html5", "web responsive", "bootstrap", "material design", "angular material", "gulp", "git for github", "sass", "SEO"
    ]
}  
$("#main").append(bio.contactInfo);

var work = {};
    work.jobPosition = "UX - IU designer sr",
    work.employer = "Mundo Joven for Indigo",
    work.years = "2015 - presente",
    work.city = "Ciudad de México, México";
$("#main").append(work["jobPosition"]);

var education = {}
    education["schools"] [
        {
            "school" : "Académie Charpentier",
            "schoolCity" : "Paris, France",
            "diploma" : "Licencie Visual Comunication",
            "graduationYears" : "2001",
            "website" : ""
        },
        {
            "school" : "ASFORED",
            "schoolCity" : "Paris, France",
            "diploma" : "Licencie Publishing production",
            "graduationYears" : 2003,
            "website" : ""
        },
        {
            "school" : "Master SChool Mx",
            "schoolCity" : "México City, México",
            "diploma" : "",
            "graduationYears" : 2010,
            "website" : ""
        }
    ],
    "onlineCourses" [
        {
            "tema" : "Javascript Basic",
            "graduationYears" : 2016,
            "websites" : [
                "W3Schools", "Udadity.com", "Sitepoint.com", "Openclassroom.com"
            ]

        }
    ]
$(document).ready(function() {
    $("#main").append(education.schools);
});



var firstName ="Soy Clémence Izm";
var formattedName = HTMLheaderName.replace("%data%", firstName);

var role = "diseñadora UX UI senior";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#name").append(formattedName);
$("#name").append(formattedRole);




/*---------------------------------

Udacity test

--------------------------------- */


// test array increasing
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));




// Homogeneiser une ecriture
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
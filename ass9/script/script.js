var Name = document.getElementById("bookmarkName");
var Site = document.getElementById("bookmarkURL");
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;



function validate(element, regex) {
    var Reg = regex;
    if (Reg.test(element.value)) {
        document.getElementById("modal").classList.replace("dblock","d-none");

    return true;
    
    }
    document.getElementById("modal").classList.replace("d-none","dblock");
    return false;
  }

var dURLs = [];
if (localStorage.getItem("urls") != null) {
    dURLs = JSON.parse(localStorage.getItem("urls"));

    display()

}
else {
    dURLs = [];
}

function addURL() {
    if(validate(Name, nameRegex)==true && validate(Site, urlRegex)==true )
    {

        var url = {
        name: Name.value,
        site: Site.value

    }

    dURLs.push(url);
    localStorage.setItem("urls", JSON.stringify(dURLs));
    clearForm();
    display();

}}
function clearForm() {

    Name.value = "";
    Site.value = "";
}

function display() {
    creat = "";

    for (var i = 0; i < dURLs.length; i++) {
        creat = creat + `<tr>
            <td>${i + 1}</td>
            <td>${dURLs[i].name}</td>
            <td><button type="button" onclick="location.href='${dURLs[i].site}'" class="btn btn-success"><i class="fa-solid fa-eye"></i>Visit</button>
            </td>
            <td><button type="button" onclick="deleteu(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i>Delete</button>
            </td>
            </tr>
            `
    }
    document.getElementById("tableContent").innerHTML = creat;
}


function deleteu(indx) {
    dURLs.splice(indx, 1)
    localStorage.setItem("urls", JSON.stringify(dURLs));

    display()
}
function closeModal() {
    document.getElementById("modal").classList.replace("dblock","d-none");
}
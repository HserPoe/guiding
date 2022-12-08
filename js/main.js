let bars = document.querySelector("#bars")
let nav_link = document.querySelector(".nav_link")
bars.addEventListener("click", function(){
    nav_link.classList.toggle("show");
    bars.classList.toggle("fa-times")
});


$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

//emial
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = " ";
    const templateID = " ";

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your Message Sent Successfully")
        }
    )
    .catch((err) => console.log(err));
}

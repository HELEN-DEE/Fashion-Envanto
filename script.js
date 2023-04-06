const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
})

document.querySelectorAll(".nav-ref").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
}))

// form
function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_pgtydpu", "template_14zz4ba", params).then(function (res) {
        alert("success!" + res.status);
    })
}

// popup-image
document.querySelectorAll('.galleryimg img').forEach(image => {
    image.onclick = () =>{ 
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
}
   
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
});



//====================================================================================================
function handleHomeImageClick() {
    // Function to handle image click event
    function handleImageClick(modal, img, modalImg, captionText) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    // Function to handle modal close event
    function handleCloseClick(modal) {modal.style.display = "none";}

    // Get the modals
    var modal1 = document.getElementById("Modal1");
    var modal2 = document.getElementById("Modal2");
    var modal3 = document.getElementById("Modal3");
    var modal4 = document.getElementById("Modal4");

    // Get the images and insert them inside the modals - use their "alt" text as captions
    var img1 = document.getElementById("myImg1");
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var modalImg1 = document.getElementById("img01");
    var modalImg2 = document.getElementById("img02");
    var modalImg3 = document.getElementById("img03");
    var modalImg4 = document.getElementById("img04");
    var captionText1 = document.getElementById("caption1");
    var captionText2 = document.getElementById("caption2");
    var captionText3 = document.getElementById("caption3");
    var captionText4 = document.getElementById("caption4");

    // Assign click event handlers to the images
    img1.onclick = function () {handleImageClick(modal1, img1, modalImg1, captionText1);};
    img2.onclick = function () {handleImageClick(modal2, img2, modalImg2, captionText2);};
    img3.onclick = function () {handleImageClick(modal3, img3, modalImg3, captionText3);};
    img4.onclick = function () {handleImageClick(modal4, img4, modalImg4, captionText4);};

    // Get the close buttons
    var span1 = document.getElementsByClassName("close1")[0];
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];
    var span4 = document.getElementsByClassName("close4")[0];

    // Assign click event handlers to the close buttons
    span1.onclick = function () {handleCloseClick(modal1);};
    span2.onclick = function () {handleCloseClick(modal2);};
    span3.onclick = function () {handleCloseClick(modal3);};
    span4.onclick = function () {handleCloseClick(modal4);};
}

//call the function
handleHomeImageClick();

//====================================================================================================

//validate name
function validateName() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");

    //regex for name
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (nameRegex.test(name) === false || name.length < 1 || name.length > 20) {
        nameError.innerHTML = "Please enter a valid name";
        nameError.style.color = "red";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

//validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    //regex for email
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (emailRegex.test(email) === false || email.length < 1) {
        emailError.innerHTML = "Please enter a valid email address";
        emailError.style.color = "red";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

//validate phone
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneError = document.getElementById("phoneError");

    //regex for phone number
    var phoneRegex = /^\d{11}$/;
    if (phoneRegex.test(phone) === false || phone.length < 1) {
        phoneError.innerHTML = "Please enter a valid phone number";
        phoneError.style.color = "red";
        return false;
    } else {
        phoneError.innerHTML = "";
        return true;
    }
}

//validate gender
function validateGender() {
    var gender = document.getElementById("gender").value;
    var genderError = document.getElementById("genderError");

    if (gender.length < 1) {
        genderError.innerHTML = "Please select your gender";
        genderError.style.color = "red";
        return false;
    } else {
        genderError.innerHTML = "";
        return true;
    }
}

//validate grade
function validateGrade() {
    var grade = document.getElementById("grade").value;
    var gradeError = document.getElementById("gradeError");

    //convert grade to number
    grade = parseInt(grade);
    if (grade.length < 1 || grade < 1 || grade > 12) {
        gradeError.innerHTML = "Please enter a valid grade";
        gradeError.style.color = "red";
        return false;
    } else {
        gradeError.innerHTML = "";
        return true;
    }
}

//===================================================================================================

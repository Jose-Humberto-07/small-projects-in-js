//getting all required elements
const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user entered value
        if(userData.trim() != 0) {// if user values aren't only spaces
            addBtn.classList.add("active"); 
        } else{
            addBtn.classList.remove("active");
        }
}
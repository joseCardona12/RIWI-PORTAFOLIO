const activity = document.getElementById("activity");

showActivity = () =>{

    const activitiesCharge = document.getElementById("paragraph-content");
    activitiesCharge.classList.toggle("show-activity");

}

activity.addEventListener("click", showActivity);
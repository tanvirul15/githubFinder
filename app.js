//init github
const github = new GitHub;

//init UI
const ui = new UI;

//Search Input

const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", e => {
    e.preventDefault();

    const userText = e.target.value;
    if (userText !== "") {
        //Make http call 
        github.getUser(userText).then(data => {
            //console.log(data.profile.message);
            if (data.profile.message === "Not Found") {
                console.log("Profile Not Found");
                ui.showWarning();
            } else {
                ui.clearAlert();
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepository(data.repos);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
});
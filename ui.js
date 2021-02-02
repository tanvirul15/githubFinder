class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.searchContainer = document.getElementById("searchBox");
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" class="btn btn-primary btn-rounded btn-block">View Profile</a>
                </div>
                <br><br>
               <br><br>
                <div class="col-md-9 pt-2">
                <span class="badge badge-primary">Public Repository: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Following: ${user.following}</span>
                <span class="badge badge-warning">Follower: ${user.followers}</span>
                <ul class="list-group mt-4">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                
                </div>
            
            </div>
        
        </div>
        `;

    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    };
    showWarning() {
        this.clearAlert();
        const temp = document.createElement("div");
        temp.className = "bg-danger p-2 text-white alert";
        temp.appendChild(document.createTextNode("Profile Not Found"))
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(temp, search);

    }

    //clear Repo
    clearRepo() {
        const divUI = document.getElementById("repos");
        divUI.innerHTML = "";

    }

    //Display Repository
    showRepository(data) {
        this.clearRepo();
        //Get Div
        const divUI = document.getElementById("repos");
        //Iteratively Add Elements
        const size = (data.length > 5 ? 5 : data.length);
        for (let i = 0; i < size; i++) {
            //create Div
            const div = document.createElement("div");
            div.className = "card card-body mb-3 p-3";
            div.innerHTML = `
                <div class="row">
                <div class="col-md-6">
                <a href="${data[i].html_url}" class="">${data[i].name}</a>
                </div>
                <br><br>
                <div class="col-md-6">
                <span class="badge badge-primary">Forks: ${data[i].forks}</span>
                <span class="badge badge-secondary">Watcher: ${data[i].watchers}</span>
                <span class="badge badge-success">Stranger Count: ${data[i].stargazers_count}</span>
                </div>
            </div>`;
            divUI.appendChild(div);
        }
    }
}
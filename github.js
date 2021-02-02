//8f33fda33dd7cf35480cea60148ec8533252f2c0
//6fbab0431005383493324b1392722b8960e68179

class GitHub {

    constructor() {
        this.client_id = "bf174a7fcc064a0716d1";
        this.client_secret = "6fbab0431005383493324b1392722b8960e68179";
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }



}
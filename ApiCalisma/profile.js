class Profile {
    constructor() {
        this.clientid = "";
        this.clientSecret = "";
    }
    async getProfile(name) {




        const ProfileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${name}`);
        const profile = await ProfileResponse.json();
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo = await todoResponse.json();

        return {
            profile,
            todo
        }


    }
}
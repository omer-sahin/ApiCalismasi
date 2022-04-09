const profile = new Profile();

const ui = new UI;
const searchProfile = document.getElementById("searchProfile");
searchProfile.addEventListener("keyup", (event) => {
    document.getElementById("alert").style.display = "none"

    ui.clear();


    let text = event.target.value;



    if (text !== "") {



        profile.getProfile(text).then(response => {
            if (response.profile.length !== 0) {

                console.log(response.profile[0])
                ui.showInfos(response.profile[0]);
                ui.showTodo(response.todo)



            } else {
                ui.showAlert(text);
            }

        }).catch(error => {
            ui.showAlert(text);


            document.getElementById("alert").style.display = "block"
        })


    }






})
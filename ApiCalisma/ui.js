class UI {
    constructor() {
        this.profilContainer = document.getElementById("profileContainer");
        this.alert = document.getElementById("alert");
    }
    showInfos(userprofil) {


        this.profilContainer.innerHTML = `
        <div class="card card-body">
        <div class="row">
        <div class="col-md-3">
        <img class="image-thumblian" src="${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjtyMdXTCyB6w_FbQDxo-3yJ0NtGb1Rtazg&usqp=CAU"}"/>
        
        
        </div>
        <div class="col-md-9">
        <h4>Contact</h4>
        <ul class="list-group">

        <li class="list-group-item">

        Name : ${userprofil.name}
        </li>
        
        <li class="list-group-item">
        
        Username : ${userprofil.username}
        </li>
        <li class="list-group-item">
        
        Mail : ${userprofil.email}
        ${userprofil.city}
        ${userprofil.zipcode}
        ${userprofil.email}
        ${userprofil.suite}
        </li>
        <li class="list-group-item">
        
        Phone : ${userprofil.phone}
        </li>
        <li class="list-group-item">
        
       Website Adress : ${userprofil.website}
        </li>
        <li class="list-group-item">
        
        Adress : ${userprofil.company.name}
        </li>        
        </ul>
        <h4 class="mt-4">Todo List</>
        <ul id="todo" class="list-group mt-4">
      <!--  <li class="list-group-item">
        Name : ${userprofil.name}
        </li>-->



        </ul>
        
        </div>
        </div>
        </div>

        
        
        `

    }
    showAlert(text) {
        this.alert.innerHTML = `${text} is not found .`;

    }
    showTodo(todo) {

        let html = "";

        todo.forEach(item => {
            if (item.completed) {
                html += `<li class="list-group-item bg-success">
                ${item.title}
                </li>`
            } else {
                html += `<li class="list-group-item bg-secondary">
                ${item.title}
                </li>`
            }

        });
        this.profilContainer.querySelector("#todo").innerHTML = html;

    }
    clear() {
        this.profilContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }


}
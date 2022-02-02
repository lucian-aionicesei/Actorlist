// FETCHING DATA 

fetch("../json/actors.json")
    .then(res => res.json())
    .then(function (data) {
        handleActorList(data);
    })

function handleActorList(data) {
    console.log(data);
    data.forEach(showActor);
}

function showActor(actor, index) {
    // console.log(actor);
    //grab the template
    const template = document.querySelector(".list_template").content;
    // clone it
    const copy = template.cloneNode(true);
    // change content
    copy.querySelector(".list_number").textContent = index + 1;
    copy.querySelector(".actor_name").textContent = actor.fullname;
    // grab parent
    const parent = document.querySelector(".actorlist");
    // append
    parent.appendChild(copy);

    // call popUp
    const actorsName = document.querySelectorAll(".actor_name");
    actorsName.forEach((actorName) => {
        actorName.addEventListener("click", () => {
            let popUp = document.querySelector(".pop_up");
            popUp.style.setProperty("visibility", "visible");
            let closeButton = document.querySelector(".close_button");
            closeButton.addEventListener("click", () => {
                popUp.style.setProperty("visibility", "hidden");
            });
        });
    });
}
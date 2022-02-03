// FETCHING DATA 

fetch("./json/actors.json")
    .then(res => res.json())
    .then(function (data) {
        handleActorList(data);
    });
    // .catch(err => {
    //     // Do something for an error here
    //     console.log("Error Reading data " + err);
    // });

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

    // create some global variables
    document.querySelector(".actor").textContent = actor.fullname;
    document.querySelector(".movie_name").textContent = actor.movie;

    // select all .actor_name elements
    const actorsName = document.querySelectorAll(".actor_name");

    // call popUp for each
    actorsName.forEach((actor) => {
        actor.addEventListener("click", () => {
            // console.log(actor);

            // open popUp
            let popUp = document.querySelector(".pop_up");
            popUp.style.setProperty("visibility", "visible");
            // close popUp
            let closeButton = document.querySelector(".close_button");
            closeButton.addEventListener("click", () => {
                popUp.style.setProperty("visibility", "hidden");
            });
        });
    });
}
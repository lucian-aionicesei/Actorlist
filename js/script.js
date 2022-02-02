const actors = document.querySelectorAll(".actor_name");

console.log(actors);

actors.forEach((actor, index) => {
    actor.addEventListener("click", openPopUp);
});

function openPopUp(actor) {
    let popUp = document.querySelector(".pop_up");
    popUp.style.setProperty("visibility", "visible");
    let closeButton = document.querySelector(".close_button");
    closeButton.addEventListener("click", () => {
        popUp.style.setProperty("visibility", "hidden");
    });
}
const puzzle_keys = ["books", "bunks", "globes", "socks", "stables", "toys"]

function displayAccurateProgress() {
    const prog = document.getElementById("goose_count")

    var solved_puzzle_count = 0;

    puzzle_keys.forEach((x,i) => {
        const val = localStorage.getItem(x);
        if (val === "solved"){
            solved_puzzle_count += 1;
        }
    })

    prog.innerHTML = solved_puzzle_count

    if (solved_puzzle_count == 6) {
        const completion_message_already_shown = localStorage.getItem("completed")
        if (completion_message_already_shown === "true") {
            // do nothing
        } else {
            alert("Nice work! You found all 6 geese and saved Christmas - phew!")
            localStorage.setItem("completed", "true")
        }            
    }
}


document.addEventListener("DOMContentLoaded", displayAccurateProgress);

function checkIfSolved() {
    puzzle_keys.forEach((x,i) => {
        const val = localStorage.getItem(x);
        if (val === "solved"){
            const links = document.getElementById(x + "_link")
            links.classList.add("fa-egg")
            links.classList.remove("fa-socks", "fa-sleigh", "fa-book", "fa-hammer", "fa-snowflake", "fa-bed")
            links.classList.add("primary")
        }
    })
}
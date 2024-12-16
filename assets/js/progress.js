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
}


document.addEventListener("DOMContentLoaded", displayAccurateProgress);

function checkIfSolved() {
    puzzle_keys.forEach((x,i) => {
        const val = localStorage.getItem(x);
        if (val === "solved"){
            const links = document.getElementById(x + "_link")
            links.classList.add("fa-egg")
            links.classList.add("primary")
        }
    })
}
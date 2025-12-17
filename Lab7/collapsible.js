document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(function (button) {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

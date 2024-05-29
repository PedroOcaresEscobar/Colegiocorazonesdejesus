function toggleContainer(containerId) {
    let container = document.getElementById(containerId);
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
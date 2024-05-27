function toggleContainer(containerId) {
    var container = document.getElementById(containerId);
    var allContainers = document.querySelectorAll('.contenedor');
    allContainers.forEach(function(item) {
        if (item.id !== containerId) {
            item.style.display = 'none';
        }
    });
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
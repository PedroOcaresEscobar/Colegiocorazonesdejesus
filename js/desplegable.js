function toggleContainer(containerId) {
    let containers = document.getElementsByClassName('contenedor');
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i];
        if (container.id === containerId) {
            if (container.style.display === "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        } else {
            container.style.display = "none";
        }
    }
}

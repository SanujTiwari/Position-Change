function reorder() {
    const container = document.getElementById("container");

    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");

    container.innerHTML = "";
    const row1 = document.createElement("div");
    row1.className = "row";

    const row2 = document.createElement("div");
    row2.className = "row";

    row1.appendChild(box2); 
    row1.appendChild(box1); 

    row2.appendChild(box4); 
    row2.appendChild(box3); 

    container.appendChild(row1);
    container.appendChild(row2);
}

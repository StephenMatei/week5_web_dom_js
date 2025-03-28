// Function to change text dynamically
function changeText() {
    document.getElementById("description").innerText = "Text changed dynamically!";
}

// Function to modify CSS styles
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Function to add a new element
function addElement() {
    let newElement = document.createElement("p");
    newElement.innerText = "This is a dynamically added paragraph.";
    newElement.style.color = "green";
    document.getElementById("content").appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    let contentDiv = document.getElementById("content");
    if (contentDiv.lastChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    } else {
        alert("No elements left to remove!");
    }
}

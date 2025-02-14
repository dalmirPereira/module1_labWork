let isOriginal1 = true;
let isOriginal2 = true;

let dogName = "Dog";
let catName = "Cat";

function changeMe1() {
    if (isOriginal1) {
        document.getElementById("image1").src = "./image1-1.jpg";
        document.getElementById("heading1").innerText = dogName;
        document.getElementById("column1").style.backgroundColor = "goldenrod";
    } else {
        document.getElementById("image1").src = "./image2.jpg";
        document.getElementById("heading1").innerText = catName;
        document.getElementById("column1").style.backgroundColor = "mediumaquamarine";
    }
    isOriginal1 = !isOriginal1;
}

function changeMe2() {
    if (isOriginal2) {
        document.getElementById("image2").src = "./image2-1.jpg";
        document.getElementById("heading2").innerText = catName;
        document.getElementById("column2").style.backgroundColor = "goldenrod";
    } else {
        document.getElementById("image2").src = "./image1.jpg";
        document.getElementById("heading2").innerText = dogName;
        document.getElementById("column2").style.backgroundColor = "mediumaquamarine";
    }
    isOriginal2 = !isOriginal2;
}

function changeName() {
    let dogTempName, catTempName;
    dogTempName = document.getElementById("dog-name");
    catTempName = document.getElementById("cat-name");

    dogName = dogTempName.value;
    catName = catTempName.value;

    if (dogName == "") {dogName = "Dog";}
    if (catName == "") {catName = "Cat";}

    if (isOriginal1 == true) {
        document.getElementById("heading1").innerText = catName;
    } else {
        document.getElementById("heading1").innerText = dogName;
    }

    if (isOriginal2 == true) {
        document.getElementById("heading2").innerText = dogName;
    } else {
        document.getElementById("heading2").innerText = catName;
    }
        
}
const mainCaptions = ["Phosphorus Flowchart", "Platline Flowchart", "Polymers + HSO4 + HCl Flowchart"];
const smallTextCaptions = ["by le.croc", "by neeols", "by neeols"];

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    const x = document.getElementsByClassName("mySlides");
    
    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
    document.getElementById("caption").innerHTML = mainCaptions[slideIndex - 1];
    document.getElementById("smallTextCaption").innerHTML = smallTextCaptions[slideIndex - 1];
}

function openTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
}
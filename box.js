var oldvalue = 0;
var button = document.getElementById("theboxes");
button.addEventListener("click", myfunction);

function myfunction() {
    let n = document.getElementById("number").value;
    n = parseInt(oldvalue) + parseInt(n);
    for (var a = 1; a <= n; a++) {
        var box = document.createElement("div");
        box.classList.add("myDiv");
        box.innerHTML = a;
        document.getElementById("box").appendChild(box);
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
    }


}
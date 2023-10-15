
                // 0,  1,  2
var likecounter = [9, 12, 9];
var spans = [
    document.querySelector("#counter1"),
    document.querySelector("#counter2"),
    document.querySelector("#counter3")
];
function likes(id) {
    likecounter[id]++;
    spans[id].innerHTML= likecounter[id] + "like(s)";
}
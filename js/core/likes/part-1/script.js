var likecount = 3;
var spanlike = document.querySelector("#counter");

function likes() {
    likecount++;
    spanlike.innerText= likecount + " like(s)"

}

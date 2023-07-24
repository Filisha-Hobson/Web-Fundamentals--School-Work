var likeincrease = 3;
var likeAdd = document.querySelector("#word");

function IncreaseLikeNum() {
    likeincrease++;
    likeAdd.innerText = likeincrease + " like(s)";
}

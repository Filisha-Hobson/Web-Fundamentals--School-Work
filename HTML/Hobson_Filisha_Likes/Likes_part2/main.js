
var likeincrease = [9, 12, 9];
var spanAdd = [
    document.querySelector("#first"),
    document.querySelector("#second"),
    document.querySelector("#third")
];

function IncreaseLikeNum(id) {
    likeincrease[id]++;
    spanAdd[id].innerHTML = likeincrease[id] + " like(s)";
}


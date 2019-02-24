fetch('https://jsonplaceholder.typicode.com/todos')
.then(result => result.json())
.then((res) => {
    createCard(res);
})
.catch(err => console.log(err))

function createCard(result){
    var details = document.getElementById('todoCards');
    details.innerHTML += "<span>Title: " + result.title + "</span>";
    details.innerHTML += "<span>Id: " + result.id + "</span>";
    details.innerHTML += "<span>UserId: " + result.userId + "</span>";
    details.innerHTML += "<span>Completed: " + result.completed + "</span>";
}

for(i =0; i < todoCards.length; i++) {
    document.write('<h4>' + todoCards[i].title + '</h4>');
}
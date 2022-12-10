function toDoList() {
    document.getElementById('button-1').style.display = 'none'
    document.getElementById('maindiv').style.display = 'block'
    document.body.style.backgroundColor = '#892CDC'
}

//we can select form by predefined method
// console.log(document.forms)
// var p=document.forms['addname'];
// console.log(p);


//to add list item
function addName() {
    var a = document.getElementById('input-1').value;
    var b = document.getElementById('listitem');
    var c = document.createElement('li');
    var e = document.createElement('span')
    var d = document.createElement('span');
    e.innerHTML = a.toUpperCase();
    d.innerHTML = 'Delete'

    b.appendChild(c);
    c.appendChild(e);
    c.appendChild(d);

    d.classList.add('button-3');
    e.classList.add('text')
    document.getElementById('input-1').value = ''

}

//hiding

var f=document.getElementById('listitem');

document.getElementById('checkbox').addEventListener('click', function () {
    if (f.style.display == 'none') {
        f.style.display = 'block'
    }
    else {
        f.style.display = 'noney'
    }
})

//delete
document.getElementById('listitem').addEventListener('click',function(e) {
    console.log(e);
    console.log(e.target.className);
    console.log(e.target.parentElement);

    if(e.target.className=='button-3'){
        var li=e.target.parentElement;
        document.getElementById('listitem').removeChild(li);
    }
})

//search

var searchfor=document.forms['searchbox'][0];
console.log(searchfor.value);

searchfor.addEventListener('keyup',function(e) {
    var searchitem=document.querySelectorAll('li');
    console.log(searchitem[0].textContent);
    var searchvalue=e.target.value.toLowerCase();

    for (i=0;i<searchitem.length;i++) {
        console.log(searchitem[i]);

        if(searchitem[i].textContent.toLowerCase().indexOf(searchvalue)>-1){
           searchitem[i].style.display='block'
        }
        else{
            searchitem[i].style.display='none';
        }
    }
})








//crud application
//create read update delete
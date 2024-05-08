const inputBox1 = document.getElementById("input-box1");
const inputBox2 = document.getElementById("input-box2");

const listContainer1 = document.getElementById("list-container1");
const listContainer2 = document.getElementById("list-container2");

function addTask(x){

    if(x === 1){
        if(inputBox1.value === ''){
            alert("Поле пусто");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox1.value;
            listContainer1.appendChild(li);
    
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
        inputBox1.value = "";
        saveData(1);
    }

    else if(x === 2){
        if(inputBox2.value === ''){
            alert("Поле пусто");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox2.value;
            listContainer2.appendChild(li);
    
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
        inputBox2.value = "";
        saveData(2);
    }
    
}

// -----------------------EVENT LISTENERS-------------------

// ^^^^^ List 1

inputBox1.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask(1);
    }
})

listContainer1.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData(1);
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(1);
    }
}, false);

// ^^^^^ List 2

inputBox2.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask(2);
    }
})

listContainer2.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData(2);
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(2);
    }
}, false);




// ---------------SAVE DATA-----------------------------

function saveData(x){
    if(x===1){
        localStorage.setItem('data1', listContainer1.innerHTML);
    }
    else if(x===2){
        localStorage.setItem('data2', listContainer2.innerHTML);
    }
}

function showData(x){
    if(x===1){
        listContainer1.innerHTML = localStorage.getItem('data1');
    }
    else if(x===2){
        listContainer2.innerHTML = localStorage.getItem('data2');
    }
}
showData(1);
showData(2);


// ----------------------TEXT AREA-------------------------

document.getElementById('freeText').value = getSavedValue('freeText');

function saveValue(e){
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);

}

function getSavedValue(v) {
    if(!localStorage.getItem(v)){
        return '';
    }
    return localStorage.getItem(v);
}
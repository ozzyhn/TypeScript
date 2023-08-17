//Elemen Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-List");
let todos;

//LOAD İTEMS
loadItems();

eventListeners();

function eventListeners() {
    //Submit event
    form.addEventListener("submit", addNewItem);
    // Delete an item
    taskList.addEventListener("click", deleteItem);
    //DELETE ALL
    btnDeleteAll.addEventListener("click", deleteAllItems);

}

function loadItems() {
    todos = getItemsFromLS(); //LOCAL STORAGE DEN ITEM ALIYOR GET İLE
    todos.forEach(function(item) {
        createItem(item);
    });
}

//LOCAL STORAGE İTEM ALMA
function getItemsFromLS() {
    if (localStorage.getItem("todos") === null) { //Local storage item yoksa diye kontrol ediyoruz
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); //İtemleri local storageden çekiyoruz// JSON.PARSE ile ARRAY E DÖNÜŞTÜRÜYORUZ
    }
    return todos;
}

//SET İTEM TO LOCAL STORAGE VERİLERİ GÖNDERECEĞİZ
function setItemsToLS(newTodo) {
    todos = getItemsFromL();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function createItem(newTodo) {

    //Lİ OLUŞTURMA
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo)); //Elemanı oluştururken appendChild ile yapıyoruz ve İnputun değerini oluşturduk


    //A oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa - times "></i>'; //İNNER HTML SAYESİNDE HTML KODLARINI KULLANABİLİYORUZ


    //Listeye dahil etme
    li.appendChild(a);
    taskList.appendChild(li);
}

function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        // console.log("submit");
    }

    //createItem
    createItem(input.value); //Kullanıcının girdiği input değerini eklemesi için

    setItemsToLS(input.value); //Kullanıcının değerine göre eklenecek



    //Submiti boşaltma 
    input.value = "";

    e.preventDefault(); //SAYFA KENDİNİ YENİLEMESİN DİYE
}


//ELEMAN SİLME
function deleteItem(e) {
    if (e.targer.className === "fas fa-times") {
        if (confirm("emin misiniz")) {
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }

    }
    e.preventDefault();
}

//LOCAL STORAGE ELEMAN SİLMEK
function deleteTodoFromStorage(deleteTodo) {
    let todos = getItemsFromLS();

    todos.forEach(function(todo, index) { // elemanı bulmak için foreach ile geziniyoruz
        if (todo === deleteTodo) { //tıklanılan yer doğru mu değil mi diye bakıyoruz
            todos.splice(index, 1) //splice bulundugu andan itibaren siler 1 dediğimiz için todo siler

        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));


}

//TÜM ELEMANLARI SİLMEK

function deleteAllItems(e) {
    if (confirm("emin misiniz")) {
        while (taskList.firstChild) { //ELEMAN SİLMEK İÇİN WHİLE KULLANIALBİLİOYR

            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear(); //DELETE ALL İLE LOCAL STORAGE DE TAMAMEN SİLİNEBİLİR
    }
}
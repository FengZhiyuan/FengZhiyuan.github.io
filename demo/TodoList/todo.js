// class开关
var toggleClass = function(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls)
    }else {
        element.classList.add(cls)
    }
}

// 返回 当前时间
var currentTime = function() {
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()

    var zero = function(n) {
        var t = String(n)
        if (t.length < 2) {
            t = '0' + t
        }
        return t
    }

    var timeString = `${zero(month)}/${zero(date)} ${zero(hours)}:${zero(minutes)}`
    return timeString
}

// 返回 增加的todolist的列表
var addList = function(todo) {
    var time = currentTime()
    var f = `
    <div class="todo-cell">
        <input type="checkbox" class='todo-done button-cell checkbox-done'>
        <input name="submit" type="image" value=" " src="http://i.imgur.com/S5oaKDs.png" class='todo-edit button-cell'>
        <input name="submit" type="image" value=" " src="http://i.imgur.com/xh3mmCk.png" class='todo-delete button-cell'>
        <span contenteditable='false' class='todo-task'>${todo}</span>
    </div>
    `
    return f
}

// 添加todolist列表到页面(增加创建时间)
var todoListAdd = function(){
    var todoInput = document.querySelector('#id-input-add')
    var todo = todoInput.value
    if (todo == '') {
        return
    }
    todo = currentTime() + ' ' + todo
    todoList.push(todo)
    todoSave()
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.insertAdjacentHTML('beforeend', addList(todo))
    document.querySelector('#id-input-add').value = ''
}

// 用于 读取存储的数据，避免时间混乱
var todoListInsert =function(todo) {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.insertAdjacentHTML('beforeend', addList(todo))
}

// 保存todolist
var todoSave = function() {
    var s = JSON.stringify(todoList)
    localStorage.todoList = s
}

// 返回 存储的todolist数据
var todoLoad = function(s) {
    var s = localStorage.todoList
    return JSON.parse(s)
}

// 返回 自己在父元素的下标
var indexOfElement = function(element) {
    var parent = element.parentElement
    for (var i = 0; i < parent.children.length; i++) {
        var e = parent.children[i]
        if (e === element) {
            return i
        }
    }
}

// 返回 同一父元素下包含cls的子元素
var brotherElement = function(element, cls) {
    var p = element.parentElement
    for (var i = 0; i < p.children.length; i++) {
        var f = p.children[i]
        if (f.classList.contains(cls)) {
            return p.children[i]
        }
    }
}


//事件函数
// 点击Add添加todoList
var bindEventAdd = function() {
    var addButton = document.querySelector('#id-button-add')
    addButton.addEventListener('click', todoListAdd)
}
// 按下Eter添加todoList
var bindEventEnter = function() {
    var inputEnter = document.querySelector('#id-input-add')
    inputEnter.addEventListener('keydown', function() {
        if (event.keyCode == 13) {
            todoListAdd()
        }else {
            return
        }
    })
}
// input失去焦点添加todoList(因为该功能多余，故注释掉)
// var bindEventBlur = function() {
//     var blurAdd = document.querySelector('#id-input-add')
//     blurAdd.addEventListener('blur', todoListAdd)
// }
// 点击完成按钮，给todoList添加删除线
var bindEventDone = function() {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('click', function (event){
        var target = event.target
        var task = brotherElement(target, 'todo-task')
        if (target.classList.contains('todo-done')) {
            toggleClass(task, 'done')
        }
    })
}
// 点击删除按钮，删除todoList
var bindEventDelete = function() {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('click', function (event){
        var target = event.target
        var p = target.parentElement
        if (target.classList.contains('todo-delete')) {
        var index = indexOfElement(p)
        p.remove()
        todoList.splice(index, 1)
        todoSave()
        }
    })
}
// 点击编辑按钮，删除todoList
var bindEventEdit = function() {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('click', function (event){
        var target = event.target
        var targetParent = target.parentElement
        if (target.classList.contains('todo-edit')) {
            // 增加‘可编辑’属性
            var task = brotherElement(target, 'todo-task')
            task.setAttribute('contenteditable', 'true')
            //完成编辑后(失去焦点后)不可编辑
            task.addEventListener('blur', function() {
                task.setAttribute('contenteditable', 'false')
                var index = indexOfElement(targetParent)
                todoList[index] = task.innerText
                todoSave()
            })
        }
    })
}


// 事件函数集
var bindEvents = function() {
    bindEventAdd()
    bindEventEnter()
    // bindEventBlur()
    bindEventDone()
    bindEventDelete()
    bindEventEdit()
}
// 程序加载后, 加载 todoList 并且添加到页面中
var loadStorage = function() {
    todoList = todoLoad()
    for (var i = 0; i < todoList.length; i++) {
        var todo = todoList[i]
        todoListInsert(todo)
    }
}


var todoList = []
var __main = function() {
    loadStorage()
    bindEvents()
}
__main()

const TodoList = JSON.parse(localStorage.getItem('TodoList')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
    addList();
    function addList(){
      
      let todoHTML = '';
      for(let i=0; i< TodoList.length; i++){

        const todo = TodoList[i];
        const { name,dueDate } = todo ;
        const html = 
        `<div style="margin:8px 2px;">${name} </div>
        <div style="margin:8px 2px;">${dueDate}</div>
        <button onclick="
            TodoList.splice(${i},1);
            addList();saveToStorage();" class="button-del">Delete</button>
        `;
        todoHTML += html;
      }
      document.querySelector('.list').innerHTML = todoHTML;
      
    }

    function add() {
      const nameInput = document.querySelector('.input');
      const name = nameInput.value;
      nameInput.value = '';

      const dateInput = document.querySelector('.date-input');
      const dueDate = dateInput.value;
      //dateInput.value = '';

      TodoList.push({
        name,
        dueDate
      });

      addList(); 
      saveToStorage();
    }

    function saveToStorage() {
      localStorage.setItem('TodoList', JSON.stringify(TodoList));
    }
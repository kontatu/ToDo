const addArea = document.getElementById('add-area');
const addBtn = document.getElementById('add-btn');
const ul = document.getElementById('todo');

let num = 0;


addBtn.addEventListener('click', function () {
    if (addArea.value !== "") {
        const div = document.createElement('div');
        divNum = 'div' + num;
        div.setAttribute("id", divNum);
        const li = document.createElement('li');
        li.textContent = addArea.value;
        const button = document.createElement('input');
        button.setAttribute("type", "button");
        resetNum = "reset" + num;
        button.setAttribute("id", resetNum);
        button.setAttribute("value", "削除");

        div.appendChild(li);
        div.appendChild(button);
        ul.appendChild(div);

        const resetId = document.getElementById(resetNum)
        const divbox = document.getElementById(divNum);
        resetId.addEventListener('click', function () {
            ul.removeChild(divbox);
        });
        num += 1;
    } else {
        alert('何かを入力してください');
    }

});

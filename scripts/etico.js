
const InputText1 = document.querySelector('.InputText1');
const btAdd1 = document.querySelector('.btAddText1');
const ListaEtico = document.querySelector('.receberItemEtico');

btAdd1.addEventListener("click", () => addItemEtico());


const ValidacaoInput2 = () => InputText1.value.trim().length > 0;


const addItemEtico = () =>{

    const inputValido = ValidacaoInput2();

    if(!inputValido){

        return InputText1.classList.add("error");
    }

    const ItemEtico = document.createElement('div');
    ItemEtico.classList.add("task-item");

    const TaferaItem = document.createElement('p');
    TaferaItem.innerText = InputText1.value;
    TaferaItem.addEventListener("click", () => Finalizado2(TaferaItem));

    const deleteItem2 = document.createElement("i");
    deleteItem2.classList.add("far");
    deleteItem2.classList.add("fa-trash-alt");
    deleteItem2.addEventListener("click", () => DeleteItemEtico(TaferaItem,ItemEtico))

    ItemEtico.appendChild(TaferaItem);
    ItemEtico.append(deleteItem2);

    ListaEtico.appendChild(ItemEtico);

    InputText1.value = "";

    AtualizarBanco1();
}

const Finalizado2 = (TaferaItem) =>{

    const TaferaEtico = ListaEtico.childNodes;

    for (const task of TaferaEtico) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem);
  
      if (currentTaskIsBeingClicked) {
        task.firstChild.classList.toggle("completed");
      }
    }

    AtualizarBanco1();

    
}

const DeleteItemEtico = (TaferaItem,ItemEtico) =>{

    const TaferaEtico = ListaEtico.childNodes;

    for (const task of TaferaEtico) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem);
  
      if (currentTaskIsBeingClicked) {
        ItemEtico.remove();
      }
    }

    AtualizarBanco1();

}


const AtualizarBanco1 = () =>{

  const TaferaEtico = ListaEtico.childNodes;

  const localStorageEtico = [...TaferaEtico].map((TaferaEtico)=>{

    const etico = TaferaEtico.firstChild;
    const TarefaCompleta = etico.classList.contains('completed');

    return {description: etico.innerText, TarefaCompleta}

  })


  localStorage.setItem('RemeEtico', JSON.stringify(localStorageEtico))
}


const atualizarItemEticos = () =>{

  const ItemSEticosLocal = JSON.parse(localStorage.getItem('RemeEtico'));

  for(const item of ItemSEticosLocal){

    const ItemEtico = document.createElement('div');
    ItemEtico.classList.add("task-item");

    const TaferaItem = document.createElement('p');
    TaferaItem.innerText = item.description

    if(item.TarefaCompleta){

      TaferaItem.classList.add("completed");
    }

    TaferaItem.addEventListener("click", () => Finalizado2(TaferaItem));

    const deleteItem2 = document.createElement("i");
    deleteItem2.classList.add("far");
    deleteItem2.classList.add("fa-trash-alt");
    deleteItem2.addEventListener("click", () => DeleteItemEtico(TaferaItem,ItemEtico))

    ItemEtico.appendChild(TaferaItem);
    ItemEtico.append(deleteItem2);

    ListaEtico.appendChild(ItemEtico);
  }

}

atualizarItemEticos();
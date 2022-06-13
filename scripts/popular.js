const InputText02 = document.querySelector(".InputText2");
const btAdd2 = document.querySelector(".btAddText2");
const ListaPopular = document.querySelector('.receberItemPopular');

btAdd2.addEventListener("click", () => AddItemPopular());

const ValidacaoInput3 = () => InputText02.value.trim().length > 0;

const AddItemPopular = () =>{

    const inputValido2 = ValidacaoInput3();

    if(!inputValido2){

        return InputText02.classList.add("error");
    }

    const ItemPopular = document.createElement('div');
    ItemPopular.classList.add("task-item");

    const TaferaItem2 = document.createElement('p');
    TaferaItem2.innerText = InputText02.value;
    TaferaItem2.addEventListener("click", () => Finalizado3(TaferaItem2));

    const deleteItem3 = document.createElement("i");
    deleteItem3.classList.add("far");
    deleteItem3.classList.add("fa-trash-alt");
    deleteItem3.addEventListener("click", () => DeleteItemPopular(TaferaItem2,ItemPopular));

    ItemPopular.appendChild(TaferaItem2);
    ItemPopular.append(deleteItem3);

    ListaPopular.appendChild(ItemPopular);

    InputText02.value = "";

    AtualizarBanco2();

}

const Finalizado3 = (TaferaItem2) =>{

    const TaferaPopular = ListaPopular.childNodes;

    for (const task of TaferaPopular) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem2);
  
      if (currentTaskIsBeingClicked) {
        task.firstChild.classList.toggle("completed");
      }
    }

    AtualizarBanco2();
}

const DeleteItemPopular = (TaferaItem2,ItemPopular) =>{

    const TaferaPopular = ListaPopular.childNodes;

    for (const task of TaferaPopular) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem2);
  
      if (currentTaskIsBeingClicked) {
        ItemPopular.remove();
      }
    }

    AtualizarBanco2();

}

const AtualizarBanco2 = () =>{

    const TaferaPopular = ListaPopular.childNodes;
  
    const localStoragePopular = [...TaferaPopular].map((TaferaPopular)=>{
  
      const popular = TaferaPopular.firstChild;
      const TarefaCompleta2 = popular.classList.contains('completed');
  
      return {description: popular.innerText, TarefaCompleta2: TarefaCompleta2}
  
    })
  
  
    localStorage.setItem('Remepopular', JSON.stringify(localStoragePopular))
  }
  

  const atualizarItemPopular = () =>{

    const ItemSPopularLocal = JSON.parse(localStorage.getItem('Remepopular'));
  
    for(const item of ItemSPopularLocal){
  
      const ItemPopular = document.createElement('div');
      ItemPopular.classList.add("task-item");
  
      const TaferaItem2 = document.createElement('p');
      TaferaItem2.innerText = item.description
  
      if(item.TarefaCompleta2){
  
        TaferaItem2.classList.add("completed");
      }
  
      TaferaItem2.addEventListener("click", () => Finalizado3(TaferaItem2));
  
      const deleteItem3 = document.createElement("i");
      deleteItem3.classList.add("far");
      deleteItem3.classList.add("fa-trash-alt");
      deleteItem3.addEventListener("click", () => DeleteItemPopular(TaferaItem2,ItemPopular))
  
      ItemPopular.appendChild(TaferaItem2);
      ItemPopular.append(deleteItem3);
  
      ListaPopular.appendChild(ItemPopular);
    }
  
  }

atualizarItemPopular();
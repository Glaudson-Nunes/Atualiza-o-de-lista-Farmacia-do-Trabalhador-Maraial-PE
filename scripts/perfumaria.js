const InputText03 = document.querySelector(".InputText3");
const btAdd3 = document.querySelector('.btAddText3');

const ListaPerfumaria = document.querySelector('.receberItemPerfumaria');

btAdd3.addEventListener("click",() => AddItemPerfumaria());

const ValidacaoInput4 = () => InputText03.value.trim().length > 0;


const AddItemPerfumaria = () =>{

    const inputValido3 = ValidacaoInput4();

    if(!inputValido3){

        return InputText03.classList.add("error");
    }

    const ItemPerfumaria = document.createElement('div');
    ItemPerfumaria.classList.add("task-item");

    const TaferaItem3 = document.createElement('p');
    TaferaItem3.innerText = InputText03.value;
    TaferaItem3.addEventListener("click", () => Finalizado4(TaferaItem3));

    const deleteItem4 = document.createElement("i");
    deleteItem4.classList.add("far");
    deleteItem4.classList.add("fa-trash-alt");
    deleteItem4.addEventListener("click", () => DeleteItemPerfumaria(TaferaItem3,ItemPerfumaria));

    ItemPerfumaria.appendChild(TaferaItem3);
    ItemPerfumaria.append(deleteItem4);

    ListaPerfumaria.appendChild(ItemPerfumaria);

    InputText03.value = "";

    AtualizarBanco3();
}

const Finalizado4 = (TaferaItem3) =>{

    const TaferaPerfumaria = ListaPerfumaria.childNodes;

    for (const task of TaferaPerfumaria) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem3);
  
      if (currentTaskIsBeingClicked) {
        task.firstChild.classList.toggle("completed");
      }
    }

    AtualizarBanco3();
}

const DeleteItemPerfumaria = (TaferaItem3,ItemPerfumaria) =>{

    
    const TaferaPerfumaria = ListaPerfumaria.childNodes;

    for (const task of TaferaPerfumaria) {
      const currentTaskIsBeingClicked = task.firstChild.isSameNode(TaferaItem3);
  
      if (currentTaskIsBeingClicked) {
        ItemPerfumaria.remove();
      }
    }

    AtualizarBanco3();

}

const AtualizarBanco3 = () =>{

    const TaferaPerfumaria = ListaPerfumaria.childNodes;
  
    const localStoragePerfumaria = [...TaferaPerfumaria].map((TaferaPerfumaria)=>{
  
      const perfumaria = TaferaPerfumaria.firstChild;
      const TarefaCompleta3 = perfumaria.classList.contains('completed');
  
      return {description: perfumaria.innerText, TarefaCompleta3: TarefaCompleta3}
  
    })
  
  
    localStorage.setItem('Remeperfum', JSON.stringify(localStoragePerfumaria));
  }

  const atualizarItemPermfumaria = () =>{

    const ItemSPerfumariaLocal = JSON.parse(localStorage.getItem('Remeperfum'));
  
    for(const item of ItemSPerfumariaLocal){
  
      const ItemPerfumaria = document.createElement('div');
      ItemPerfumaria.classList.add("task-item");
  
      const TaferaItem3 = document.createElement('p');
      TaferaItem3.innerText = item.description
  
      if(item.TarefaCompleta3){
  
        TaferaItem3.classList.add("completed");
      }
  
      TaferaItem3.addEventListener("click", () => Finalizado4(TaferaItem3));
  
      const deleteItem4 = document.createElement("i");
      deleteItem4.classList.add("far");
      deleteItem4.classList.add("fa-trash-alt");
      deleteItem4.addEventListener("click", () => DeleteItemPerfumaria(TaferaItem3,ItemPerfumaria))
  
      ItemPerfumaria.appendChild(TaferaItem3);
      ItemPerfumaria.append(deleteItem4);
  
      ListaPerfumaria.appendChild(ItemPerfumaria);
    }
  
  
  }

  atualizarItemPermfumaria();
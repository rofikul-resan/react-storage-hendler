function addToLocalStorage(id , balance){
    let parsonList = [];
    const localData = localStorage.getItem("parson-list");
    if(localData){
        parsonList = JSON.parse(localData);
        const parsonListItem = {id, balance};
        parsonList.push(parsonListItem);
    }else{
        const parsonListItem = {id, balance};
        parsonList.push(parsonListItem);
    }
    localStorage.setItem("parson-list", JSON.stringify(parsonList))
}

function removeFromLocalStorage(id){
    let parsonList = JSON.parse(localStorage.getItem("parson-list"))
    const element = parsonList.find(e => e.id === id);
    const index = parsonList.indexOf(element);
    if (index !== -1){
        parsonList.splice(index, 1); 
    }
    localStorage.setItem("parson-list", JSON.stringify(parsonList))
}

function totalBalance (){

}

export {addToLocalStorage , removeFromLocalStorage as removeItem , totalBalance}
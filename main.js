function checkBlankForm(name, nip, order, qty){

    if(name === ""){
        alert('please fill you name')
        return
    }

    if(nip === ""){
        alert('please fill your NIP')
        return
    }

    if(qty === ""){
        alert('please descibe how much u need the item')
        return
    }

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `YOUR ORDER ${order} ${qty}pcs, WILL ARRIVE IN 2 DAYS`;
    const parent = document.querySelector("body");
    parent.appendChild(newDiv);

}

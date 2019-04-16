const list = document.createElement("ul");
const listItem = document.createElement("li");
listItem.className = "president";
listItem.textContent = "Donald trump";
list.appendChild(listItem)
console.log(list)

        //practice

const dom = document.createElement("article");

const message1 = document.createElement("section")
    message1.className = "message";
    message1.textContent = "  Are we doing fireworks this year?"

    const message2 = document.createElement("section")
    message2.className = "message";
    message2.textContent = " After last year's /'tree incident'/, should we?"
    
    const message3 = document.createElement("section")
    message3.className = "message";
    message3.textContent = " The fire fighters put it out in like a minute. Wasn't even a real fire."

    const message4 = document.createElement("section")
    message4.className = "message";
    message4.textContent = " We can set them off in the street."


    const message5 = document.createElement("section")
    message5.className = "message";
    message5.textContent = "  Our neighbors' houses are flammable, too."

    dom.appendChild(message1)
    dom.appendChild(message2)
    dom.appendChild(message3)
    dom.appendChild(message4)
    dom.appendChild(message5)
    console.log(dom)

    document.querySelector(".container").appendChild(dom);

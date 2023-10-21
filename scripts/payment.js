/* Veg Orders Starts &#8377;*/
let VegFromLS = JSON.parse(localStorage.getItem("OrderVegArray"));
displayVegItems(VegFromLS);

let pricedet = VegFromLS.reduce(function(acc,el){
    return acc + el.price;
},0);
    
document.querySelector("#showTotal").innerText = `₹ ${pricedet}`;

function displayVegItems(res){
    res.forEach(function(el,i){
        let card = document.createElement("div");
        card.setAttribute("id","menuCard");

        let image = document.createElement("img");
        image.setAttribute("id","foodImage");
        image.src = el.img;

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id","imgDiv");
        imgDiv.append(image);


        let name = document.createElement("p");
        name.setAttribute("id","foodName");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.setAttribute("id","foodPrice");
        price.innerText = el.price;

        

        let btn = document.createElement("button");
        btn.setAttribute("id","removeBtn");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(event){
            event.target.parentNode.remove();
            deleteitem(i);
        })

        let description = document.createElement("p");
        description.setAttribute("id","foodDescription");
        description.innerText = el.description;

        let contentDiv = document.createElement("div");
        contentDiv.setAttribute("id","contentDiv");
        contentDiv.append(name,price,description,btn);

        card.append(imgDiv,contentDiv);

        document.querySelector("#vegOrders").append(card);
    });
}

function deleteitem(i){
    VegFromLS.splice(i,1);
    localStorage.setItem("OrderVegArray", JSON.stringify(VegFromLS));
    window.location.reload();
}
/* Veg Orders Ends*/


/* NonVeg Orders Starts*/

/* NonVeg Orders Ends*/


/* Mojito Orders Starts*/

/* Mojito Orders Ends*/
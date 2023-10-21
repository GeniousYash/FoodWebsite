let VegFood = [
    {
        name:"Aloo gobi",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Aloo_gobi.jpg/180px-Aloo_gobi.jpg",
        price: 200,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Aloo matar",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Aloo_Mattar.jpg/180px-Aloo_Mattar.jpg",
        price: 250,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Aloo methi",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Aloo_Methi_%28Aaloo_Methi%29.JPG/180px-Aloo_Methi_%28Aaloo_Methi%29.JPG",
        price: 180,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Dal makhani ",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dal_Makhani.jpg/180px-Dal_Makhani.jpg",
        price: 350,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Dum aloo",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kashmiri_Dum_Aaloo.JPG/180px-Kashmiri_Dum_Aaloo.JPG",
        price: 280,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Gobhi matar",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Aloo_gobi_matar_ki_sabji.jpg/180px-Aloo_gobi_matar_ki_sabji.jpg",
        price: 180,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Kachori",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Cachuri2_flipped.jpg/180px-Cachuri2_flipped.jpg",
        price: 80,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Kadai paneer",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kadai_Paneer_Recipe.JPG/180px-Kadai_Paneer_Recipe.JPG",
        price: 380,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Khichdi",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Khichuri-edit.jpg/180px-Khichuri-edit.jpg",
        price: 130,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Lauki ke kofte",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lauki_ke_Kofte.jpg/180px-Lauki_ke_Kofte.jpg",
        price: 150,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Litti chokha",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Litti_Chokha.jpg/180px-Litti_Chokha.jpg",
        price: 200,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Makki ki roti, sarson ka saag",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Saagroti.jpg/180px-Saagroti.jpg",
        price: 250,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Palak paneer",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Palakpaneer.jpg/180px-Palakpaneer.jpg",
        price:350,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Paneer butter masala",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Popular_Indian_dish%2C_Paneer_Butter_Masala.jpg/180px-Popular_Indian_dish%2C_Paneer_Butter_Masala.jpg",
        price: 400,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Paneer tikka masala",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Paneer_Tikka_masala.JPG/180px-Paneer_Tikka_masala.JPG",
        price: 450,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Rajma chaval",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rajma%2C_kidney_beans%2C_served_with_chawal%2C_rice.jpg/180px-Rajma%2C_kidney_beans%2C_served_with_chawal%2C_rice.jpg",
        price: 300,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Rajwadi Chhena/Paneer",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Shahi_paneer.jpg/180px-Shahi_paneer.jpg",
        price: 300,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Bisi bele bath",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bisi_Bele_Bath.jpg/180px-Bisi_Bele_Bath.jpg",
        price: 450,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        name:"Kanji",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Chinese_rice_congee.jpg/180px-Chinese_rice_congee.jpg",
        price: 250,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

let OrderVeg = JSON.parse(localStorage.getItem("cartArray")) || [];

VegFood.forEach(function(el,i){
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
    price.innerText = "₹"+" "+el.price;


    let btn = document.createElement("button");
    btn.setAttribute("id","btn");
    btn.innerText = "Order Now";
    btn.addEventListener("click",function(){
      displayVegOrders(el);
    })

    let description = document.createElement("p");
    description.setAttribute("id","foodDescription");
    description.innerText = el.description;

    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("id","contentDiv");
    contentDiv.append(name,price,description,btn);

    card.append(imgDiv,contentDiv);
    document.querySelector("#displayVegFood").append(card);
});


function displayVegOrders(el){
    OrderVeg.push(el);
    localStorage.setItem("OrderVegArray",JSON.stringify(OrderVeg));
}
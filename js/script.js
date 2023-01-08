// let body= document.body
// let div= document.createElement("div")
// let div2= document.createElement("h3")
// body.append(div)
// body.append(div2)
// body.append("yes it is")

// div2.setAttribute("style","color:blue;border:2px solid black;background-color:green")
// div2.textContent="Omolara"

// div.remove()
// console.log(body)

// const namex= prompt("enter any name of your choice")
// let hex= document.querySelector(".hex").innerHTML="hello" + " "+ namex
// console.log(hex)

// let get = document.querySelector("h1")
// get.setAttribute("id", "yes")
// get.textContent="yes i have added an id"
// console.log(get)



// let bio = document.querySelector(".bio")
// bio.textContent = "Biography of Lara"

// let img= document.querySelector("#img")
// img.src="image/tech4dev.png"
// img.style.border=5+"px solid black"

// let about = document.querySelector(".about")
// about.textContent = "About myself"

// let writeup = document.querySelector(".writeup")
// writeup.innerHTML = "My name is Lara" + "<br>" + "I am 20 years old" + "<br>" + "I am from Osun state"

// let play = document.querySelector(".play")
// play.style.display="flex"
// play.style.flexDirection="column"
// play.style.justifyContent="center"
// play.style.alignItems="center"




// let body= document.body
// let h1= document.createElement("h1")
// let h2= document.createElement("h2")
// let p= document.createElement("p")
// body.append(h1)
// body.append(h2)
// body.append(p)
// h1.setAttribute("style", "color:black")
// h1.textContent= "Biography of Lara"

// h2.textContent= "About myself"

// p.textContent= "My name is Omolara"

// let img= document.querySelector("#img")
// img.src="image/tech4dev.png"
// img.setAttribute("width", `${300}px`)
// img.setAttribute("width", `${300}px`)



// Assignment correction
// To manipulate a text, you'd either use .textContent, .innerHTML or .innerText but to manipulate text in an input box of a form, you use .value
// An event is used to interact with html which performs a specific action.
// Types of events: click, blur, focus, onmouse-hover, onmouse-up(mouse events)
// Two major events normally used: mouse events and keyboard events: keypress, keyup, keydown
// An event does not just happen on its own, it needs an event handler: addEventLinster()
// Event handler

// it is the default setting of a form to refresh after clickig submit, to stop that, you'd have to add a parameter(function(e)) and then type e.preventDefault()



const users= ["mark", "Ifeoma", "frank"]
const password= [111, 222, 333]

document.querySelector(".table").style.display="none"

document.querySelector("#button").addEventListener("focus",function(e){
    e.preventDefault()
    let username= document.querySelector("#username").value;
    let pass= +document.querySelector("#password").value
    
    if(users.includes(username) && password.includes(pass)){
        document.querySelector(".container").style.display="none"
        // you can replace .style.display with .remove()
        document.querySelector(".table").style.display="block"
    }else{
        document.querySelector(".container").style.display="block"
        document.querySelector(".type").textContent="wrong username or password"
        document.querySelector(".type").style.color="red"
    }
})

document.querySelector("#button").addEventListener("click",function(e){
    e.preventDefault()
})

document.querySelector("#username").addEventListener("focus",function(e){
    e.preventDefault()
    document.querySelector(".type").textContent="user is typing...."
})

document.querySelector("#username").addEventListener("blur",function(e){
    e.preventDefault()
    document.querySelector(".type").textContent=" "
})


let product ={

    ram:{
        sn: document.querySelector(".id").textContent= 1,
        productname: document.querySelector(".productname").textContent = "Ram",
        numberofgoodsbought: document.querySelector(".numberofgoodsbought").textContent=75,
        costprice: document.querySelector(".costprice").textContent=200000,
        sellingprice: document.querySelector(".sellingprice").textContent=400000,
        // newlyboughtgoods: +document.querySelector("#newlyboughtgoods").value,
        // value, instead of textContent is for input content
        // total amount of all goods:,
        // total number of goods sold:,
        // total amount of goods sold:,
        // total number of goods remaining:,
        // total amount of goods remaining:,
        // total number of goods lost:,
        // total amount of goods lost:
    }
}
    document.querySelector("#newlyboughtgoods").addEventListener("blur", function(){

        let newlybought= +document.querySelector("#newlyboughtgoods").value;
        product.ram.newlyboughtgoods=newlybought;

        let collect=product.ram.totalnumberofallgoods=product.ram.numberofgoodsbought + product.ram.newlyboughtgoods
        if(collect){
            document.querySelector(".totalnumberofallgoods").textContent=collect
        }else{
            document.querySelector(".totalnumberofallgoods").textContent=0   
        }

        // total amount of all goods
        document.querySelector(".totalamountofallgoods").textContent=product.ram.sellingprice * product.ram.totalnumberofallgoods
    })


    document.querySelector("#totalnumberofgoodssold").addEventListener("blur", function(){

        soldnum= +document.querySelector("#totalnumberofgoodssold").value;

        soldamount= document.querySelector(".totalamountofgoodssold").textContent= soldnum * product.ram.sellingprice;
    })



    let product2 ={

        cow:{
            sn: document.querySelector(".cow").textContent= 2,
            product2name: document.querySelector(".product2name").textContent = "Cow",
            numberofcowsbought: document.querySelector(".numberofcowsbought").textContent=83,
            costprice: document.querySelector(".cowcostprice").textContent=500000,
            sellingprice: document.querySelector(".cowsellingprice").textContent=800000,
            newlyboughtcows: document.querySelector(".newlyboughtcows").textContent=54,}}
    //         // total amount of all goods:,
    //         // total number of goods sold:,
    //         // total amount of goods sold:,
    //         // total number of goods remaining:,
    //         // total amount of goods remaining:,
    //         // total number of goods lost:,
    //         // total amount of goods lost:
    //     }
    // }
        document.querySelector(".totalnumberofallcows").addEventListener("click", function(){
            let collect2=product2.cow.totalnumberofallcows=product2.cow.numberofcowsbought + product2.cow.newlyboughtcows
            if(collect2){
                document.querySelector(".totalnumberofallcows").textContent=collect2
            }else{
                document.querySelector(".totalnumberofallcows").textContent=0   
            }
    
    //         // total amount of all cows
            document.querySelector(".totalamountofallcows").textContent=product2.cow.sellingprice * product2.cow.totalnumberofallcows
        })
    
    
        document.querySelector("#totalnumberofcowssold").addEventListener("blur", function(){
    
            cowsoldnum= +document.querySelector("#totalnumberofcowssold").value;
    
            cowsoldamount= document.querySelector(".totalamountofcowssold").textContent= cowsoldnum * product2.cow.sellingprice;
        })



    let product3 ={

        chicken:{
            sn: document.querySelector(".chicken").textContent= 3,
            productname: document.querySelector(".product3name").textContent = "Chicken",
            numberofgoodsbought: document.querySelector(".numberofchickenbought").textContent=300,
            costprice: document.querySelector(".chickencostprice").textContent=3000,
            sellingprice: document.querySelector(".chickensellingprice").textContent=6000,
            newlyboughtgoods: document.querySelector(".newlyboughtchicken").textContent=200,
    //         // value, instead of textContent is for input content
    //         // total amount of all goods:,
    //         // total number of goods sold:,
    //         // total amount of goods sold:,
    //         // total number of goods remaining:,
    //         // total amount of goods remaining:,
    //         // total number of goods lost:,
    //         // total amount of goods lost:
        }
    }
        document.querySelector(".totalnumberofallchicken").addEventListener("click", function(){
            let collect3=product3.chicken.totalnumberofallchicken=product3.chicken.numberofgoodsbought + product3.chicken.newlyboughtgoods
            if(collect3){
                document.querySelector(".totalnumberofallchicken").textContent=collect3
            }else{
                document.querySelector(".totalnumberofallchicken").textContent=0   
            }
    
    //         // total amount of all chicken
            document.querySelector(".totalamountofallchicken").textContent=product3.chicken.sellingprice * product3.chicken.totalnumberofallchicken
        })
    
    
        document.querySelector("#totalnumberofchickensold").addEventListener("blur", function(){
            chickensoldnum= +document.querySelector("#totalnumberofchickensold").value;
            chickensoldamount= document.querySelector(".totalamountofchickensold").textContent= chickensoldnum * product3.chicken.sellingprice;
        })
let images= [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL3QSLhEw617d6rd3M9OAVbEORSLBVtrnbA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4QzB48TLJHbwN01lvRM_0IYEtVRDWvqkyQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIsipyaPZkoXX_GvZFagssNCFJpMkxjo_OQ&usqp=CAU"
]

let num= 0
const slider = document.getElementById("slider")

function next(){
    num++
    if(num >=images.length){
        num = 0
    }
    slider.src = images[num]
}

function prev(){
    num--
    if(num < 0){
        num = 2
    }
    slider.src = images[num]
}
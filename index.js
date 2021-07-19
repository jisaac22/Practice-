var btn = document.getElementById('btn')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var medgala = document.getElementById('medgala')
var christmas = document.getElementById('christmas')
var sunFlowers = document.getElementById('sunflowers')
var bday = document.getElementById('birthday')
var backGround = document.getElementById('background')
var link = document.getElementById('link')

btn.addEventListener('click', function next(){
        medgala.classList.add('hide')
        sunFlowers.classList.remove('hide')
        backGround.classList.remove('background')
        backGround.classList.add('sunflowers')
})

btn2.addEventListener('click', function next(){
    sunFlowers.classList.add('hide')
    christmas.classList.remove('hide')
    backGround.classList.remove('sunflowers')
    backGround.classList.add('holy')
})

btn3.addEventListener('click', function next(){
    christmas.classList.add('hide')
    bday.classList.remove('hide')
    backGround.classList.remove('holy')
    backGround.classList.add('thanks')
})

btn4.addEventListener('click', function next(){
    medgala.classList.add('hide')
    sunFlowers.classList.add('hide')
    christmas.classList.add('hide')
    bday.classList.add('hide')
    backGround.classList.remove('thanks')
    link.classList.remove('hide')
})


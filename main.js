const form = document.querySelector('form')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const displayError = document.querySelector('#displayError')
const displayDiv = document.querySelector('#displayDiv')
const displayLengths = document.querySelector('#displayLengths')
const displayKind = document.querySelector('#displayKind')
const displayArea = document.querySelector('#displayArea')
const displayImg = document.querySelector('#displayImg')

form.addEventListener("submit", (evt)=> {
    evt.preventDefault();

    

    let v1 = parseFloat(b1.value);
    let v2 = parseFloat(b2.value);
    let v3 = parseFloat(b3.value);

    
    const arr=[v1,v2,v3]
    const [a,b,c] = arr.sort((a,b)=>a-b)
    console.log(arr)
    console.log(a)
    console.log(b)
    console.log(c)

    displayLengths.innerHTML = "z boków o długości " + a + ", " + b + " i " + c +  " można utworzyć trójkąt: "


    if(a+b > c){
        displayDiv.classList.remove("d-none")
        displayError.classList.add("d-none")
        let p =(a+b+c)/2
        let areaValue = Math.sqrt(p*(p-a)*(p-b)*(p-c))
        console.log(areaValue)

        let aSqr = a**2
        let bSqr = b**2
        let cSqr = c**2

        if(cSqr == aSqr+bSqr){
            displayKind.innerHTML = "Prostokątny"
            displayImg.src = "/img/prosty.jpg"
        }else if(cSqr > aSqr+bSqr){
            displayKind.innerHTML = "Rozwartokątny"
            displayImg.src = "/img/rozwarty.jpg"
        }else{
            displayKind.innerHTML = "Ostrokątny"
            displayImg.src = "/img/ostry.jpg"
        }

        displayLengths.innerHTML = "z boków o długości " + a + ", " + b + " i " + c +  " można utworzyć trójkąt: "
        displayArea.innerHTML = "pole tego trójkąta wynosi " + areaValue

    }else {
        displayDiv.classList.add("d-none")
        displayError.classList.remove("d-none")
        displayError.innerHTML = "Nie da się stworzyc trojkata"
    }

    


})
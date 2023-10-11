// - inizializzo l'array con al suo interno le immagini 
const imagesArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']
// - creo una variabile per richiamare dal DOM il container delle immagini
const figureDOMElement = document.getElementById('carousel-container')
const sideCarouselDOMElement = document.getElementById('side-carousel')
imagesArrayLength = imagesArray.length
for(i = 0; i < imagesArrayLength; i++){
//     - creo un nuovo elemento div
    let newImage = document.createElement('div')
    let newImageSide = document.createElement('div')
//     - al suo interno inserisco il tag img con l'immagine corrispettiva all'iterazione del ciclo for
    newImage.innerHTML = '<img src="./img/' + imagesArray[i] + '" alt=""></img>'
    newImageSide.innerHTML = '<img src="./img/' + imagesArray[i] + '" alt=""></img>'
    newImage.classList.add('hidden', 'carousel-img')
    newImageSide.classList.add('hidden-side', 'side-img')
    if(i == 0){
        newImage.classList.remove('hidden')
        newImageSide.classList.remove('hidden-side')
        newImage.classList.add('active')
        newImageSide.classList.add('active-side')
    }
//     - aggiungo all'interno del container delle immagini l'elemento creato con l'immagine corrispondente
    figureDOMElement.append(newImage)
    sideCarouselDOMElement.append(newImageSide)
}

let currentIndex = 0;

// - creo la variabile per richiamare lo scroll up e lo scroll down dal DOM
const scrollUpDOMElement = document.querySelector('.scroll-up')
const scrollDownDOMElement = document.querySelector('.scroll-down')

//     - inizializzo un array contenente le immagini del carosello del DOM
const imagesDOMArray = document.querySelectorAll('.carousel-img')

//     - inizializzo un array contenente le immagini del carosello laterale del DOM
const sideImagesDOMArray = document.querySelectorAll('.side-img')

scrollUpDOMElement.addEventListener("click", function(){
    imagesDOMArray[currentIndex].classList.add('hidden')
    sideImagesDOMArray[currentIndex].classList.add('hidden-side')
    imagesDOMArray[currentIndex].classList.remove('active')
    sideImagesDOMArray[currentIndex].classList.remove('active-side')
    if(currentIndex == 0){
        currentIndex = imagesArrayLength
    }
    imagesDOMArray[currentIndex - 1].classList.add('active')
    sideImagesDOMArray[currentIndex - 1].classList.add('active-side')
    imagesDOMArray[currentIndex - 1].classList.remove('hidden')
    sideImagesDOMArray[currentIndex - 1].classList.remove('hidden-side')
    currentIndex--
});

scrollDownDOMElement.addEventListener("click", function(){
    imagesDOMArray[currentIndex].classList.add('hidden')
    sideImagesDOMArray[currentIndex].classList.add('hidden-side')
    imagesDOMArray[currentIndex].classList.remove('active')
    sideImagesDOMArray[currentIndex].classList.remove('active-side')
    if(currentIndex == (imagesArrayLength - 1)){
        currentIndex = -1
    }
    imagesDOMArray[currentIndex + 1].classList.add('active')
    sideImagesDOMArray[currentIndex + 1].classList.add('active-side')
    imagesDOMArray[currentIndex + 1].classList.remove('hidden')
    sideImagesDOMArray[currentIndex + 1].classList.remove('hidden-side')
    currentIndex++
});
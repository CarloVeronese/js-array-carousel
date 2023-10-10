// - inizializzo l'array con al suo interno le immagini 
const imagesArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']
// - creo una variabile per richiamare dal DOM il container delle immagini
const figureDOMElement = document.getElementById('carousel-container')
const sideCarouselDOMElement = document.getElementById('side-carousel')
// - calcolo la lunghezza dell'array
imagesArrayLength = imagesArray.length
// - per n volte, dove n è il numero di immagini dentro l'array
for(i = 0; i < imagesArrayLength; i++){
//     - creo un nuovo elemento div
    let newImage = document.createElement('div')
    let newImageSide = document.createElement('div')
//     - al suo interno inserisco il tag img con l'immagine corrisettiva all'iterazione del ciclo for
    newImage.innerHTML = '<img src="./img/' + imagesArray[i] + '" alt=""></img>'
    newImageSide.innerHTML = '<img src="./img/' + imagesArray[i] + '" alt=""></img>'
//     - assegno alla prima immagine la classe active
    if(i == 0){
        newImage.innerHTML += '<div class="index index-active">' + i + '</div>'
        newImage.classList.add('active', 'carousel-img')
        newImageSide.classList.add('active-side', 'side-img')
    }
//     - a tutte le immagini diverse dalla prima assegno la classe hidden 
    if (i > 0){
        newImage.innerHTML += '<div class="index">' + i + '</div>'
        newImage.classList.add('hidden', 'carousel-img')
        newImageSide.classList.add('hidden-side', 'side-img')
    }
//     - aggiungo all'interno del container delle immagini l'elemento creato con l'immagine corrispondente
    figureDOMElement.append(newImage)
    sideCarouselDOMElement.append(newImageSide)
}
// - creo la variabile per richiamare lo scroll up dal DOM
const scrollUpDOMElement = document.querySelector('.scroll-up')
// - aggiungo l'event listener per il click sullo scroll up
scrollUpDOMElement.addEventListener("click", function(){ 
//     - inizializzo un array contenente le immagini del carosello del DOM
    const imagesDOMArray = document.querySelectorAll('.carousel-img')
//     - inizializzo un array contenente le immagini del carosello laterale del DOM
    const sideImagesDOMArray = document.querySelectorAll('.side-img')
//     - inizializzo un array contenente le immagini del carosello del DOM
    const indexDOMArray = document.querySelectorAll('.index')
//     - trovo l'indice dell'immagine attiva
    const activeIndex = parseInt(document.querySelector('.index-active').innerHTML)
//     - assegno all'immagine attiva la classe hidden
    imagesDOMArray[activeIndex].classList.add('hidden')
    sideImagesDOMArray[activeIndex].classList.add('hidden-side')
//     - tolgo all'immagine attiva la classe active
    imagesDOMArray[activeIndex].classList.remove('active')
    sideImagesDOMArray[activeIndex].classList.remove('active-side')
//     - tolgo all'imagine attica l'index-active
    indexDOMArray[activeIndex].classList.remove('index-active')
//     - SE l'immagine attiva è la prima
    if(activeIndex == 0){
//         - assegno all'ultima immagine la classe active
        imagesDOMArray[imagesArrayLength-1].classList.add('active')
        sideImagesDOMArray[imagesArrayLength-1].classList.add('active-side')
//         - tolgo all'ultima immagine la classe hidden
        imagesDOMArray[imagesArrayLength-1].classList.remove('hidden')
        sideImagesDOMArray[imagesArrayLength-1].classList.remove('hidden-side')
//         - assegno all'ultima immagine l'index-active
        indexDOMArray[imagesArrayLength-1].classList.add('index-active')
    }
//     - ALTRIMENTI
//      else{
    else{
//         - assegno all'immagine precedente la classe active
        imagesDOMArray[activeIndex - 1].classList.add('active')
        sideImagesDOMArray[activeIndex - 1].classList.add('active-side')
//         - tolgo all'immagine precedente la classe hidden
        imagesDOMArray[activeIndex - 1].classList.remove('hidden')
        sideImagesDOMArray[activeIndex - 1].classList.remove('hidden-side')
//         - assegno all'immagine precedente l'index-active
        indexDOMArray[activeIndex - 1].classList.add('index-active')
    }
});

// - creo la variabile per richiamare lo scroll down dal DOM
const scrollDownDOMElement = document.querySelector('.scroll-down')
// - aggiungo l'event listener per il click sullo scroll down
scrollDownDOMElement.addEventListener("click", function(){ 
//     - inizializzo un array contenente le immagini del carosello del DOM
    const imagesDOMArray = document.querySelectorAll('.carousel-img')
//     - inizializzo un array contenente le immagini del carosello laterale del DOM
    const sideImagesDOMArray = document.querySelectorAll('.side-img')
//     - inizializzo un array contenente le immagini del carosello del DOM
    const indexDOMArray = document.querySelectorAll('.index')
//     - trovo l'indice dell'immagine attiva
    const activeIndex = parseInt(document.querySelector('.index-active').innerHTML)
//     - assegno all'immagine attiva la classe hidden
    imagesDOMArray[activeIndex].classList.add('hidden')
    sideImagesDOMArray[activeIndex].classList.add('hidden-side')
//     - tolgo all'immagine attiva la classe active
    imagesDOMArray[activeIndex].classList.remove('active')
    sideImagesDOMArray[activeIndex].classList.remove('active-side')
//     - tolgo all'imagine attica l'index-active
    indexDOMArray[activeIndex].classList.remove('index-active')
//     - SE l'immagine attiva è l'ultima
    if(activeIndex == (imagesArrayLength - 1)){
//         - assegno alla prima immagine la classe active
        imagesDOMArray[0].classList.add('active')
        sideImagesDOMArray[0].classList.add('active-side')
//         - tolgo alla prima immagine la classe hidden
        imagesDOMArray[0].classList.remove('hidden')
        sideImagesDOMArray[0].classList.remove('hidden-side')
//         - assegno alla prima immagine l'index-active
        indexDOMArray[0].classList.add('index-active')
    }
//     - ALTRIMENTI
//      else{
    else{
//         - assegno all'immagine successiva la classe active
        imagesDOMArray[activeIndex + 1].classList.add('active')
        sideImagesDOMArray[activeIndex + 1].classList.add('active-side')
//         - tolgo all'immagine successiva la classe hidden
        imagesDOMArray[activeIndex + 1].classList.remove('hidden')
        sideImagesDOMArray[activeIndex + 1].classList.remove('hidden-side')
//         - assegno all'immagine successiva l'index-active
        indexDOMArray[activeIndex + 1].classList.add('index-active')
    }
});
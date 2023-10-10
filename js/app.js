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
        newImage.classList.add('active', 'carousel-img')
        newImageSide.classList.add('active-side', 'side-img')
    }
//     - a tutte le immagini diverse dalla prima assegno la classe hidden 
    if (i > 0){
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
//     - se l'immagine attiva è la prima
    if(imagesDOMArray[0] == document.querySelector('.active')){
//         - assegno alla prima immagine la classe hidden
            imagesDOMArray[0].classList.add('hidden')
//         - tolgo alla prima immagine la classe active
            imagesDOMArray[0].classList.remove('active')
//         - assegno all'ultima immagine la classe active
            imagesDOMArray[imagesArrayLength-1].classList.add('active')
//         - tolgo all'ultima immagine la classe hidden
            imagesDOMArray[imagesArrayLength-1].classList.remove('hidden')

    }
//     - ALTRIMENTI
    else{
//      - eseguo per n volte eseguo la seguente operazione
        for(let i = 0; i < imagesArrayLength; i++){
//      - se l'immagine corrispondente a questa operazione è attiva
            if(imagesDOMArray[i] == document.querySelector('.active')){
//          - assegno all'immagine corrente la classe hidden
                imagesDOMArray[i].classList.add('hidden')
//          - tolgo all'immagine corrente la classe active
                imagesDOMArray[i].classList.remove('active')
//          - assegno all'immagine precedente la classe active
                imagesDOMArray[i - 1].classList.add('active')
//          - tolgo all'immagine precedente la classe hidden
                imagesDOMArray[i - 1].classList.remove('hidden')
            }
        }
    }
});
// - creo la variabile per richiamare lo scroll down dal DOM
const scrollDownDOMElement = document.querySelector('.scroll-down')
// - aggiungo l'event listener per il click sullo scroll down
scrollDownDOMElement.addEventListener("click", function(){ 
//     - inizializzo un array contenente le immagini del carosello del DOM
    const imagesDOMArray = document.querySelectorAll('.carousel-img')
//     - se l'immagine attiva è l'ultima
    if(imagesDOMArray[imagesArrayLength - 1] == document.querySelector('.active')){
//         - assegno all'ultima immagine la classe hidden
            imagesDOMArray[imagesArrayLength - 1].classList.add('hidden')
//         - tolgo all'ultima immagine la classe active
            imagesDOMArray[imagesArrayLength - 1].classList.remove('active')
//         - assegno alla prima immagine la classe active
            imagesDOMArray[0].classList.add('active')
//         - tolgo alla prima immagine la classe hidden
            imagesDOMArray[0].classList.remove('hidden')

    }
//     - ALTRIMENTI
    else{
//      - eseguo per n volte eseguo la seguente operazione
        for(let i = imagesArrayLength - 1; i >= 0; i--){
//      - se l'immagine corrispondente a questa operazione è attiva
            if(imagesDOMArray[i] == document.querySelector('.active')){
//          - assegno all'immagine corrente la classe hidden
                imagesDOMArray[i].classList.add('hidden')
//          - tolgo all'immagine corrente la classe active
                imagesDOMArray[i].classList.remove('active')
//          - tolgo all'immagine successiva la classe hidden
                imagesDOMArray[i+1].classList.remove('hidden')
//          - assegno all'immagine successiva la classe active
                imagesDOMArray[i+1].classList.add('active')
            }
        }
    }
});

const container = document.getElementsByClassName('container')[0]
let temporaryData = dummyApi
const creatingData = () =>{

    temporaryData?.map((d)=>{
        const itemDiv = document.createElement('div')
        itemDiv.setAttribute('class', 'items')

        const imageDiv = document.createElement('div')
        imageDiv.setAttribute('class','img img1')
        const image = document.createElement('img')
        image.setAttribute('src', d['image'])

        const nameDiv=document.createElement('div')
        nameDiv.setAttribute('class', 'name')
        nameDiv.textContent= d['title']

        const priceDiv = document.createElement('div')
        priceDiv.setAttribute('class', 'price')
        priceDiv.textContent = d['price']
        
        const infoDiv = document.createElement('div')
        infoDiv.setAttribute('class', 'info')
        infoDiv.textContent = d['description']

        
        itemDiv.appendChild(imageDiv)
        imageDiv.appendChild(image)
        itemDiv.appendChild(nameDiv)
        itemDiv.appendChild(priceDiv)
        itemDiv.appendChild(infoDiv)
        container.appendChild(itemDiv)
    })
}
creatingData()


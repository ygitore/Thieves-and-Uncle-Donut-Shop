const Donut = (donutObject) => {
    return `
        <ul class = "single-donut">
            <div class="donut-name">${donutObject.name}</div>
            <ul>
                <li class = "donat glaze">${donutObject.glaze}</li>
                <li class = "donat type>${donutObject.type}</li>
                <li class = "donat flavor">${donutObject.flavor}</li>
                <li class = "donat topping">${donutObject.topping}</li>            
            </ul>
        </ul>
    `
} 

export default Donut
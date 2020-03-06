import {useDonuts} from './DonutDataProvider.js'
import Donut from './Donut.js'

const contentTarget = document.querySelector('.donut-container')
const donutList = () => {
    const donuts = useDonuts()
    for (const donutObject of donuts) {
        contentTarget.innerHTML += Donut(donutObject)
    }
}
export default donutList
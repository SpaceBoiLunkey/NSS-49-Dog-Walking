import { getWalkers, getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,cityId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(cityId)) {

                    let assignedCity = cities.find(city => city.id === walker.cityId)
                    window.alert(`${walker.name} services ${assignedCity.name}`)
                }
            }
        }
    }
)


const walkers = getWalkers()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    }

    walkerHTML += "</ul>"

    return walkerHTML
}


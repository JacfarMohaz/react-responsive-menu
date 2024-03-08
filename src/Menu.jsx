import { useState } from "react"

function Menu(){

    const [isOpen, setIsOpen] = useState(false)

    const hanldIsOpen = () => {
        setIsOpen(true)
    }
    const handlIsClose = () => {
        setIsOpen(false)
    }

    return <div className="text-white px-5 py-6 bg-gray-500 flex justify-between">
        <h1 className="text-5xl font-bold">Nooty</h1>

        <i style={{display: isOpen === true ? "none" : ""}} onClick={hanldIsOpen} class="fa-solid fa-bars absolute right-2 text-5xl sm:hidden"></i>
        <i style={{display: isOpen === true ? "block" : ""}} onClick={handlIsClose}  class="fa-solid fa-xmark absolute right-2 text-5xl hidden"></i>

        <ul style={{display: isOpen === true ? "block" : ""}} className="sm:flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 space-x-0 mt-16 sm:mt-0 sm:mr-0 mr-10 text-4xl hidden">
            <li className="hover:bg-gray-400 hover:rounded-lg cursor-pointer">Home</li>
            <li className="hover:bg-gray-400 hover:rounded-lg cursor-pointer">About</li>
            <li className="hover:bg-gray-400 hover:rounded-lg cursor-pointer">Service</li>
            <li className="hover:bg-gray-400 hover:rounded-lg cursor-pointer">Pricing</li>
        </ul>
    </div>
}

export default Menu
import React, { useEffect, useState } from 'react'


const Menu = ({ data, name }) => {

    const [menuSelected, setmenuSelected] = useState([])

    useEffect(() => {
        setmenuSelected(data)
    })


    let titre = name
    name = menuSelected.map((menu) => {

        let prix;

        if (typeof menu.priceBottle !== 'undefined') {
            prix = "/ " + menu.priceBottle + " €"
        }

        return (
            <div className="py-12 cardMenu">
                <h3>{menu.name}</h3>
                <div className="menu-text py-6">
                    <p>{menu.description}</p>
                    <p className="menu-text-price py-4"> {menu.price} € {prix}</p>
                </div>
                <hr />
            </div>
        )
    })

    return (
        <div>
            <h1 className={name == "" ? "displayNone" : "titleCardMenu"}>{`Nos ${titre}s`}</h1>
            {name}
        </div>
    )
}

export default Menu

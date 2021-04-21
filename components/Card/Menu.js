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
            <div key={menu._id} className="py-6 cardMenu">
                <h2>{menu.name}</h2>
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
            <h2 className={name == "" ? "displayNone" : "titleCardMenu py-4"}>{`Nos ${titre}s`}</h2>
            {name}
        </div>
    )
}

export default Menu

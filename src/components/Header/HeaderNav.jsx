import HeaderNavLink from "./HeaderNavLink"

export default function HeaderNav({burgerMenu,setBurgerMenu}) {

    const links = [
        {
            title:"El Hotel",
            to:"/"
        },
        {
            title:"Sobre Nosotros",
            to:"/sobre-nosotros"
        },
        {
            title:"Contacto",
            to:"/contacto"
        }
    ]



    return (

        <ul className='bg-white nav nav-underline container-fluid justify-content-between flex-column flex-lg-row md-col-12 p-0 ps-lg-6' >
            {links.map((link, key) => {
                return(
                    <HeaderNavLink
                        index={key} key={key}
                        link={link} links={links}
                        burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}
                    />
                )})}
        </ul>
    )
}
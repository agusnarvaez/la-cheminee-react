//* React Router Dom para la navegación
import { NavLink } from 'react-router-dom'
import {scrollToTop} from "../../utils/headerUtils"

export default function HeaderNavLink({link}) {

    //* Función para scrollear hacia arriba cada vez que se toca un enlace

    var liClass = 'nav-item py-2'

    var linkClass = 'nav-link texto-verde-la-cheminee fs-1rem l-p-3'
    return (
        <>
            <li className={liClass}>
                <NavLink
                    onClick={scrollToTop}
                    className={({ isActive }) => (isActive ? linkClass+" active" : linkClass)}
                    to={link.to}
                    title={link.title}
                    exact="true"
                >
                    {link.title}
                </NavLink>
            </li>
        </>
    )
}
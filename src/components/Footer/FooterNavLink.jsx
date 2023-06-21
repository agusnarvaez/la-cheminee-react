//* React Router Dom para la navegación
import { NavLink } from 'react-router-dom'
import {scrollToTop} from "../../utils/headerUtils";

export default function HeaderNavLink({link}) {

    //* Función para scrollear hacia arriba cada vez que se toca un enlace

    var liClass = 'nav-item col-12 py-1'

    var linkClass = 'nav-link text-white p-0 fs-6 l-p-3'
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
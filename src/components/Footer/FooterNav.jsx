import FooterNavlink from "./FooterNavLink"

export default function HeaderNav({links}) {

    return (

            <ul className='nav nav-underline max-height-300 container-fluid d-flex justify-content-between flex-column justify-content-lg-start md-col-12 p-0 ps-lg-6' >
                {links.map((link, key) => {
                    return(
                        <FooterNavlink
                            index={key} key={key}
                            link={link} links={links}
                        />
                    )})}
            </ul>

    )
}
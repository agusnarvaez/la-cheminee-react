import FooterNavlink from "./FooterNavLink";

export default function HeaderNav({links}) {

    return (

            <ul className='nav nav-underline container-fluid justify-content-between flex-column flex-lg-row md-col-12 p-0 ps-lg-6' >
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
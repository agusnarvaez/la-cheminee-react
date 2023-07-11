
//* REACT-HELMET
import { Helmet,HelmetProvider } from 'react-helmet-async'
import laChemineeBanner from '../assets/backgrounds/banner-home.jpg'
export default function HelmetData({metaData}) {

return (
    <HelmetProvider>
    <Helmet defer={false}>
        <title>La Cheminée | {metaData.title}</title>

        <meta property="title" content={`Quintas del Oeste | ${metaData.title}`}/>
        <meta property="og:title" content={`Quintas del Oeste | ${metaData.title}`}/>

        <meta name="keywords" content={metaData.keywords} />

        <meta property="image" content={laChemineeBanner}/>
        <meta property="og:image" content={laChemineeBanner}/>
        <meta property="twitter:image" content={laChemineeBanner}/>

        <meta name="description" content={metaData.description} />
        <meta property="og:description" content={metaData.description}/>

        <link rel="canonical" href={metaData.cannonical}/>
    </Helmet>
    </HelmetProvider>
)
}
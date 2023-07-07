
//* REACT-HELMET
import { Helmet,HelmetProvider } from 'react-helmet-async'

export default function HelmetData({metaData}) {

return (
    <HelmetProvider>
    <Helmet defer={false}>
        <title>La Cheminée | {metaData.title}</title>

        <meta property="title" content={`Quintas del Oeste | ${metaData.title}`}/>
        <meta property="og:title" content={`Quintas del Oeste | ${metaData.title}`}/>

        <meta name="keywords" content={metaData.keywords} />

        <meta name="description" content={metaData.description} />
        <meta property="og:description" content={metaData.description}/>

        <link rel="canonical" href={metaData.cannonical}/>
    </Helmet>
    </HelmetProvider>
)
}
import GoogleMapReact from 'google-map-react'

import credentials from '../../../credentials'
const Marker = () => <div className='position-relative' > <div className='bi bi-geo-alt-fill fs-1 position-absolute bottom-0'></div></div>


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -40.15682020633727,
      lng: -71.35413613774693
    },
    zoom: 15
  }

  const marker = {
    lat: -40.156839946389365,
      lng: -71.35414109111687
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%', padding:'0' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: credentials.mapsKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={marker.lat}
          lng={marker.lng}
        />
      </GoogleMapReact>
    </div>
  )
}
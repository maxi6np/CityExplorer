import { Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import Marcador from "../../images/marker-icon-blue.png";
import { Icon } from "leaflet";

const iconoMarcador = new Icon({ iconUrl: Marcador });

function MarkersBuscar({ ciudadesBuscadas }) {
    const map = useMap();

    return (
        ciudadesBuscadas.map(ciudad =>
            <Marker
                key={ciudad.nombre}
                icon={iconoMarcador}
                position={[ciudad.latitud + 0.07, ciudad.longitud - 0.04]}
                eventHandlers={{
                    click: () => {
                        map.setView([ciudad.latitud, ciudad.longitud]);
                    },
                    mouseover: (e) => {
                        e.target.openPopup();
                    },
                }}
            >
                <Popup>
                    <Link to={`/buscar/${ciudad.nombre}/lugares`} style={{ textDecoration: 'none' }}>
                        Ver ciudad
                    </Link>
                </Popup>
            </Marker>
        )
    );
}

export default MarkersBuscar;

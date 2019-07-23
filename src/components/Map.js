import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import styled, { keyframes } from 'styled-components';

const MapStyled = styled.div`
  position: fixed;
  width: 50%;
  height: calc(100% - 30px);
  right: 0px;
  top: 30px;
`;

const bounce = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -20px, 0);
  }
`;

const MarkerHover = styled(Marker)`
  img {
    animation: ${bounce} 0.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    z-index: 150;
    position: absolute;
  }
`;

const Map = ({ selectedOffer, hoveredOffer, filteredOffers, offers }) => {
  const renderSelectedMarker = () => {
    const offer = selectedOffer;
    return (
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcilKurUsSfifBCMEZs7Cjj2MtbMaR1Xk' }}
          center={{ lat: offer.latitude, lng: offer.longitude }}
          zoom={10}
        >
          <MarkerHover
            offer={offer}
            lat={offer.latitude}
            lng={offer.longitude}
            iconUrl={greenIconUrl}
          />
        </GoogleMapReact>
      </MapStyled>
    );
  };

  const renderFilteredMarkers = () => {
    return filteredOffers.map(offer => {
      return (
        <Marker
          offer={offer}
          lat={offer.latitude}
          lng={offer.longitude}
          className={hoveredOffer === offer.id ? 'marker-hover' : null}
          iconUrl={hoveredOffer === offer.id ? greenIconUrl : redIconUrl}
        />
      );
    });
  };

  const renderMainMap = () => {
    return (
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcilKurUsSfifBCMEZs7Cjj2MtbMaR1Xk' }}
          center={{ lat: 51.76, lng: 19.46 }}
          zoom={6}
        >
          {renderFilteredMarkers()}
        </GoogleMapReact>
      </MapStyled>
    );
  };

  const renderMap = () => {
    if (offers.length !== 0 && selectedOffer === null) {
      return renderMainMap();
    } else if (selectedOffer !== null) {
      return renderSelectedMarker();
    } else {
      return <div>Loading...</div>;
    }
  };

  const redIconUrl =
    'https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png';
  const greenIconUrl =
    'https://www.trzcacak.rs/myfile/full/123-1233557_google-map-marker-green-peg-green-google-map.png';

  return renderMap();
};

const mapStateToProps = state => {
  return {
    offers: state.offers,
    hoveredOffer: state.hoveredOffer,
    selectedOffer: state.selectedOffer,
    filteredOffers: state.offers.filter(
      offer =>
        offer.marker_icon === state.filters.technology ||
        state.filters.technology === 'all'
    )
  };
};

export default connect(
  mapStateToProps,
  null
)(Map);

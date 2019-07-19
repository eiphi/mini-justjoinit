import React, { Component } from 'react';
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

class Map extends Component {
  redIconUrl =
    'https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png';
  greenIconUrl =
    'https://www.trzcacak.rs/myfile/full/123-1233557_google-map-marker-green-peg-green-google-map.png';

  renderSelectedMarker() {
    const offer = this.props.selectedOffer;
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
            iconUrl={this.greenIconUrl}
          />
        </GoogleMapReact>
      </MapStyled>
    );
  }

  renderMainMap() {
    return (
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcilKurUsSfifBCMEZs7Cjj2MtbMaR1Xk' }}
          center={{ lat: 51.76, lng: 19.46 }}
          zoom={6}
        >
          {this.renderFilteredMarkers()}
        </GoogleMapReact>
      </MapStyled>
    );
  }

  renderFilteredMarkers() {
    return this.props.filteredOffers.map(offer => {
      return (
        <Marker
          offer={offer}
          lat={offer.latitude}
          lng={offer.longitude}
          className={
            this.props.hoveredOffer === offer.id ? 'marker-hover' : null
          }
          iconUrl={
            this.props.hoveredOffer === offer.id
              ? this.greenIconUrl
              : this.redIconUrl
          }
        />
      );
    });
  }

  renderMap() {
    if (this.props.offers.length !== 0 && this.props.selectedOffer === null) {
      return this.renderMainMap();
    } else if (this.props.selectedOffer !== null) {
      return this.renderSelectedMarker();
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return this.renderMap();
  }
}

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

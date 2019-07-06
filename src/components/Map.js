import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends Component {
  setMapDefaults() {
    this.mapPosition = {
      lat: 51.76,
      lng: 19.46
    };
    this.mapZoom = 6;
  }

  renderSelectedMarker() {
    const offer = this.props.selectedOffer;
    this.mapPosition = { lat: offer.latitude, lng: offer.longitude };
    this.mapZoom = 10;
    return (
      <Marker
        offer={offer}
        lat={offer.latitude}
        lng={offer.longitude}
        text={offer.title}
      />
    );
  }

  renderFilteredMarkers() {
    const redIconUrl =
      'https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png';
    const greenIconUrl =
      'https://www.trzcacak.rs/myfile/full/123-1233557_google-map-marker-green-peg-green-google-map.png';
    return this.props.filteredOffers.map(offer => {
      return (
        <Marker
          offer={offer}
          lat={offer.latitude}
          lng={offer.longitude}
          text={offer.title}
          className={
            this.props.hoveredOffer === offer.id ? 'marker-hover' : 'marker'
          }
          iconUrl={this.props.hoveredOffer === offer.id ? greenIconUrl : redIconUrl}
        />
      );
    });
  }

  renderMarkers() {
    if (this.props.offers.length !== 0 && this.props.selectedOffer === null) {
      return this.renderFilteredMarkers();
    } else if (this.props.selectedOffer !== null) {
      return this.renderSelectedMarker();
    } else {
      return <div>Loading...</div>;
    }
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcilKurUsSfifBCMEZs7Cjj2MtbMaR1Xk' }}
          center={this.mapPosition}
          zoom={this.mapZoom}
        >
          {this.setMapDefaults()}
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
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

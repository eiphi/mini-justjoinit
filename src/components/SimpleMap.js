import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const Marker = () => {
  return <img alt="marker" style={{height: 30}} src="https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png" />
};

class SimpleMap extends Component {
  renderMarkers() {
    if (this.props.offers.length !== 0) {
      return this.props.offers.map(offer => {
        if (
          offer.marker_icon === this.props.selectedTechnology ||
          this.props.selectedTechnology === 'all'
        ) {
          return (
            <Marker
              lat={offer.latitude}
              lng={offer.longitude}
              text={offer.title}
            />
          );
        }
        return null;
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  static defaultProps = {
    center: {
      lat: 51.76,
      lng: 19.46
    },
    zoom: 6
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcilKurUsSfifBCMEZs7Cjj2MtbMaR1Xk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTechnology: state.filters.technology,
    offers: state.offers
  };
};

export default connect(
  mapStateToProps,
  null
)(SimpleMap);

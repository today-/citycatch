/// <reference types="@types/googlemaps"/>

const HIDDEN_STYLERS = [{visibility: 'off'}];

export const MINIMAL_STYLES: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels',
    stylers: HIDDEN_STYLERS
  },
  {
    elementType: 'labels',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'road.arterial',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'road.local',
    stylers: HIDDEN_STYLERS
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#dff0fe'}]
  }
];

export const MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: true,
  streetViewControl: false,
  styles: MINIMAL_STYLES
};

export const POLYLINE_OPTIONS: google.maps.PolylineOptions = {
  geodesic: true,
  strokeColor: '#673ab7',
  strokeOpacity: 0.5,
  strokeWeight: 3,
  icons: [{
    icon: {path: 1},
    offset: '100%'
  }],
};

const mapElement = document.querySelector('#mapContainer');

let platform;
let defaultLayers;
let map;

async function initializeMap() {
  platform = await AhoyMapView.service().Platform(SUBSCRIPTION_KEY);
  defaultLayers = platform.createDefaultLayers();
  map = AhoyMapView.Map(mapElement, defaultLayers.vector.normal.map, {
    zoom: 4,
    center: {
      lat: 34,
      lng: 41,
    },
  });

  // default interactions for pan/zoom
  const mapEvents = AhoyMapView.mapevents().MapEvents(map);
  const behavior = AhoyMapView.mapevents().Behavior(mapEvents);

  // Create the default UI components
  const ui = AhoyMapView.ui().UI.createDefault(map, defaultLayers);
}

initializeMap();

import { initNav } from './nav.js';
import { initTracking } from './tracking.js';
import { initMap } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTracking();
  initMap();
});

import type * as L from "leaflet"

declare module "leaflet" {
  export interface LeafletMouseEvent {
    latlng: L.LatLng
    layerPoint: L.Point
    containerPoint: L.Point
    originalEvent: MouseEvent
  }
}

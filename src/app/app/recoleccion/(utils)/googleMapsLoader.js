import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: 'AIzaSyDrghSI61XzUZ_UM6ReF-N3iUmTZqGwe1M',
  version: 'weekly',
  libraries: ['places'],
})

export default loader
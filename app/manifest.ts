import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yener Aras - Milli Sporcu',
    short_name: 'Yener Aras',
    description: 'Milli sporcu Yener Aras\'ın ilham veren hikayesi ve 2028 Los Angeles Paralimpik Oyunları hedefi',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/header-image.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}

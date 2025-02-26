
import { MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { ImageSlideshow } from "./ui/image-slideshow";


const attractions = [
  {
    title: "City Center",
    distance: "0.5 km",
    description: "Historic downtown area with shopping and dining",
    images: [
      "/src/images/attractions/citycentre1.webp",
      "/src/images/attractions/citycentre2.webp",
      "/src/images/attractions/citycentre3.jpg",
      "/src/images/attractions/citycentre4.jpeg"
    ],
  },
  {
    title: "Cultural Museum",
    distance: "1.2 km",
    description: "World-class exhibits and artifacts",
    images: [
      "/src/images/attractions/museum1.webp",
      "/src/images/attractions/museum2.jpg",
      "/src/images/attractions/museum3.jpg",
      "/src/images/attractions/museum4.jpg"
    ],
  },
  {
    title: "Central Park",
    distance: "0.8 km",
    description: "Beautiful green space with walking trails",
    images: [
      "/src/images/attractions/central_park1.jpg",
      "/src/images/attractions/central_park2.jpg",
      "/src/images/attractions/central_park3.jpg",
    ],
  },
  {
    title: "Siam Paragon",
    distance: "2.0 km",
    description: "Luxury shopping mall in Bangkok with designer brands, dining, and entertainment.",
    images: [
      "/src/images/attractions/siam1.jpg",
      "/src/images/attractions/siam2.jpg",
      "/src/images/attractions/siam3.jpg",
    ],
  }
]

const NearbyAttractionsSection = () => {
  return (
    <section id="attractions" className="px-4 py-10 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Nearby Attractions</h2>
          <p className="text-muted-foreground">Explore the best of what our location has to offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {attractions.map((attractions, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <ImageSlideshow
                            images={attractions.images}
                            title={attractions.title}
                            className="w-full h-full"
                          />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl mb-2">{attractions.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          Distance : {attractions.distance}
                        </p>
                        <p className="text-sm text-gray-600">
                          {attractions.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                
        </div>
      </div>
    </section>
  )
}

export default NearbyAttractionsSection
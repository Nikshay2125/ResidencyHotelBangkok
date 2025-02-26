
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ImageSlideshow } from "./ui/image-slideshow";
import { longFormatters } from "date-fns";



const rooms = [
  {
    title: "Double Bed Room",
    description: "Spacious room with cozy ambiance and modern facilities",
    images: [
      "/src/images/rooms/doubleroom1.jpg",
      "/src/images/rooms/doubleroom2.jpg",
      "/src/images/rooms/doubleroom3.jpg"
    ],
    amenities: ["King Bed", "Smart TV", "Free WiFi", "Mini Bar"],
    price: "1300 THB per night",
    slug: "double-bedroom",
  },
  {
    title: "Twin Bedroom",
    description: "Comfortable room with two single beds and essential amenities",
    images: [
      "/src/images/rooms/twinroom1.jpg",
      "/src/images/rooms/twinroom2.jpg",
      "/src/images/rooms/twinroom3.jpg"
    ],
    amenities: ["Two Single Beds", "Work Desk", "Free WiFi", "Room Service"],
    price: "1250 THB per night",
    slug: "twin-bedroom",
  },
  {
    title: "Family Room",
    description: "Spacious room ideal for families with multiple beds and comfort",
    images: [
      "/src/images/rooms/familyroom1.jpg",
      "/src/images/rooms/familyroom2.jpg",
      "/src/images/rooms/familyroom3.jpg"
    ],
    amenities: ["Multiple Beds", "Sofa Seating", "Free WiFi", "Mini Fridge"],
    price: "1500 THB per night",
    slug: "family-bedroom",
  },
];

const RoomsSection = () => {
  return (
    <section className="px-4" id="rooms">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Luxury Accommodations</h2>
          <p className="text-muted-foreground font-sans">
          Discover our beautifully designed rooms, crafted for your ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <Link to={`/rooms/${room.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <ImageSlideshow
                      images={room.images}
                      title={room.title}
                      className="w-full h-full"
                    />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{room.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {room.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {amenity}
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl text-lg mb-4">{room.price}</p>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                    View Details
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
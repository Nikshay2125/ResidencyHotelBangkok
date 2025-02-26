import { useParams } from "react-router-dom";
import { ImageSlideshow } from "@/components/ui/image-slideshow";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

// Room data
const rooms = {
  "double-bedroom": {
    title: "Double Bed Room",
    longDescription: `Perfect for duos who like to stick together! Our Double Bedroom features one comfy double bed, ideal for couples, besties, or anyone who just loves to hog the blankets. Cozy up, stretch out, and enjoy the perfect blend of closeness and comfort—just try not to fight over who gets the bigger pillow!`,
    images: [
      "/src/images/rooms/doubleroom1.jpg",
      "/src/images/rooms/doubleroom2.jpg",
      "/src/images/rooms/doubleroom3.jpg"
    ],
    amenities: [
      "King Bed",
      "Locker",
      "Free WiFi",
      "Mini Fridge",
      "Smart TV"
    ],
    price: "1300 THB per night",
  },
  "twin-bedroom": {
    title: "Twin Bed Room",
    longDescription: `Need some space but don’t want to be too far apart? Our Twin Bedroom gives you the best of both worlds—two separate beds for peaceful snoozing, but close enough to gossip all night. Perfect for siblings, friends, or anyone who loves a little “me” time without total isolation.`,
    images: [
      "/src/images/rooms/twinroom1.jpg",
      "/src/images/rooms/twinroom2.jpg",
      "/src/images/rooms/twinroom3.jpg"
    ],
    amenities: [
      "Two Single Bed",
      "Locker",
      "Free WiFi",
      "Mini Fridge",
      "Smart TV"
    ],
    price: "1250 THB per night",
  },
  "family-bedroom": {
    title: "Family Bed Room",
    longDescription: `Bringing the whole crew? Our Family Room’s got you covered! One cozy double bed for the grown-ups and a single bed for the little one (or that friend who snores). It’s comfy, spacious, and the perfect setup for those memorable “who kicked who in their sleep” debates. Plus, plenty of room for fun, laughter, and unforgettable memories!`,
    images: [
      "/src/images/rooms/familyroom1.jpg",
      "/src/images/rooms/familyroom2.jpg",
      "/src/images/rooms/familyroom3.jpg"
    ],
    amenities: [
      "King Bed",
      "City View",
      "Free WiFi",
      "Mini Fridge",
      "Smart TV"
    ],
    price: "1500 THB per night",
  }
};

const RoomDetail = () => {
  const { roomId } = useParams();
  const room = rooms[roomId as keyof typeof rooms];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!room) {
    return <div className="p-8">Room not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="mb-8">
        <Navbar />
      </div>

      <main className="flex-grow mb-auto pb-0">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif mb-8">{room.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-justify">{room.longDescription}</p>

              <div>
                <h2 className="text-2xl font-serif">Amenities</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <span className="text-muted-foreground">• {amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-2xl mb-4">{room.price}</p>
                <Button size="lg" className="w-full bg-gold hover:bg-gold-dark">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Right side - Single Image Slideshow */}
            <div className="h-[200px] md:h-[400px] w-60%">
              <ImageSlideshow 
                images={room.images} 
                title={room.title}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDetail;

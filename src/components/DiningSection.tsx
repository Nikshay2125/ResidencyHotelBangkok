
import { Card } from "./ui/card";
import { ImageSlideshow } from "./ui/image-slideshow";


const restaurants = [
  {
    name: "Swaad Mahal",
    cuisine: "Indian Speciality Restaurant",
    description: "A journey through India’s rich culinary heritage, featuring authentic flavors, age-old recipes, and timeless traditions.",
    images: [
      "/src/images/food/indian_cuisine1.jpg",
      "/src/images/food/indian_cuisine2.jpg",
      "/src/images/food/indian_cuisine3.jpg",
    ],
    t3ming: "07:30 AM - 10:30 PM",
    specialty: "Dosa, Biryani,Dal Makhani, Butter Chicken, Paneer Tikka",
    slug: "SwaadMahal",
  },
  {
    name: "Mandarin Magic",
    cuisine: "All-Day Dining",
    description: "Discover the rich flavors of China with authentic dishes crafted with tradition and passion for an unforgettable dining experience.",
    images: [
      "/src/images/food/mandrin_magic1.jpg",
      "/src/images/food/mandrin_magic2.jpg",
      "/src/images/food/mandrin_magic3.jpg",
    ],
    timing: "07:30 AM - 10:30 PM",
    specialty: "Chilly Potato, Veg Noodles, Fried Rice, Fish Fry",
    slug: "MandarinMagic",
  },
  {
    name: "Drink Dock",
    cuisine: "Exquisite Bar Counter",
    description: "A vibrant spot to unwind, featuring expertly crafted cocktails, premium spirits, and a lively atmosphere.",
    images: [
      "/src/images/food/drink_dock1.jpg",
      "/src/images/food/drink_dock2.jpg",
      "/src/images/food/drink_dock3.jpg",
    ],
    timing: "07:30 AM - 10:30 PM",
    specialty: "Pad Thai, Green Curry, Tom Yum, Som Tam, Satay",
    slug: "DrinkDock",
  },
];

const DiningSection = () => {
  return (
    <section id="dining" className="py-10 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Fine Dining</h2>
          <p className="text-muted-foreground font-sans">
            Embark on a culinary journey through our exceptional restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <ImageSlideshow
                  images={restaurant.images}
                  title={restaurant.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{restaurant.name}</h3>
                <p className="text-gold font-sans text-sm mb-2">{restaurant.cuisine}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {restaurant.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Hours:</span> {restaurant.timing}</p>
                  <p><span className="font-semibold">Specialty:</span> {restaurant.specialty}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;

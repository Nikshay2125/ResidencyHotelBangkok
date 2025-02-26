
import { Card } from "./ui/card";
import { ImageSlideshow } from "./ui/image-slideshow";

const experiences = [
  {
    title: "Wellness Spa",
    description: "Rejuvenate your senses with our signature spa treatments",
    images: [
      "/src/images/experiences/spa1.jpg",
      "/src/images/experiences/spa2.jpg",
      "/src/images/experiences/spa3.webp",
    ],
    details: "Experience traditional and modern therapies in our luxury spa",
  },
  {
    title: "Chaophraya Cruise Dinner",
    description: "Enjoy a delightful dinner on the Chaophraya Cruise in Thailand.",
    images: [
      "/src/images/experiences/chaophraya_cruise_dinner1.webp",
      "/src/images/experiences/chaophraya_cruise_dinner2.webp",
      "/src/images/experiences/chaophraya_cruise_dinner3.webp",
      "/src/images/experiences/chaophraya_cruise_dinner4.webp",
    ],
    details: "Enjoy a delicious dinner with stunning river views and live entertainment.",
  },
  {
    title: "Safari World",
    description: "Enjoy an exciting day at Safari World in Thailand.",
    images: [
      "/src/images/experiences/safari_world1.jpg",
      "/src/images/experiences/safari_world2.jpeg",
      "/src/images/experiences/safari_world3.webp",
      "/src/images/experiences/safari_world4.webp",
    ],
    details: "Explore wildlife exhibits and thrilling shows for a fun-filled adventure.",
  },
  {
    title: "Iconsiam Ocean World",
    description: "Dive into adventure at Iconsiam Ocean World.",
    images: [
      "/src/images/experiences/iconsiam_ocean_world1.jpg",
      "/src/images/experiences/iconsiam_ocean_world2.jpg",
      "/src/images/experiences/iconsiam_ocean_world3.jpg",
    ],
    details: "Discover mesmerizing marine life and interactive exhibits for an unforgettable experience.",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Hotel Experiences</h2>
          <p className="text-muted-foreground font-sans">
            Discover exceptional experiences during your stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experiences, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageSlideshow
                    images={experiences.images}
                    title={experiences.title}
                    className="w-full h-full"
                  />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{experiences.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {experiences.description}
                </p>
                <p className="text-sm text-gray-600">
                  {experiences.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

import { Building } from "lucide-react"

const AboutUsSection = () => {
  return (
    <section id="aboutus" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">About Us</h2>
          <div className="flex justify-center mb-6">
            <Building className="text-gold h-8 w-8" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground text-justify">
              Located in the heart of Bangkok, our hotel is just steps away from top shopping spots like CentralWorld, Siam Paragon, MBK Center, and Pratunam Market, ensuring you’re always close to the best attractions.
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              As the owner, I am driven by a passion to provide you with the best experience. Backed by a dedicated team, we are here to assist you with everything you need. Coming from India, I believe in the cultural value of “Atithi Devo Bhava,” meaning “The guest is God.” This inspires us to treat every guest with genuine warmth, respect, and care. Indulge in authentic Indian flavors at our on-site restaurant, Rasoi Indian Kitchen, known for its delightful culinary offerings.
            </p>
            <p className="text-lg text-muted-foreground text-justify">
              At Residency Hotel Bangkok, we offer more than just accommodation – we offer an experience filled with comfort and heartfelt hospitality. Your home away from home awaits!
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Hotel exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

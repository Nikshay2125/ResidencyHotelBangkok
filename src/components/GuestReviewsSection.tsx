import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    name: "Krishan Sharma",
    rating: 5,
    comment:
      "Residency Hotel Bangkok is an excellent new addition to the city! The hotel offers a warm and welcoming atmosphere with a modern and well-maintained design. The staff are incredibly attentive and go out of their way to ensure a great experience. The restaurant is equally impressive, with a wide variety of delicious dishes, including excellent vegetarian options that are flavorful and thoughtfully prepared. The combination of exceptional service, great food, and a comfortable ambiance makes it a must-visit spot in Bangkok. Highly recommended for anyone seeking quality and care in every detail!",
    date: "January 2025",
  },
  {
    name: "Jalam Rana",
    rating: 5,
    comment:
      "The female receptionist upon arrival was very helpful. She let me choose between two rooms. She also did spend a lot of effort to make it work. The room was quite nice with a nice view. Unfortunately, the lock did not work, so that my stuff was in danger of being stolen. It is close to RCA street, with many bars, just take the bus.",
    date: "February 2024",
  },
  {
    name: "Perwinder Singh",
    rating: 5,
    comment:
      "Residency Hotel is a home away from home. The attention to detail and warm hospitality made my business trip stress-free.",
    date: "January 2024",
  },
];

const GuestReviewsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="reviews" className="py-10 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Guest Reviews</h2>
          <p className="text-muted-foreground">What our guests say about their stay</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-justify text-muted-foreground mb-4">
                  {expandedIndex === index
                    ? review.comment
                    : `${review.comment.split(" ").slice(0, 20).join(" ")}...`}
                  <span
                    className="text-gold cursor-pointer ml-2"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedIndex === index ? "Show less" : "Read more"}
                  </span>
                </p>
                <div className="border-t pt-4">
                  <p className="font-serif text-lg">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/travel/search?q=residency%20hotel%20bangkok&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825295%2C72827241%2C72832976%2C72860863%2C72882230%2C72885031&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzBlMjllYzZiNzY4NDA0ZDoweGQyYjJkMjNmZWI0NGQ4ODcSGhIUCgcI6Q8QAxgWEgcI6Q8QAxgXGAEyAhAA&qs=CAEyFENnc0loN0dUMnY3SHROblNBUkFCOAJCCQmH2ETrP9Ky0kIJCYfYROs_0rLS&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwy9POsN6LAxUAAAAAHQAAAAAQEA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            View more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuestReviewsSection;

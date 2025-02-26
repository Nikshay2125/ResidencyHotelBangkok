
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <section id="booking" className="py-10 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Book Your Stay</h2>
          <p className="text-muted-foreground font-sans">
            Plan your perfect getaway with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Check-in Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Check-out Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Guests</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="4">5 Guests</SelectItem>
                <SelectItem value="4">6 Guests</SelectItem>
                <SelectItem value="4">7 Guests</SelectItem>
                <SelectItem value="4">8 Guests</SelectItem>
                <SelectItem value="4">9 Guests</SelectItem>
                <SelectItem value="4">10 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Room Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="premier">Premier Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
            <Button 
              className="w-full bg-gold hover:bg-gold-dark text-white" 
              onClick={async () => {
                console.log("Button clicked!");
                try {
                  const res = await fetch('/api/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      to: 'recipient@example.com', // Change this to the desired recipient
                      subject: 'Booking Request',
                      text: `Check-in: ${checkIn}\nCheck-out: ${checkOut}`,
                    }),
                  });
                  const data = await res.json();
                  console.log(data.message);
                  alert(data.message);
                } catch (error) {
                  console.error('Error:', error);
                  alert('Failed to send email');
                }
              }}
              >
              Request a call back
            </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

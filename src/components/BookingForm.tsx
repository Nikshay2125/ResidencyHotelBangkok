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

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 z-40">
      <form className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">

        <div>
          <label htmlFor="checkInDate" className="block text-sm font-medium mb-2">
            Check-in Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="checkInDate"
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
          <input type="hidden" name="checkInDate" value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""} />
        </div>

        <div>
          <label htmlFor="checkOutDate" className="block text-sm font-medium mb-2">
            Check-out Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="checkOutDate"
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
          <input type="hidden" name="checkOutDate" value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Guests</label>
          <Select onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5 Guests</SelectItem>
              <SelectItem value="6">6 Guests</SelectItem>
              <SelectItem value="7">7 Guests</SelectItem>
              <SelectItem value="8">8 Guests</SelectItem>
              <SelectItem value="9">9 Guests</SelectItem>
              <SelectItem value="10">10 Guests</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="guests" value={guests} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Room Type</label>
          <Select onValueChange={setRoomType}>
            <SelectTrigger>
              <SelectValue placeholder="Select room" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deluxe">Deluxe Room</SelectItem>
              <SelectItem value="premier">Premier Room</SelectItem>
              <SelectItem value="suite">Suite</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="roomType" value={roomType} />
        </div>

        <div>
          <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white">
            Request a call back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

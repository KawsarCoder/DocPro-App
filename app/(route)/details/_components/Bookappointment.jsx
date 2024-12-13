import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import emailjs from "emailjs-com"; // Import EmailJS

function Bookappointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedSlot, setSelectedSlot] = useState();
  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();

  const isPastDay = (day) => {
    return day <= new Date();
  };

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user.given_name + " " + user.family_name,
        Email: user.email,
        Time: selectedSlot,
        Date: date,
        physician: doctor.documentId,
        Note: note,
      },
    };
    

    // Save booking to the database (via API)
    GlobalApi.bookAppointment(data).then((res) => {
      if (res) {
        // Send confirmation email
        const emailParams = {
          to_email: user.email,  // Send the email to the user's email address
          user_name: user.given_name + " " + user.family_name,
          user_email: user.email,
          appointment_date: date.toDateString(),
          appointment_time: selectedSlot,
          doctor_name: doctor.DoctorName,
          problem_note: note || "No additional notes provided.",
          message: `Hello ${user.given_name} ${user.family_name},\n\nYour appointment with ${doctor.DoctorName} has been confirmed.\n\nHere are the details:\n- Date: ${date.toDateString()}\n- Time: ${selectedSlot}\n- Notes: ${note || "No additional notes provided"}\n\nThank you for choosing DocPro!`,
        };
        
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
            emailParams,                                  
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              toast("Booking confirmation email sent successfully!");
            },
            (error) => {
              console.error("FAILED...", error);
              toast.error("Failed to send confirmation email.");
            }
          );
      }
    });
  };

  return (
    <section>
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3 border text-black font-semibold rounded-full w-full text-center cursor-pointer hover:bg-secondary hover:text-white bg-white max-w-fit">
            Book Appointment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                  {/* Calendar */}
                  <div className="flex flex-col items-baseline gap-3">
                    <h2 className="flex gap-2 items-center">
                      <CalendarDays className="text-primary h-5 w-5" />
                      Select Date
                    </h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={isPastDay}
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time Slot */}
                  <div className="mt-3 md:mt-0">
                    <h2 className="flex gap-2 items-center mb-3">
                      <Clock className="text-primary h-5 w-5" />
                      Select Time Slot
                    </h2>
                    <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                      {timeSlot?.map((slot, index) => (
                        <h2
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`p-2 border rounded-full text-center hover:bg-slate-100 cursor-pointer ${
                            slot.time == selectedSlot && "bg-primary text-white"
                          }`}
                          key={index}
                        >
                          {slot.time}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full gap-1.5 mb-4">
            <Label htmlFor="message">Your problem</Label>
            <Textarea
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your problem in short."
              id="message"
            />
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              {/* <Button type="button" variant="destructive">
                Close
              </Button> */}
            </DialogClose>
            <Button
              className="bg-blue-700 hover:bg-blue-600 text-white"
              type="button"
              variant="primary"
              disabled={!(date && selectedSlot)}
              onClick={saveBooking}
            >
              Book Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Bookappointment;

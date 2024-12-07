import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Your Trusted <span className="text-primary">Healthcare</span>{" "}
                  Companion
                </h2>

                <p className="my-4 text-gray-500">
                  Book appointments with top doctors, specialists, and
                  healthcare providers near you. Manage your health with ease -
                  anytime, anywhere. Your health, our priority.
                </p>
                <Button>Book Now</Button>
              </div>
            </div>

            <div>
              <Image
                src="/doctors.jpg"
                width={800}
                height={800}
                className="rounded-3xl"
                alt="doctors image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

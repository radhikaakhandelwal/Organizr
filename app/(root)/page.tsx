import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-purple-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        {/* complete hero section */}
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          {/* Text section - Left */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.{" "}
            </p>

            {/* BUTTON */}
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>

          {/* Image section - Right */}
          <Image
            src="/assets/images/hero.png"
            alt="Hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>

        {/* Search && Category filter */}
        <div
          className="flex
        w-full flex-col gap-5 md:flex-row"
        >
          Search <br /> Category filter
        </div>
      </section>
    </>
  );
}

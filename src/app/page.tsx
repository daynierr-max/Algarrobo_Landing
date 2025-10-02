
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, BrainCircuit, Users, UtensilsCrossed, Phone, Bus, Facebook, Instagram, Mail, Building, Clock, Printer } from "lucide-react";
import Logo from "@/components/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect } from "react";
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Compassionate Personal Care",
    description: "Our dedicated staff provides assistance with daily activities in a respectful and dignified manner.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Engaging Social Activities",
    description: "From group exercises to music therapy and games, we foster a vibrant community and lasting friendships.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Cognitive Stimulation",
    description: "We offer programs designed to engage the mind, promoting mental acuity and well-being.",
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
    title: "Nutritious Meals & Snacks",
    description: "Enjoy delicious, home-cooked meals and snacks prepared fresh daily to meet dietary needs.",
  },
  {
    icon: <Bus className="h-10 w-10 text-primary" />,
    title: "Door-to-Door Transportation",
    description: "Safe and reliable transportation to and from our center is available for our members.",
  },
];

const schedule = {
  headers: ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  rows: [
    { time: "08:00-09:30", activities: ["Breakfast", "Breakfast", "Breakfast", "Breakfast", "Breakfast"] },
    { time: "09:30-10:30", activities: ["Drawings / Exercises", "Puzzle / Exercises", "Clay / Exercises", "Letters / Exercises", "Memory Games / Exercises"] },
    { time: "10:40-11:30", activities: ["", "", "Theater / Movies", "", ""] },
    { time: "11:30-12:30", activities: ["Lunch", "Lunch", "Lunch", "Lunch", "Lunch"] },
    { time: "12:40-16:00", activities: ["Bingo", "Bingo", "Bingo", "Bingo", "Music & Dance"] },
    { time: "13:30-14:00", activities: ["Snacks", "Snacks", "Snacks", "Snacks", "Snacks"] },
    { time: "14:50-17:00", activities: ["Transportation", "Transportation", "Transportation", "Transportation", "Transportation"] },
  ]
};


const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 16.95A8.91 8.91 0 0 1 12.03 18c-2.4 0-4.3-1.9-4.3-4.3 0-1.4.6-2.6 1.5-3.4a3.14 3.14 0 0 1 4.2-4.2l.2.2" />
    </svg>
  );

export default function Home() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-care');
  const [year, setYear] = useState<number | null>(null);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=208%20WASHINGTON%20AVE.%20HOMESTEAD,%20FL%2033030";

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);


  return (
    <div className="flex flex-col min-h-[100dvh]">
       <FadeInOnScroll>
        <header className="px-4 lg:px-6 h-24 flex items-center justify-between sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center">
              <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <Logo />
                <span className="sr-only">Algarrobo Adult Day Care</span>
              </Link>
          </div>
          
          <nav className="hidden lg:flex items-center gap-4 sm:gap-6">
              <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="#schedule" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Schedule
              </Link>
              <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Button asChild className="btn-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Link href="#contact"><span>Contact Us</span></Link>
              </Button>
          </nav>
        </header>
      </FadeInOnScroll>

      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              
              <div className="max-w-3xl">
                <FadeInOnScroll>
                  <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                    A Warm, Welcoming Day for Your Loved Ones
                  </h1>
                </FadeInOnScroll>
                <FadeInOnScroll delay={100}>
                  <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-6">
                    Algarrobo Adult Day Care provides a safe, engaging, and caring environment, offering peace of mind for families and joyful days for our members. A space where laughter is the best therapy. Caring for our adults with love and joy.
                  </p>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay={200}>
                <div className="space-x-4">
                  <Button asChild size="lg">
                    <Link href="#services">Explore Our Services</Link>
                  </Button>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-20 lg:py-20 bg-secondary/40">
          <div className="container px-4 md:px-6">
            <FadeInOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Our Services</div>
                  <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Comprehensive Care and Connection</h2>
                  <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a range of services designed to enhance quality of life, promote independence, and provide a sense of community.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl">
              {services.map((service, index) => (
                <FadeInOnScroll key={index} delay={index * 100}>
                  <Card className="bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                      {service.icon}
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{service.description}</p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="w-full py-12 md:py-20 lg:py-20">
          <div className="container px-4 md:px-6">
            <FadeInOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Weekly Schedule</div>
                  <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">A Day Full of Joy</h2>
                  <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our days are packed with engaging activities to stimulate the mind and body. Here’s a glimpse into our weekly routine.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <Card className="w-full overflow-hidden">
                <div className="overflow-x-auto">
                  <Table className="text-lg">
                    <TableHeader>
                      <TableRow>
                        {schedule.headers.map((header) => (
                          <TableHead key={header} className={`font-bold ${header === 'Time' ? 'w-1/6' : ''} text-center text-lg`}>{header}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schedule.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className="even:bg-muted/40">
                          <TableCell className="font-medium text-center">{row.time}</TableCell>
                          {row.activities.map((activity, activityIndex) => (
                            <TableCell key={activityIndex} className="text-center text-foreground/90">
                              {activity.split(' / ').map((part, partIndex) => (
                                <span key={partIndex} className="block">{part}</span>
                              ))}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </FadeInOnScroll>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-20 lg:py-20">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <FadeInOnScroll>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Our Story</div>
                <h2 className="lg:leading-tighter text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Rooted in Community, Growing with Care
                </h2>
                <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                  Named after the resilient Algarrobo tree, our center was founded on the principles of strength, shelter, and community. We believe in creating a nurturing space where seniors can thrive, connect, and continue to grow. Our mission is to provide exceptional care that feels like family.
                </p>
              </div>
            </FadeInOnScroll>
            {aboutImage && (
              <FadeInOnScroll delay={100}>
                <div className="flex justify-center">
                   <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={800}
                    height={600}
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  />
                </div>
              </FadeInOnScroll>
            )}
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-20 lg:py-20 bg-primary/10 border-t">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <FadeInOnScroll>
              <div className="space-y-3">
                <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Ready to Join Our Family?
                </h2>
                <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to answer your questions and welcome you to the Algarrobo community. Reach out to schedule a visit or learn more about enrollment.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <div className="mx-auto w-full max-w-lg space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button asChild size="lg" className="w-full">
                        <a href="tel:786-360-7503">
                            <Phone className="mr-2 h-4 w-4" /> Call Us
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full">
                        <a href="mailto:algarroboadultdaycarellc@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Email Us
                        </a>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 hover:underline">
                      <Building className="h-4 w-4" /> 208 WASHINGTON AVE. • HOMESTEAD, FL 33030
                    </a>
                    <p className="flex items-center justify-center gap-2">
                        <Printer className="h-4 w-4" /> Fax: 786-504-3411
                    </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <FadeInOnScroll>
        <footer className="py-8 w-full shrink-0 border-t bg-secondary/40">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-2">
                  <h3 className="font-headline text-lg font-bold">Horario</h3>
                  <div className="text-sm text-muted-foreground">
                      <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Lunes a Viernes</p>
                      <p className="ml-6">8:00 am - 4:00 pm</p>
                  </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                  <h3 className="font-headline text-lg font-bold">Contacto</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                          <Building className="h-4 w-4" /> 208 WASHINGTON AVE. • HOMESTEAD, FL 33030
                      </a>
                      <a href="mailto:algarroboadultdaycarellc@gmail.com" className="flex items-center gap-2 hover:underline">
                          <Mail className="h-4 w-4" /> algarroboadultdaycarellc@gmail.com
                      </a>
                      <a href="tel:786-360-7503" className="flex items-center gap-2 hover:underline">
                          <Phone className="h-4 w-4" /> Tel: 786-360-7503
                      </a>
                      <p className="flex items-center gap-2">
                          <Printer className="h-4 w-4" /> Fax: 786-504-3411
                      </p>
                  </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-4">
                  <h3 className="font-headline text-lg font-bold">Síguenos</h3>
                  <div className="flex gap-4">
                      <Link href="#" aria-label="Facebook" prefetch={false}>
                          <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
                      </Link>
                      <Link href="https://www.instagram.com/algarrobo_adult_day_care/" aria-label="Instagram" prefetch={false} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
                      </Link>
                      <Link href="#" aria-label="WhatsApp" prefetch={false}>
                          <WhatsappIcon className="h-6 w-6 hover:text-primary transition-colors" />
                      </Link>
                  </div>
              </div>
          </div>
          <div className="container px-4 md:px-6 mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-6">
              <p className="text-xs text-muted-foreground">&copy; {year || new Date().getFullYear()} Algarrobo Adult Day Care. All rights reserved.</p>
              <nav className="flex gap-4 sm:gap-6 items-center mt-4 sm:mt-0">
                  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                      Privacy Policy
                  </Link>
                  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                      Terms of Service
                  </Link>
              </nav>
          </div>
        </footer>
      </FadeInOnScroll>
      <ScrollToTopButton />
    </div>
  );
}

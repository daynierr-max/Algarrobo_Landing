import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, BrainCircuit, Users, UtensilsCrossed, Phone } from "lucide-react";
import Logo from "@/components/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
];

export default function Home() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-care');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo />
          <span className="font-headline text-2xl font-bold text-primary">Algarrobo</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block" prefetch={false}>
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block" prefetch={false}>
            About
          </Link>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                  A Warm, Welcoming Day for Your Loved Ones
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-6">
                  Algarrobo Adult Day Care provides a safe, engaging, and caring environment, offering peace of mind for families and joyful days for our members.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="#services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Our Services</div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Comprehensive Care and Connection</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of services designed to enhance quality of life, promote independence, and provide a sense of community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    {service.icon}
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground">Our Story</div>
              <h2 className="lg:leading-tighter text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Rooted in Community, Growing with Care
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
                Named after the resilient Algarrobo tree, our center was founded on the principles of strength, shelter, and community. We believe in creating a nurturing space where seniors can thrive, connect, and continue to grow. Our mission is to provide exceptional care that feels like family.
              </p>
            </div>
            {aboutImage && (
              <div className="flex justify-center">
                 <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={800}
                  height={600}
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight text-primary">
                Ready to Join Our Family?
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and welcome you to the Algarrobo community. Reach out to schedule a visit or learn more about enrollment.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" /> Call Us Today
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">Or visit us at: 123 Care Street, Anytown, USA</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Algarrobo Adult Day Care. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

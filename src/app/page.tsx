"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type FormEvent } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building,
  Bus,
  CalendarDays,
  CheckCircle2,
  Clock,
  Facebook,
  Globe,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  ShieldCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Logo from "@/components/logo";
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";
import { useToast } from "@/hooks/use-toast";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { FranceFlagIcon } from "@/components/icons/france-flag";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Cuidado Personal con Calidez",
    description: "Nuestro equipo acompaña las actividades diarias con respeto, cercania y atencion digna para cada participante.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Actividades Sociales Activas",
    description: "Ejercicios en grupo, juegos, musica y espacios compartidos que fortalecen el animo y la convivencia.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Estimulación Cognitiva",
    description: "Ofrecemos propuestas pensadas para mantener la mente activa, estimular la memoria y favorecer el bienestar.",
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
    title: "Comidas y Meriendas Nutritivas",
    description: "Preparamos comidas caseras y meriendas diarias adaptadas a las necesidades de cada persona.",
  },
  {
    icon: <Bus className="h-10 w-10 text-primary" />,
    title: "Transporte Puerta a Puerta",
    description: "Disponemos de transporte seguro y confiable para facilitar la llegada y el regreso al centro.",
  },
];

const schedule = {
  headers: ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
  rows: [
    { time: "08:00-09:30", activities: ["Desayuno", "Desayuno", "Desayuno", "Desayuno", "Desayuno"] },
    { time: "09:30-10:30", activities: ["Dibujos / Ejercicios", "Rompecabezas / Ejercicios", "Arcilla / Ejercicios", "Lectura / Ejercicios", "Juegos de memoria / Ejercicios"] },
    { time: "10:40-11:30", activities: ["", "", "Teatro / Peliculas", "", ""] },
    { time: "11:30-12:30", activities: ["Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo"] },
    { time: "12:40-16:00", activities: ["Bingo", "Bingo", "Bingo", "Bingo", "Musica y baile"] },
    { time: "13:30-14:00", activities: ["Merienda", "Merienda", "Merienda", "Merienda", "Merienda"] },
    { time: "14:50-17:00", activities: ["Transporte", "Transporte", "Transporte", "Transporte", "Transporte"] },
  ],
};

const navigationItems = [
  { href: "#services", label: "Servicios" },
  { href: "#schedule", label: "Horario" },
  { href: "#gallery", label: "Galeria" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

const trustSignals = [
  "Centro de cuidado autorizado",
  "Transporte puerta a puerta",
  "Acompañamiento cercano a la familia",
];

const registrationBenefits = [
  "Agenda una visita antes de tomar una decision.",
  "Consulta disponibilidad, transporte y rutina diaria.",
  "Recibe orientacion segun las necesidades de tu familia.",
];

const contactSteps = [
  {
    icon: CalendarDays,
    title: "Cuéntanos qué necesita tu familia",
    description: "Explícanos quién podría asistir, qué apoyo necesita y cuál es tu principal duda.",
  },
  {
    icon: ShieldCheck,
    title: "Recibe orientación clara",
    description: "Te ayudamos con dudas sobre cuidado, transporte, horarios y funcionamiento diario.",
  },
  {
    icon: MapPin,
    title: "Agenda visita o primer contacto",
    description: "Puedes elegir una llamada, un mensaje por WhatsApp o una visita al centro.",
  },
];

const aboutImage = PlaceHolderImages.find((p) => p.id === "about-us-care");
const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

interface InquiryData {
  fullName: string;
  phone: string;
  email: string;
  lovedOneName: string;
  message: string;
}

function getInquiryValue(formData: FormData, key: keyof InquiryData) {
  return formData.get(key)?.toString().trim() ?? "";
}

function getInquiryData(form: HTMLFormElement): InquiryData {
  const formData = new FormData(form);

  return {
    fullName: getInquiryValue(formData, "fullName"),
    phone: getInquiryValue(formData, "phone"),
    email: getInquiryValue(formData, "email"),
    lovedOneName: getInquiryValue(formData, "lovedOneName"),
    message: getInquiryValue(formData, "message"),
  };
}

function buildInquiryMessage(data: InquiryData) {
  const details = [
    "Hola, equipo de Algarrobo:",
    "",
    "Quiero solicitar informacion sobre el centro.",
    data.fullName ? `Nombre: ${data.fullName}` : "",
    data.phone ? `Telefono: ${data.phone}` : "",
    data.email ? `Correo: ${data.email}` : "",
    data.lovedOneName ? `Nombre del familiar: ${data.lovedOneName}` : "",
    data.message ? `Preguntas o notas: ${data.message}` : "",
    "",
    "Quedo pendiente de los siguientes pasos. Gracias.",
  ].filter(Boolean);

  return details.join("\n");
}

function buildMailToUrl(email: string, data: InquiryData) {
  const subject = data.lovedOneName
    ? `Consulta sobre ${data.lovedOneName}`
    : "Solicitud de informacion";

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildInquiryMessage(data))}`;
}

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

function triggerGoogleTranslation(lang: "en" | "fr") {
  if (typeof window === "undefined") return;

  const iframe = document.querySelector<HTMLIFrameElement>(".goog-te-menu-frame");
  const iframeDocument = iframe?.contentDocument ?? iframe?.contentWindow?.document;
  if (!iframeDocument) return;

  const languageLabels = lang === "en" ? ["English", "Inglés", "Ingles"] : ["French", "Français", "Francés"];
  const links = Array.from(iframeDocument.querySelectorAll<HTMLAnchorElement>("a"));

  const selectedLanguageLink = links.find((link) =>
    languageLabels.some((label) => link.innerText.includes(label))
  );

  selectedLanguageLink?.click();
}

export default function Home() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=208%20WASHINGTON%20AVE.%20HOMESTEAD,%20FL%2033030";
  const contactPhone = "786-360-7503";
  const contactEmail = "algarroboadultdaycarellc@gmail.com";
  const whatsappUrl = "https://wa.me/17863607503";
  const currentYear = new Date().getFullYear();
  const inquiryFormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleTranslate = (lang: "en" | "fr") => {
    triggerGoogleTranslation(lang);
  };

  const handleRegistrationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const inquiryData = getInquiryData(form);

    window.location.href = buildMailToUrl(contactEmail, inquiryData);
    toast({
      title: "Borrador de correo listo",
      description: "Tu aplicacion de correo deberia abrirse con el mensaje ya preparado.",
    });
    form.reset();
  };

  const handleWhatsAppRegistration = () => {
    const inquiryData = inquiryFormRef.current
      ? getInquiryData(inquiryFormRef.current)
      : {
          fullName: "",
          phone: "",
          email: "",
          lovedOneName: "",
          message: "",
        };

    window.open(`${whatsappUrl}?text=${encodeURIComponent(buildInquiryMessage(inquiryData))}`, "_blank", "noopener,noreferrer");
    toast({
      title: "Mensaje de WhatsApp listo",
      description: "Se abrira una conversacion con el mensaje ya completado.",
    });

    inquiryFormRef.current?.reset();
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="header-shine" />
        <div className="container flex h-20 items-center justify-between px-4 lg:px-6">
          <Link href="#hero" className="flex items-center" prefetch={false}>
            <Logo />
            <span className="sr-only">Algarrobo Adult Day Care</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-primary"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary/60">
                  <Globe className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Seleccionar idioma</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>Idioma</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleTranslate("en")} className="cursor-pointer">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTranslate("fr")} className="cursor-pointer">
                  <FranceFlagIcon className="mr-2 h-4 w-6" />
                  <span>Français</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="btn-gradient rounded-full px-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <Link href="#contact-form">
                <span>Solicitar informacion</span>
              </Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild variant="default" size="sm" className="rounded-full px-4">
              <a href={`tel:${contactPhone.replace(/-/g, "")}`}>
                <Phone className="mr-1 h-4 w-4" /> Llamar
              </a>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navigationItems.map((item) => (
                  <DropdownMenuItem key={item.href} className="cursor-pointer" onClick={() => (window.location.hash = item.href)}>
                    {item.label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleTranslate("en")} className="cursor-pointer">
                  <Globe className="mr-2 h-4 w-4" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTranslate("fr")} className="cursor-pointer">
                  <FranceFlagIcon className="mr-2 h-4 w-6" />
                  Français
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer font-semibold text-primary" onClick={() => (window.location.hash = "#contact-form")}>
                  Solicitar informacion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        <section id="hero" className="hero-atmosphere relative overflow-hidden">
          {heroImage && (
            <Image
              alt={heroImage.description}
              src={heroImage.imageUrl}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/55 to-primary/35" />

          <div className="relative container px-4 md:px-6">
            <div className="grid min-h-[78vh] items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,420px)] lg:py-20">
              <div className="max-w-3xl text-center lg:text-left">
                <FadeInOnScroll>
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur">
                    Cuidado diurno para adultos en Homestead, Florida
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={80}>
                  <h1 className="mt-5 text-balance text-4xl font-headline font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Un espacio seguro, activo y cercano para tus seres queridos
                  </h1>
                </FadeInOnScroll>
                <FadeInOnScroll delay={160}>
                  <p className="mx-auto mt-6 max-w-[760px] text-pretty text-base text-white/95 sm:text-lg md:text-xl lg:mx-0">
                    En Algarrobo Adult Day Care ofrecemos acompanamiento profesional, actividades diarias, transporte y un entorno donde cada persona puede sentirse cuidada y acompañada.
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll delay={240}>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                    <Button asChild size="lg" className="rounded-full px-7 shadow-lg">
                      <Link href="#contact-form">
                        Solicitar informacion <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-white/60 bg-white/10 px-7 text-white backdrop-blur hover:bg-white/20 hover:text-white">
                      <a href={`tel:${contactPhone.replace(/-/g, "")}`}>
                        <Phone className="h-4 w-4" /> Llamar {contactPhone}
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-green-200/80 bg-green-500/10 px-7 text-white backdrop-blur hover:bg-green-500/20 hover:text-white">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </Button>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={320}>
                  <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3 lg:mx-0">
                    {trustSignals.map((signal) => (
                      <div key={signal} className="glass-panel rounded-xl px-4 py-3 text-sm font-medium text-white/95">
                        <CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-300" />
                        {signal}
                      </div>
                    ))}
                  </div>
                </FadeInOnScroll>
              </div>

              <FadeInOnScroll delay={220} className="lg:justify-self-end">
                <div className="mx-auto max-w-md rounded-[2rem] border border-white/15 bg-slate-950/42 p-6 text-left text-white shadow-2xl backdrop-blur-xl sm:p-8">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Empieza aqui
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-headline font-bold tracking-tight text-white sm:text-4xl">
                    Agenda una visita o pide informacion
                  </h2>
                  <p className="mt-3 text-sm text-white/80 sm:text-base">
                    Las familias suelen necesitar tres respuestas de inmediato: disponibilidad, transporte y rutina diaria. Aqui tienes ese primer paso mucho mas claro.
                  </p>
                  <div className="mt-6 space-y-3">
                    {registrationBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-6 h-px w-full bg-white/15" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button asChild className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                      <Link href="#contact-form">Solicitar informacion</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
                    </Button>
                  </div>
                  <p className="mt-4 flex items-start gap-2 text-sm text-white/75">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    208 WASHINGTON AVE. • HOMESTEAD, FL 33030
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        <section id="services" className="section-atmosphere-warm w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <FadeInOnScroll>
              <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                    Servicios
                  </div>
                  <h2 className="text-balance text-3xl font-headline font-bold tracking-tight sm:text-5xl">
                    Cuidado integral y vida en comunidad
                  </h2>
                  <p className="max-w-[900px] text-foreground/80 md:text-lg">
                    Diseñamos cada jornada para acompañar la salud, favorecer la autonomia y crear un verdadero sentido de pertenencia.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <div className="mx-auto grid items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
              {services.map((service, index) => (
                <FadeInOnScroll key={service.title} delay={index * 100}>
                  <Card className="h-full rounded-2xl border border-primary/10 bg-card/85 shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                      {service.icon}
                      <CardTitle className="text-lg">{service.title}</CardTitle>
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

        <section id="schedule" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <FadeInOnScroll>
              <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Horario semanal
                  </div>
                  <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-5xl">Un dia lleno de actividad y bienestar</h2>
                  <p className="max-w-[900px] text-foreground/80 md:text-lg">
                    Un ritmo equilibrado de comidas, movimiento, juegos y estimulación que mantiene cada jornada activa y con sentido.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <p className="mb-4 text-center text-sm text-muted-foreground">
                En movil, desliza horizontalmente para ver el horario completo. Si quieres conocer el ritmo del centro en persona,{" "}
                <Link href="#contact-form" className="font-semibold text-primary hover:underline" prefetch={false}>
                  solicita una visita
                </Link>
                .
              </p>
              <Card className="glass-panel w-full overflow-hidden rounded-2xl border border-primary/10 shadow-xl">
                <div className="overflow-x-auto">
                  <Table className="text-sm md:text-base">
                    <TableHeader>
                      <TableRow>
                        {schedule.headers.map((header) => (
                          <TableHead key={header} className={`text-center text-sm font-bold uppercase tracking-wide md:text-base ${header === "Time" ? "w-1/6" : ""}`}>
                            {header}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schedule.rows.map((row) => (
                        <TableRow key={row.time} className="text-center even:bg-muted/35">
                          <TableCell className="font-semibold text-primary/90">{row.time}</TableCell>
                          {row.activities.map((activity, activityIndex) => (
                            <TableCell key={`${row.time}-${activityIndex}`} className="text-foreground/90">
                              {activity.split(" / ").map((part, partIndex) => (
                                <span key={`${row.time}-${activityIndex}-${partIndex}`} className="block">
                                  {part}
                                </span>
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

        <section id="gallery" className="section-atmosphere-cool w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <FadeInOnScroll>
              <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                    Galeria
                  </div>
                  <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-5xl">Momentos de alegria compartida</h2>
                  <p className="max-w-[900px] text-foreground/80 md:text-lg">
                    Imagenes reales de movimiento, compañia y alegria en el dia a dia de Algarrobo.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <GalleryCarousel />
            </FadeInOnScroll>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <FadeInOnScroll className="flex justify-center">
                {aboutImage && (
                  <div className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      alt={aboutImage.description}
                      className="object-cover"
                      src={aboutImage.imageUrl}
                      fill
                      data-ai-hint={aboutImage.imageHint}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </FadeInOnScroll>
              <div className="flex flex-col justify-center space-y-4">
                <FadeInOnScroll>
                  <div className="space-y-4 text-center lg:text-left">
                    <div className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                      Nuestra historia
                    </div>
                    <h2 className="text-balance text-3xl font-headline font-bold tracking-tight sm:text-4xl md:text-5xl">
                      Nacimos en comunidad y crecemos cuidando
                    </h2>
                    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-lg lg:mx-0">
                      Inspirado en la fortaleza del algarrobo, nuestro centro nace para ofrecer refugio, cercania y rutina con sentido. Queremos que cada persona mayor encuentre aqui un lugar donde sentirse acompañada, activa y valorada.
                    </p>
                    <div className="grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
                      <p><CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />Atencion bilingue</p>
                      <p><CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />Cuidadores profesionales</p>
                      <p><CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />Rutina diaria estructurada</p>
                      <p><CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />Comunicacion con la familia</p>
                    </div>
                    <Button asChild variant="outline" className="mx-auto mt-2 w-fit rounded-full border-primary/20 px-5 lg:mx-0">
                      <Link href="#contact-form">Pedir una orientacion familiar</Link>
                    </Button>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-atmosphere-warm w-full border-t py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-10 text-center">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Inscripcion y contacto
              </div>
              <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-headline font-bold tracking-tight text-primary md:text-5xl">
                Resuelve tus dudas y da el siguiente paso con confianza
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-foreground/80 md:text-lg">
                Hemos reorganizado esta parte para que la informacion clave y el formulario tengan el mismo peso visual, y para que contactar con el centro resulte mas claro y mas rapido.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <FadeInOnScroll className="h-full">
                <Card className="contact-grid h-full rounded-[2rem] shadow-2xl">
                  <CardContent className="flex h-full flex-col p-6 sm:p-8">
                    <div className="space-y-3 text-left">
                      <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Como te acompañamos
                      </div>
                      <h3 className="text-balance text-2xl font-headline font-bold tracking-tight sm:text-3xl">
                        Informacion clara antes de tomar una decision
                      </h3>
                      <p className="text-sm text-foreground/75 sm:text-base">
                        Queremos que la familia entienda desde el primer momento como trabajamos, que opciones de contacto tiene y cual puede ser el siguiente paso.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-4">
                      {contactSteps.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="rounded-2xl border border-primary/10 bg-white/70 p-5 text-left shadow-sm">
                          <div className="flex items-start gap-4">
                            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-semibold">{title}</h4>
                              <p className="text-sm text-foreground/75">{description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="soft-divider mt-6" />

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <Button asChild className="h-11 rounded-full">
                        <a href={`tel:${contactPhone.replace(/-/g, "")}`}>Llamar</a>
                      </Button>
                      <Button asChild variant="outline" className="h-11 rounded-full">
                        <a href={`mailto:${contactEmail}`}>Correo</a>
                      </Button>
                      <Button asChild className="h-11 rounded-full bg-green-600 text-white hover:bg-green-700">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                      </Button>
                    </div>

                    <div className="mt-auto space-y-3 pt-6 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <Building className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>208 WASHINGTON AVE. • HOMESTEAD, FL 33030</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Lunes a Viernes, de 8:00 am a 4:00 pm</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Printer className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Fax: 786-504-3411</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>

              <FadeInOnScroll delay={120} className="h-full">
                <Card id="contact-form" className="contact-grid h-full scroll-mt-28 rounded-[2rem] shadow-2xl">
                  <CardContent className="flex h-full flex-col p-6 sm:p-8">
                    <div className="mb-6 space-y-3 text-left">
                      <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Formulario de contacto
                      </div>
                      <h3 className="text-balance text-2xl font-headline font-bold tracking-tight sm:text-3xl">
                        Solicita informacion
                      </h3>
                      <p className="text-sm text-foreground/75 sm:text-base">
                        Completa estos datos y abre un correo o un mensaje de WhatsApp ya preparado para el equipo de Algarrobo.
                      </p>
                    </div>

                    <form ref={inquiryFormRef} onSubmit={handleRegistrationSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Tu nombre</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            autoComplete="name"
                            placeholder="Ana Garcia…"
                            required
                            className="h-11 rounded-xl bg-white/80"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefono</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="786-555-0142…"
                            required
                            className="h-11 rounded-xl bg-white/80"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electronico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="familia@example.com…"
                            required
                            spellCheck={false}
                            className="h-11 rounded-xl bg-white/80"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lovedOneName">Nombre del familiar</Label>
                          <Input
                            id="lovedOneName"
                            name="lovedOneName"
                            autoComplete="off"
                            placeholder="Maria Garcia…"
                            className="h-11 rounded-xl bg-white/80"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">¿Que te gustaria saber?</Label>
                        <Textarea
                          id="message"
                          name="message"
                          autoComplete="off"
                          placeholder="Cuéntanos si quieres saber sobre transporte, plazas disponibles, rutina diaria o el mejor horario para llamarte…"
                          className="min-h-[140px] rounded-2xl bg-white/80"
                        />
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button type="submit" className="btn-gradient h-11 flex-1 rounded-full px-6">
                          <span>Enviar por correo</span>
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleWhatsAppRegistration}
                          className="h-11 flex-1 rounded-full border-green-500/40 bg-green-500/5 text-green-900 hover:bg-green-500/10"
                        >
                          Enviar por WhatsApp
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Si prefieres una respuesta inmediata, puedes llamar ahora al{" "}
                        <a href={`tel:${contactPhone.replace(/-/g, "")}`} className="font-semibold text-primary hover:underline">
                          {contactPhone}
                        </a>
                        .
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full shrink-0 border-t bg-secondary/55 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:items-start">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex justify-center lg:justify-start">
                <Logo />
              </div>
              <p className="max-w-md text-sm text-muted-foreground lg:max-w-none">
                Cuidado diurno para adultos con acompañamiento profesional, actividades diarias y atencion cercana para las familias de Homestead.
              </p>
              <Button asChild className="rounded-full px-6">
                <Link href="#contact-form" prefetch={false}>Solicitar informacion</Link>
              </Button>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h3 className="font-headline text-lg font-bold">Informacion del centro</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start justify-center gap-2 lg:justify-start">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Lunes a Viernes, de 8:00 am a 4:00 pm</span>
                </p>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start justify-center gap-2 hover:underline lg:justify-start">
                  <Building className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>208 WASHINGTON AVE. • HOMESTEAD, FL 33030</span>
                </a>
                <p className="flex items-start justify-center gap-2 lg:justify-start">
                  <Printer className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Fax: 786-504-3411</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h3 className="font-headline text-lg font-bold">Contacto directo</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href={`mailto:${contactEmail}`} className="flex items-center justify-center gap-2 hover:underline lg:justify-start">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{contactEmail}</span>
                </a>
                <a href={`tel:${contactPhone.replace(/-/g, "")}`} className="flex items-center justify-center gap-2 hover:underline lg:justify-start">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{contactPhone}</span>
                </a>
                <div className="flex items-center justify-center gap-4 pt-1 lg:justify-start">
                  <Link href="https://www.facebook.com/share/19KR7mn3r4/?mibextid=wwXIfr" aria-label="Facebook" prefetch={false} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 transition-colors hover:text-primary" />
                  </Link>
                  <Link href="https://www.instagram.com/algarrobo_adult_day_care/" aria-label="Instagram" prefetch={false} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 transition-colors hover:text-primary" />
                  </Link>
                  <Link href={whatsappUrl} aria-label="WhatsApp" prefetch={false} target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className="h-5 w-5 transition-colors hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-divider mt-8" />

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Algarrobo Adult Day Care LLC. Todos los derechos reservados.
            </p>
            <nav className="flex items-center gap-4 text-xs text-muted-foreground sm:gap-6">
              <Link href="#services" className="hover:underline" prefetch={false}>
                Servicios
              </Link>
              <Link href="#schedule" className="hover:underline" prefetch={false}>
                Horario
              </Link>
              <Link href="#contact-form" className="hover:underline" prefetch={false}>
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}

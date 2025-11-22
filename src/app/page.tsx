import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

export const dynamic = 'force-dynamic';

export default function Home() {
  const projects = [
    {
      title: "Clifton Residence",
      location: "Clifton Oceanfront Estate",
      image: "/generated/project-clifton-pool.png"
    },
    {
      title: "Wine Lands Garden",
      location: "Constantia Wine Estate",
      image: "/generated/project-wine-estate.png"
    },
    {
      title: "Coastal Oasis",
      location: "Camps Bay Penthouse",
      image: "/generated/project-penthouse.png"
    },
    {
      title: "Mountain Retreat",
      location: "Indigenous Slope Design",
      image: "/generated/project-mountain-retreat.png"
    }
  ];

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Consultation & Design",
      description: "Personalized landscape design tailored to Cape Town's unique climate and your property's character"
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Project Management",
      description: "Full-service implementation from concept to completion with experienced local contractors"
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Maintenance & Care",
      description: "Ongoing seasonal care to keep your indigenous garden thriving in Cape Town's Mediterranean climate"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Bishopscourt",
      quote: "The transformation of our Bishopscourt garden exceeded every expectation. The indigenous plant selection thrives in our microclimate while creating year-round interest."
    },
    {
      name: "David Chen",
      location: "Camps Bay",
      quote: "Professional service from concept to completion. Our Camps Bay entertainment area now rivals any resort while requiring minimal maintenance."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/generated/hero-table-mountain.png"
          alt="Cape Town landscape design with Table Mountain views"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Where Nature<br />Meets Design
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow">
            Transform your Cape Town outdoor space into a private paradise with indigenous plants and sustainable design
          </p>
          <Link href="/consultation">
            <Button variant="primary">Explore Projects</Button>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Projects</h2>
            <p className="text-base max-w-2xl mx-auto text-gray-600">
              Discover stunning landscape transformations across Cape Town's most prestigious neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                location={project.location}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Services</h2>
            <p className="text-base max-w-2xl mx-auto text-gray-600">
              Comprehensive landscape design solutions for Cape Town properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-[hsl(var(--charcoal))]">
                  {service.icon}
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[hsl(var(--sage-green))] to-[hsl(var(--sage-green))]/90 rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Ready to Begin Your<br />Landscape Journey?</h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Schedule a consultation to discuss your vision and receive a customized design proposal for your Cape Town property
            </p>
            <Link href="/consultation">
              <Button variant="cta">Book Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-card">
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--sage-green))]/20 flex items-center justify-center">
                    <span className="text-[hsl(var(--charcoal))] font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[hsl(var(--charcoal))]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Cape Town's Indigenous Landscape Specialists</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For over 15 years, Cape Flora Designs has been transforming outdoor spaces across Cape Town's most prestigious neighborhoods. We specialize in indigenous plant selections that thrive in our unique Mediterranean climate while creating stunning visual impact.
              </p>
              <p>
                Our approach combines deep knowledge of South African flora with modern design principles, ensuring your garden is both beautiful and sustainable. From Camps Bay to Constantia, we've created outdoor paradises that celebrate our region's natural beauty.
              </p>
              <p className="font-medium text-[hsl(var(--charcoal))]">
                Every project begins with understanding your vision and the unique character of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

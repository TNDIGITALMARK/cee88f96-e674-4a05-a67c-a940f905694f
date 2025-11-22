import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function PortfolioPage() {
  const projects = [
    {
      id: 'clifton-oceanfront',
      title: 'Clifton Oceanfront Estate',
      category: 'Coastal Properties',
      location: 'Clifton',
      description: 'A stunning beachfront transformation featuring indigenous coastal plantings, infinity pool integration, and wind-resistant design solutions that complement the Atlantic seaboard setting.',
      image: '/generated/project-clifton-pool.png',
      features: [
        'Infinity pool design',
        'Wind-resistant coastal plants',
        'Indigenous proteas and restios',
        'Modern entertainment area'
      ],
      year: '2023'
    },
    {
      id: 'constantia-wine-estate',
      title: 'Constantia Wine Estate Gardens',
      category: 'Wine Estate Gardens',
      location: 'Constantia',
      description: 'Historic property featuring formal gardens with heritage oak preservation, sustainable irrigation systems, and a naturalistic approach to the indigenous fynbos landscape.',
      image: '/generated/project-wine-estate.png',
      features: [
        'Heritage tree preservation',
        'Indigenous fynbos garden',
        'Stone pathways',
        'Sustainable irrigation'
      ],
      year: '2022'
    },
    {
      id: 'camps-bay-penthouse',
      title: 'Camps Bay Penthouse Garden',
      category: 'City Bowl Gardens',
      location: 'Camps Bay',
      description: 'Modern rooftop transformation with panoramic Table Mountain views, contemporary planters featuring native succulents, and a sophisticated entertainment space.',
      image: '/generated/project-penthouse.png',
      features: [
        'Rooftop garden design',
        'Native succulents and aloes',
        'Outdoor kitchen integration',
        'Mountain view optimization'
      ],
      year: '2023'
    },
    {
      id: 'mountain-slope',
      title: 'Mountain Slope Indigenous Garden',
      category: 'Mountain Slope Designs',
      location: 'Constantia',
      description: 'Ecological garden design celebrating South African biodiversity with natural rock features, drought-resistant plants, and terraced native plantings.',
      image: '/generated/project-mountain-retreat.png',
      features: [
        'Natural rock integration',
        'Drought-resistant species',
        'Biodiversity enhancement',
        'Terraced planting design'
      ],
      year: '2022'
    }
  ];

  const categories = [
    'All Projects',
    'Coastal Properties',
    'Wine Estate Gardens',
    'City Bowl Gardens',
    'Mountain Slope Designs'
  ];

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Explore our collection of landscape transformations across Cape Town's most distinguished properties. Each project celebrates indigenous South African flora while creating functional, beautiful outdoor living spaces.
            </p>
          </div>
        </section>

        {/* Category Filter (Visual only for MVP) */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${
                    index === 0
                      ? 'bg-[hsl(var(--charcoal))] text-white'
                      : 'bg-gray-100 text-[hsl(var(--charcoal))] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg shadow-card"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-block px-4 py-1 bg-[hsl(var(--sage-green))]/10 rounded-full mb-4">
                      <span className="text-sm font-medium text-[hsl(var(--sage-green))] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="mb-2 text-3xl">{project.title}</h2>

                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold tracking-wider uppercase mb-3 text-[hsl(var(--charcoal))]">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-[hsl(var(--sage-green))] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Start Your Transformation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to create your own stunning outdoor space? Schedule a consultation to discuss your vision and receive a customized design proposal.
              </p>
              <Link href="/consultation">
                <Button variant="cta">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

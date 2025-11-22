import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--sage-green))] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Tagline */}
          <div>
            <Link href="/" className="logo text-white flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"/>
                <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Cape Flora Designs</span>
            </Link>
            <p className="text-sm opacity-90">
              Transforming Cape Town outdoor spaces into natural paradises
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link>
              <Link href="/portfolio" className="opacity-90 hover:opacity-100 transition-opacity">Portfolio</Link>
              <Link href="/#services" className="opacity-90 hover:opacity-100 transition-opacity">Services</Link>
              <Link href="/consultation" className="opacity-90 hover:opacity-100 transition-opacity">Book Consultation</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <p className="opacity-90">Cape Town, South Africa</p>
              <a href="tel:+27123456789" className="opacity-90 hover:opacity-100 transition-opacity">+27 12 345 6789</a>
              <a href="mailto:info@capefloradesigns.co.za" className="opacity-90 hover:opacity-100 transition-opacity">info@capefloradesigns.co.za</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Cape Flora Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

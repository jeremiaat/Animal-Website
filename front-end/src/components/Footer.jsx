export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/animals' },
    { name: 'About', href: '/aboutus' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = ['Facebook', 'Twitter', 'Instagram'];

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 tracking-widest">
              WILDLIFE
            </h3>
            <p className="text-sm font-light">
              Exploring the wonders of the natural world through stunning visuals
              and fascinating facts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-medium mb-4">Quick Links</h3>
            <ul className="font-light">
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <a href={link.href} className="hover:text-emerald-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-base font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 font-light">
              {socialLinks.map((platform) => (
                <a key={platform} href="#" className="hover:text-emerald-400 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-base font-medium mb-4">Newsletter</h3>
            <p className="text-sm mb-4 font-light">
              Subscribe for weekly updates and amazing animal stories.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 font-light"
              />
              <button
                type="submit"
                className="bg-emerald-500 text-white px-4 py-2 rounded-r-md hover:bg-emerald-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm font-light">
          <p>© 2024 Wildlife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

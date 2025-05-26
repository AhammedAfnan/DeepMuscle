export default function Footer() {
    const FooterColumn = ({ title, links }) => (
      <div>
        <h3 className="text-sm font-semibold uppercase mb-4">{title}</h3>
        <ul className="space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href || "#"}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  
    const profileLinks = [
      { label: "My Account" },
      { label: "Checkout" },
      { label: "Wishlist" },
      { label: "Help & Support" },
      { label: "Track Your Order" },
    ];
  
    const quickLinks = [
      { label: "Shipping Policy" },
      { label: "Privacy Policy" },
      { label: "Terms & Conditions" },
      { label: "Exchange & Return Policy" },
    ];
  
    const companyLinks = [
      { label: "Home" },
      { label: "Shop" },
      { label: "FAQs" },
      { label: "Contact Us" },
      { label: "Return & Exchange" },
    ];
  
    return (
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-4xl font-extrabold">Kreese!</h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Embrace bold designs and premium craftsmanship of urban flair and fearless style.
            </p>
          </div>
  
          <FooterColumn title="Profile" links={profileLinks} />
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Company" links={companyLinks} />
  
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Be in the know</h3>
            <p className="text-sm text-gray-300 mb-4">
              Promotions, new products and sales. Directly to your inbox.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-200 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
  
        {/* Social Icons & Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📌</span>
            <span className="hover:text-white cursor-pointer">📸</span>
          </div>
          <p>
            COPYRIGHT © 2024 MANAGED BY KREESE APPARELS AND MARKETING LLP. ALL RIGHT RESERVED.
          </p>
        </div>
      </footer>
    );
  }
  
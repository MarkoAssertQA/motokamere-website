import Link from "next/link";
import content from "../content.json";

export default function Footer() {
  return (
    <footer data-cy="footer" id="kontakt" className="relative border-t border-gray-800 py-16 bg-[#050508]">
      <div data-cy="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-cy="footer-grid" className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div data-cy="footer-brand" className="col-span-1 md:col-span-2">
            <div data-cy="footer-logo" className="flex items-center space-x-3 mb-6">
              <div
                data-cy="footer-logo-icon"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  data-cy="footer-logo-svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span data-cy="footer-logo-text" className="text-2xl font-bold">
                <span data-cy="footer-logo-text-part1" className="text-purple-400">
                  {content.brand.namePart1}
                </span>
                <span data-cy="footer-logo-text-part2" className="text-white">
                  {content.brand.namePart2}
                </span>
              </span>
            </div>
            <p data-cy="footer-description" className="text-gray-500 mb-6 max-w-sm">
              {content.footer.description}
            </p>
            <div data-cy="footer-social" className="flex space-x-4">
              {["twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  data-cy={`footer-social-${social}`}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 text-gray-500 transition-all"
                >
                  <svg
                    data-cy={`footer-social-icon-${social}`}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div data-cy="footer-quick-links">
            <h4 data-cy="footer-quick-links-title" className="text-white font-bold mb-4">
              {content.footer.quickLinksTitle}
            </h4>
            <ul data-cy="footer-quick-links-list" className="space-y-3">
              {content.navigation.links.map((link, index) => (
                <li key={link.href} data-cy={`footer-quick-link-item-${index}`}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      data-cy={`footer-quick-link-${index}`}
                      className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      data-cy={`footer-quick-link-${index}`}
                      className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div data-cy="footer-contact">
            <h4 data-cy="footer-contact-title" className="text-white font-bold mb-4">
              {content.footer.contactTitle}
            </h4>
            <ul data-cy="footer-contact-list" className="space-y-3 text-gray-500 text-sm">
              <li data-cy="footer-contact-email" className="flex items-center gap-2">
                <svg
                  data-cy="footer-contact-email-icon"
                  className="w-4 h-4 text-cyan-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {content.footer.contact.email}
              </li>
              <li data-cy="footer-contact-phone" className="flex items-center gap-2">
                <svg
                  data-cy="footer-contact-phone-icon"
                  className="w-4 h-4 text-cyan-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {content.footer.contact.phone}
              </li>
              <li data-cy="footer-contact-address" className="flex items-start gap-2">
                <svg
                  data-cy="footer-contact-address-icon"
                  className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {content.footer.contact.address}
              </li>
            </ul>
          </div>
        </div>
        <div
          data-cy="footer-copyright-container"
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm"
        >
          <p data-cy="footer-copyright">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

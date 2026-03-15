import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";

export const Footer = () => {
  const product = [{ title: "Features", href: "/#overview" }];

  const company = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Pricing", href: "/pricing" },
  ];

  const legal = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="mt-4 max-w-lg text-left">
            For Broker/Owners & Team Leaders
          </SubHeading>
          <Button
            data-cal-namespace="zoom"
            data-cal-link="mvalentine/zoom"
            data-cal-config='{"layout":"month_view"}'
            variant="brand"
            className="mt-4 mb-8 lg:mb-0"
          >
            Schedule a Review
          </Button>
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Product</p>
          {product.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Company</p>
          {company.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Legal</p>
          {legal.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
        <p className="text-footer-link text-sm">
          © 2026 Brokerage Insight. All rights reserved.
        </p>
        <div className="mt-4 flex items-center gap-4 md:mt-0">
          <Link
            href="https://www.facebook.com/brokeragegrowth"
            className="text-footer-link transition-colors hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/brokeragegrowth/?hl=en"
            className="text-footer-link transition-colors hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/company/brokerage-growth/posts/?feedView=all"
            className="text-footer-link transition-colors hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
    </Container>
  );
};

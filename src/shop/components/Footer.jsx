import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex justify-center border-t ">
      <div className="bg-background mx-3 w-[1200px]">
        <div className="container py-6 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold  text-blue-950">
                Help & Support
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    685 Market Street,Las Vegas, LA 95820,United States.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-muted-foreground">(+099) 532-786-9843</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-muted-foreground">support@example.com</p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-950 ">Account</h3>
              <div className="space-y-2">
                <div>
                  <Link
                    to="/login"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Login / Register
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cart
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Wishlist
                  </Link>
                </div>
                <div>
                  <Link
                    to="/shop"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-950">Quick Link</h3>
              <div className="space-y-2">
                <div>
                  <Link
                    to="/privacy-policy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link
                    to="/refund-policy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Refund Policy
                  </Link>
                </div>
                <div>
                  <Link
                    to="/terms-of-use"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Use
                  </Link>
                </div>
                <div>
                  <Link
                    to="/faqs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQ's
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-950">Download App</h3>
              <p className="text-muted-foreground">
                Save $3 With App & New User only
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-blue-950 text-white hover:bg-blue-800 border-0 h-14 justify-start gap-2">
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
                    className="h-6 w-6"
                  >
                    <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M3 11h18" />
                    <path d="m16 19 2 2 4-4" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-base font-semibold">App Store</span>
                  </div>
                </Button>
                <Button className="w-full bg-blue-800 text-white hover:bg-blue-600 hover:text-white border-0 h-14 justify-start gap-2">
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
                    className="h-6 w-6"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Get in On</span>
                    <span className="text-base font-semibold">Google Play</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025. All rights reserved by ACM Continental.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">We Accept:</span>
              <div className="flex items-center gap-2">
                <img
                  src="https://demo.nextmerce.com/images/payment/payment-01.svg"
                  alt="Visa"
                  className="h-4"
                />
                <img
                  src="https://demo.nextmerce.com/images/payment/payment-02.svg"
                  alt="PayPal"
                  className="h-4"
                />
                <img
                  src="https://demo.nextmerce.com/images/payment/payment-03.svg"
                  alt="Mastercard"
                  className="h-5"
                />
                <img
                  src="https://demo.nextmerce.com/images/payment/payment-04.svg"
                  alt="Apple Pay"
                  className="h-4"
                />
                <img
                  src="https://demo.nextmerce.com/images/payment/payment-05.svg"
                  alt="Google Pay"
                  className="h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

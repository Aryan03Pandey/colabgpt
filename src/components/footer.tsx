import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, ChefHat, Mail, Phone, MapPin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <ChefHat className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold font-satisfy">Nutriwise</span>
                    </Link>
                    <p className="text-gray-400 font-lato">Empowering food lovers to create, share, and discover culinary masterpieces.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition" aria-label="Facebook">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition" aria-label="Twitter">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition" aria-label="Instagram">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold font-playfair">Quick Links</h3>
                    <ul className="space-y-2 font-lato">
                        <li><Link href="/recipes" className="hover:text-primary transition">Recipes</Link></li>
                        <li><Link href="/categories" className="hover:text-primary transition">Categories</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold font-playfair">Contact Us</h3>
                    <ul className="space-y-2 font-lato">
                        <li className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>123 Culinary Street, Foodie City, FC 12345</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone className="h-5 w-5 text-primary" />
                            <span>(123) 456-7890</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-primary" />
                            <span>contact@nutriwise.com</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold font-playfair">Newsletter</h3>
                    <p className="text-gray-400 font-lato">Subscribe to our newsletter for the latest recipes and cooking tips.</p>
                    <form className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Your email address"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                            aria-label="Email for newsletter"
                        />
                        <Button type="submit" className="w-full">Subscribe</Button>
                    </form>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm font-lato mb-4 md:mb-0">
                        © {new Date().getFullYear()} Nutriwise. All rights reserved.
                    </p>
                    <div className="flex space-x-6 font-lato text-sm">
                        <Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-primary transition">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
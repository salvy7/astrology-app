'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Moon, 
  Sun, 
  Heart, 
  Briefcase, 
  Users, 
  TrendingUp,
  Clock,
  Shield,
  Zap,
  MessageCircle,
  Calendar,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">Divine Connect</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">How It Works</a>
              <a href="#astrologers" className="text-gray-700 hover:text-primary-600 transition">Astrologers</a>
              <Link href="/login" className="text-gray-700 hover:text-primary-600 transition">Login</Link>
              <Link href="/dashboard" className="btn-primary">Get Started</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-primary-600">Features</a>
              <a href="#services" className="block text-gray-700 hover:text-primary-600">Services</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-primary-600">How It Works</a>
              <a href="#astrologers" className="block text-gray-700 hover:text-primary-600">Astrologers</a>
              <Link href="/login" className="block text-gray-700 hover:text-primary-600">Login</Link>
              <Link href="/dashboard" className="block btn-primary text-center">Get Started</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Trusted <span className="gradient-text">Astrology Partner</span> for Life's Journey
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with expert Vedic astrologers 24/7. Get personalized guidance for relationships, 
                career, health, and life decisions. Ancient wisdom meets modern convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="btn-primary flex items-center justify-center">
                  Start Free Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="btn-secondary">Watch How It Works</button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500K+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-gray-600">Expert Astrologers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-gray-600">Availability</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-primary-600 to-orange-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-6 text-center">
                      <Moon className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                      <div className="text-sm font-semibold">Birth Chart Analysis</div>
                    </div>
                    <div className="bg-orange-100 rounded-xl p-4 text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
                      <div className="text-xs font-medium">Love</div>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 text-center">
                      <Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-xs font-medium">Career</div>
                    </div>
                    <div className="bg-green-100 rounded-xl p-4 text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <div className="text-xs font-medium">Finance</div>
                    </div>
                    <div className="col-span-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 flex items-center justify-center space-x-3">
                      <Star className="w-10 h-10 text-yellow-600" />
                      <div className="text-left">
                        <div className="text-sm font-semibold">AI-Powered Insights</div>
                        <div className="text-xs text-gray-600">Instant accurate predictions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Divine Connect?</h2>
            <p className="text-xl text-gray-600">Ancient wisdom powered by modern technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Get instant guidance anytime, anywhere. Our expert astrologers are available round the clock 
                to help you navigate life&apos;s challenges.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Accuracy</h3>
              <p className="text-gray-600">
                Advanced AI analyzes your birth chart with precision, providing deeper insights and 
                more accurate predictions than ever before.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Confidential</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All consultations are completely confidential and secure, 
                just like your family astrologer.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Experts</h3>
              <p className="text-gray-600">
                Connect with authenticated Vedic astrologers with years of experience in traditional 
                and modern astrological practices.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-lingual Support</h3>
              <p className="text-gray-600">
                Chat in your preferred language - Hindi, English, Tamil, Telugu, and more. 
                Feel comfortable sharing your concerns.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Guidance</h3>
              <p className="text-gray-600">
                Get guidance on relationships, career, health, finance, and spiritual growth. 
                Focus on actionable karma for positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive astrological guidance for every aspect of life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Love & Relationships</h3>
              <p className="text-gray-600 text-sm">
                Compatibility analysis, marriage timing, relationship counseling
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Career & Business</h3>
              <p className="text-gray-600 text-sm">
                Career guidance, business timing, job changes, promotions
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Finance & Wealth</h3>
              <p className="text-gray-600 text-sm">
                Investment timing, financial planning, wealth predictions
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 hover:shadow-xl transition">
              <Sun className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Health & Wellness</h3>
              <p className="text-gray-600 text-sm">
                Health predictions, wellness guidance, preventive measures
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition">
              <Moon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Birth Chart Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive Kundli analysis, planetary positions, doshas
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 hover:shadow-xl transition">
              <Calendar className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Muhurat Selection</h3>
              <p className="text-gray-600 text-sm">
                Auspicious timing for weddings, ventures, property purchase
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition">
              <Star className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Gemstone Consultation</h3>
              <p className="text-gray-600 text-sm">
                Personalized gemstone recommendations for planetary balance
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition">
              <Sparkles className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Remedies & Rituals</h3>
              <p className="text-gray-600 text-sm">
                Practical remedies, mantras, and rituals for positive energy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and enter your birth details - date, time, and place. 
                Our AI instantly generates your personalized birth chart.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Astrologer</h3>
              <p className="text-gray-600">
                Browse our verified astrologers, read reviews, and select the expert 
                who resonates with your needs and language preference.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Get Guidance</h3>
              <p className="text-gray-600">
                Start your consultation via chat, voice, or video call. 
                Get actionable insights and remedies for a better life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500,000+ users who trust Divine Connect for guidance. 
            Start your journey towards clarity and peace today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Consultation
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold">Divine Connect</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in Vedic astrology. Ancient wisdom for modern life.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400">Birth Chart</a></li>
                <li><a href="#" className="hover:text-primary-400">Kundli Matching</a></li>
                <li><a href="#" className="hover:text-primary-400">Career Guidance</a></li>
                <li><a href="#" className="hover:text-primary-400">Remedies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400">About Us</a></li>
                <li><a href="#" className="hover:text-primary-400">Our Astrologers</a></li>
                <li><a href="#" className="hover:text-primary-400">Blog</a></li>
                <li><a href="#" className="hover:text-primary-400">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-400">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Divine Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


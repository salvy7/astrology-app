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
                Find <span className="gradient-text">Peace, Clarity & Mental Wellness</span> Through Vedic Wisdom
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your 24/7 companion for life&apos;s uncertainties. Get instant, anonymous guidance for stress, 
                relationships, career decisions, and mental peace. Ancient wisdom for modern mental wellness.
              </p>
              
              {/* Free Trial Banner */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 mb-6 inline-block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-green-900 text-lg">First 5 Minutes FREE</div>
                    <div className="text-green-700 text-sm">No credit card required • 100% Anonymous</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="btn-primary flex items-center justify-center text-lg px-8 py-4">
                  Start Free - No Card Required
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/dashboard" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk Now - Get Help
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500K+</div>
                  <div className="text-gray-600">Found Peace</div>
                </div>
                <div className="relative">
                  <div className="absolute -top-1 -right-1">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">127</div>
                  <div className="text-gray-600">Online Now</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">&lt;2 min</div>
                  <div className="text-gray-600">Avg Response</div>
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
            <h2 className="text-4xl font-bold mb-4">Your Mental Wellness Companion</h2>
            <p className="text-xl text-gray-600">Private, instant, and action-focused guidance for modern life</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-2 border-green-200 bg-green-50">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Anonymous</h3>
              <p className="text-gray-600">
                Complete privacy guaranteed. No judgment, no questions about your identity. 
                Talk freely about stress, anxiety, and personal concerns. Your family astrologer can&apos;t offer this.
              </p>
            </div>

            <div className="card border-2 border-blue-200 bg-blue-50">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Relief</h3>
              <p className="text-gray-600">
                Get answers in under 2 minutes. 127 astrologers online now ready to help with your stress, 
                anxiety, and life decisions. No waiting, no appointments needed.
              </p>
            </div>

            <div className="card border-2 border-purple-200 bg-purple-50">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Action-Focused Solutions</h3>
              <p className="text-gray-600">
                Not just predictions - get practical karma-based actions you can take today. 
                Clear steps to reduce stress, improve relationships, and find mental peace.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mental Wellness Experts</h3>
              <p className="text-gray-600">
                1000+ verified astrologers trained in combining Vedic wisdom with modern mental wellness approaches. 
                Get empathetic, judgment-free guidance.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speak Your Language</h3>
              <p className="text-gray-600">
                Express yourself freely in Hindi, English, Tamil, Telugu, and 10+ languages. 
                Cultural understanding matters when dealing with stress and family issues.
              </p>
            </div>

            <div className="card">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Crisis Support Available</h3>
              <p className="text-gray-600">
                Feeling overwhelmed? Get immediate support for anxiety, relationship stress, career uncertainty, 
                and life decisions. We&apos;re here for you 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Find Peace in Every Aspect of Life</h2>
            <p className="text-xl text-gray-600">Mental wellness guidance for relationships, career, health, and life decisions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Relationship Stress Relief</h3>
              <p className="text-gray-600 text-sm">
                Marriage conflicts, family tensions, compatibility issues. Find peace and actionable solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Career Anxiety Support</h3>
              <p className="text-gray-600 text-sm">
                Job change stress, promotion anxiety, business decisions. Get clarity and confidence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Financial Worry Relief</h3>
              <p className="text-gray-600 text-sm">
                Money stress, investment anxiety, financial planning. Reduce worry, take right actions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 hover:shadow-xl transition">
              <Sun className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Mental Health Support</h3>
              <p className="text-gray-600 text-sm">
                Stress, anxiety, life uncertainty. Combine Vedic remedies with mental wellness guidance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition">
              <Moon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Understand Your Life Path</h3>
              <p className="text-gray-600 text-sm">
                Birth chart insights to understand your karma and life purpose. Find meaning in uncertainty.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 hover:shadow-xl transition">
              <Calendar className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Life Event Planning</h3>
              <p className="text-gray-600 text-sm">
                Reduce stress around weddings, new ventures, housewarming. Get auspicious timing and peace of mind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition">
              <Star className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Personalized Healing</h3>
              <p className="text-gray-600 text-sm">
                Gemstones, mantras, and meditation for emotional balance and mental peace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition">
              <Sparkles className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Your Action Plan</h3>
              <p className="text-gray-600 text-sm">
                Karma-focused remedies you can do today. Practical actions for positive change, not just predictions.
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


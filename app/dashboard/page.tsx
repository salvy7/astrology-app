'use client';

import { useState } from 'react';
import {
  Sparkles,
  MessageCircle,
  Video,
  Phone,
  User,
  Calendar,
  Star,
  Heart,
  Briefcase,
  TrendingUp,
  Moon,
  Sun,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
  Award,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">Divine Connect</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <button className="relative hover:text-primary-600 transition">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </button>
              <button className="hover:text-primary-600 transition">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div className="hidden md:block">
                  <div className="font-semibold">Rahul Kumar</div>
                  <div className="text-xs text-gray-500">Premium Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'home' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'consultations' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Consultations</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('birthchart')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'birthchart' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <span className="font-medium">Birth Chart</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('astrologers')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'astrologers' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Astrologers</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'history' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">History</span>
                </button>

                <div className="pt-4 border-t">
                  <Link href="/" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition text-red-600">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, Rahul!</h1>
                  <p className="text-primary-100 mb-6">
                    Your personalized astrological insights are ready
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat with Astrologer
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white px-6 py-3 rounded-lg font-semibold transition flex items-center">
                      <Video className="w-5 h-5 mr-2" />
                      Video Call
                    </button>
                  </div>
                </div>
                <Sun className="w-24 h-24 opacity-20" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-500">This Month</span>
                </div>
                <div className="text-3xl font-bold mb-1">12</div>
                <div className="text-gray-600">Consultations</div>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-500">Active</span>
                </div>
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-gray-600">Ongoing Queries</div>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-500">Status</span>
                </div>
                <div className="text-3xl font-bold mb-1 gradient-text">Premium</div>
                <div className="text-gray-600">Member</div>
              </div>
            </div>

            {/* Today's Horoscope */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Today&apos;s Horoscope</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Moon className="w-4 h-4" />
                  <span>Taurus • Nov 22, 2025</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">A day of new opportunities</div>
                    <p className="text-gray-700 mb-4">
                      Today brings favorable planetary alignments for career growth and financial gains. 
                      Venus in your 10th house suggests recognition from superiors. However, avoid making 
                      hasty decisions in personal relationships. The evening is auspicious for new ventures.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Lucky Color: <span className="font-semibold">Green</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">Lucky Number: <span className="font-semibold">7</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Mood: <span className="font-semibold">Optimistic</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Astrologers */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Talk to Astrologers</h2>
                <button className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                  View All <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, expertise, language..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {/* Astrologer 1 */}
                <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          PT
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Pt. Rajesh Sharma</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                            4.9 (2,500+ reviews)
                          </span>
                          <span>•</span>
                          <span>15 years exp.</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            Vedic Astrology
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            Career
                          </span>
                          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                            Marriage
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Hindi, English • Specializes in Kundli matching and career guidance
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-600">₹20/min</div>
                        <div className="text-xs text-gray-500">Chat available</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                          <Video className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Astrologer 2 */}
                <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          DM
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Dr. Meena Patel</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                            4.8 (1,800+ reviews)
                          </span>
                          <span>•</span>
                          <span>12 years exp.</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            Relationships
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            Finance
                          </span>
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            Remedies
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Hindi, Gujarati, English • Expert in love compatibility
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-600">₹25/min</div>
                        <div className="text-xs text-gray-500">All modes available</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                          <Video className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Astrologer 3 */}
                <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          AS
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white">
                          <Clock className="w-4 h-4 text-white m-auto mt-0.5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Acharya Suresh Kumar</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                            5.0 (3,200+ reviews)
                          </span>
                          <span>•</span>
                          <span>20 years exp.</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            Business
                          </span>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            Muhurat
                          </span>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">
                            Vastu
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Hindi, Tamil, Telugu, English • Business & investment expert
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-600">₹30/min</div>
                        <div className="text-xs text-yellow-600 font-medium">Busy - Wait 5 min</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
                          <Calendar className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
                <Heart className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Kundli Matching</h3>
                <p className="text-gray-600 mb-4">
                  Check compatibility for marriage with detailed Kundli analysis
                </p>
                <button className="text-red-600 font-semibold flex items-center">
                  Start Matching <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
                <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Career Report</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed insights about your career path and opportunities
                </p>
                <button className="text-blue-600 font-semibold flex items-center">
                  Get Report <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Financial Forecast</h3>
                <p className="text-gray-600 mb-4">
                  Understand your financial future and investment timing
                </p>
                <button className="text-green-600 font-semibold flex items-center">
                  View Forecast <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 hover:shadow-xl transition cursor-pointer">
                <Moon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Remedies</h3>
                <p className="text-gray-600 mb-4">
                  Get customized mantras, gemstones, and remedies for your chart
                </p>
                <button className="text-purple-600 font-semibold flex items-center">
                  Get Remedies <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


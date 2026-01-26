"use client";

import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Heart,
  Calendar,
  Users,
  Mail,
  Bell,
  Clock,
  Check,
  ArrowUp,
  Play,
  UserPlus,
  BookOpen,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ChurchWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWatchLive, setShowWatchLive] = useState(false);
  const [showJoinFamily, setShowJoinFamily] = useState(false);
  const [membershipFormOpen, setMembershipFormOpen] = useState(false);
  const [covenantModalOpen, setCovenantModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [prayerRequests, setPrayerRequests] = useState([
    {
      id: 1,
      name: "Sarah M.",
      request: "Healing for my mother who is recovering from surgery",
      prayers: 24,
      date: "2 days ago",
      category: "Health",
    },
    {
      id: 2,
      name: "Anonymous",
      request: "Guidance in career decision and job search",
      prayers: 18,
      date: "3 days ago",
      category: "Guidance",
    },
    {
      id: 3,
      name: "John D.",
      request: "Thanksgiving for answered prayers - new job!",
      prayers: 42,
      date: "1 week ago",
      category: "Praise",
    },
  ]);

  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const leadership = [
    {
      name: "Bishop Theodis Cochran, Jr.",
      title: "Senior Pastor",
      bio: "Leading our congregation with passion, wisdom, and a heart for building a Spirit-led church family",
      photo: "https://i.imgur.com/o94lsxS.jpg",
    },
    {
      name: "Elder Danielle Martin",
      title: "Digital Ministry & Member Engagement",
      bio: "Overseeing digital ministry initiatives and church operational excellence",
      photo: "https://i.imgur.com/deXVPfH.jpg",
    },
    {
      name: "Minister Tejwana Hinton-Young",
      title: "Digital Ministry & Member Engagement",
      bio: "Leading digital outreach and fostering meaningful member connections",
      photo: "https://i.imgur.com/Q4Krh7b.jpg",
    },
  ];

  const ministries = [
    {
      name: "Worship Ministry",
      description:
        "Lead our congregation in meaningful worship through music and arts",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "🎵",
    },
    {
      name: "Youth Ministry",
      description:
        "Building community and faith for middle and high school students",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "🎒",
    },
    {
      name: "Women's Ministry",
      description: "Empowering women to grow in faith and fellowship together",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "👩",
    },
    {
      name: "Men's Ministry",
      description:
        "Equipping men to be spiritual leaders in their homes and community",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "👨",
    },
    {
      name: "Outreach Ministry",
      description:
        "Serving our community and sharing God's love in practical ways",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "🤝",
    },
    {
      name: "Hospitality Ministry",
      description:
        "Creating a welcoming environment for all who enter our doors",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "🏠",
    },
    {
      name: "Media Ministry",
      description:
        "Capturing and sharing our worship experiences through digital platforms",
      leader: "Contact: info@trinityallnationschurch-memphis.com",
      icon: "📹",
    },
    {
      name: "Prayer Ministry",
      description: "Interceding for our church family and community needs",
      leader: "Contact: prayer@trinityallnationschurch-memphis.com",
      icon: "🙏",
    },
  ];

  const events = [
    {
      title: "Sunday School",
      date: "Every Sunday",
      time: "9:30 AM",
      category: "Education",
    },
    {
      title: "Sunday Morning Worship",
      date: "Every Sunday",
      time: "10:30 AM",
      category: "Worship",
    },
    {
      title: "Thursday Prayer Call",
      date: "Every Thursday",
      time: "7:00 PM",
      category: "Prayer",
      details: "Call: 712-832-8599 | Code: 3187326 | Press *6 to unmute",
    },
  ];

  const archivedVideos = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "January 12, 2025",
      duration: "1:45:30",
      views: "245",
    },
    {
      id: 2,
      title: "Sunday Worship Service",
      date: "January 5, 2025",
      duration: "1:52:15",
      views: "312",
    },
    {
      id: 3,
      title: "New Year Service",
      date: "December 31, 2024",
      duration: "2:15:45",
      views: "489",
    },
    {
      id: 4,
      title: "Christmas Service",
      date: "December 25, 2024",
      duration: "2:05:20",
      views: "556",
    },
    {
      id: 5,
      title: "Sunday Worship Service",
      date: "December 22, 2024",
      duration: "1:42:10",
      views: "267",
    },
    {
      id: 6,
      title: "Sunday Worship Service",
      date: "December 15, 2024",
      duration: "1:48:35",
      views: "298",
    },
  ];

  const quizQuestions = [
    {
      id: "q1",
      question: "What is our church mission?",
      options: [
        "To build a large congregation",
        "To glorify God by building a Bible-based, Spirit-led church family where no one walks alone",
        "To raise funds for community projects",
        "To host weekly events",
      ],
      correct:
        "To glorify God by building a Bible-based, Spirit-led church family where no one walks alone",
    },
    {
      id: "q2",
      question: "What time is Sunday Morning Worship?",
      options: ["9:00 AM", "9:30 AM", "10:30 AM", "11:00 AM"],
      correct: "10:30 AM",
    },
    {
      id: "q3",
      question:
        "According to Romans 12:5, what does it say about believers in Christ?",
      options: [
        "We are all independent",
        "We form one body and each member belongs to all the others",
        "We should worship separately",
        "We are all leaders",
      ],
      correct: "We form one body and each member belongs to all the others",
    },
    {
      id: "q4",
      question: "When is our Thursday Prayer Call?",
      options: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
      correct: "7:00 PM",
    },
  ];

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "ministries", label: "Ministries" },
    { id: "services", label: "Services" },
    { id: "devotional", label: "Devotional" },
    { id: "livestream", label: "Live Stream" },
    { id: "events", label: "Events" },
    { id: "giving", label: "Giving" },
    { id: "prayer", label: "Prayer" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setShowWatchLive(window.scrollY > 300);
      setShowJoinFamily(window.scrollY > 400);

      const sections = [
        "home",
        "about",
        "ministries",
        "services",
        "devotional",
        "livestream",
        "events",
        "giving",
        "prayer",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrayerClick = (id: number) => {
    setPrayerRequests(
      prayerRequests.map((req) =>
        req.id === id ? { ...req, prayers: req.prayers + 1 } : req,
      ),
    );
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen bg-white" suppressHydrationWarning>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.imgur.com/e8pX83l.png"
                  alt="Trinity All Nations Church- Memphis Logo"
                  className="h-14 w-auto"
                />
                <div className="hidden sm:block">
                  <h1 className="text-base lg:text-lg font-bold text-gray-900 leading-tight">
                    Trinity All Nations Church- Memphis
                  </h1>
                </div>
              </div>

              <div className="hidden xl:block">
                <div className="flex items-center space-x-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white"
                          : item.id === "giving"
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="xl:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

         <AnimatePresence mode="wait">
  {mobileMenuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="xl:hidden bg-white border-t border-gray-200 overflow-hidden"
    >
      <div className="px-4 py-3 space-y-1">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
              activeSection === item.id
                ? "bg-blue-600 text-white"
                : item.id === "giving"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://i.imgur.com/QqrZwzg.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-20"
          >
            <div className="mb-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/30 shadow-2xl">
                <img
                  src="https://i.imgur.com/e8pX83l.png"
                  alt="Trinity All Nations Church- Memphis Logo"
                  className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto mx-auto"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Welcome Home
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light max-w-3xl mx-auto">
              A place where faith, hope, and love come together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={() => scrollToSection("livestream")}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 font-semibold shadow-lg"
              >
                <Play className="mr-2" size={24} />
                Watch Live
              </Button>
              <Button
                onClick={() => setMembershipFormOpen(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 font-semibold shadow-lg"
              >
                <UserPlus className="mr-2" size={24} />
                Join Our Family
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 font-semibold shadow-lg"
              >
                Learn More <ChevronRight className="ml-2" size={24} />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-4 shadow-lg"
              >
                Visit Us
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-4 shadow-lg"
              >
                <Clock className="mr-2" size={20} />
                Service Times
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
                About Our Church
              </h2>
              <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
                Building a Bible-based, Spirit-led church family where no one
                walks alone
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      We envision a church that feels like home—a place where
                      lives are changed by the love of Jesus Christ, where the
                      Word of God is alive and active, and where the Holy Spirit
                      leads us daily.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
                      &quot;So in Christ we, though many, form one body, and
                      each member belongs to all the others&quot; (Romans 12:5).
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Our vision is to be that body—connected, compassionate,
                      and committed—reflecting Christ to our community and
                      beyond.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base leading-relaxed mb-4 font-semibold">
                      To glorify God by building a Bible-based, Spirit-led
                      church family where no one walks alone.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base mb-4">
                      <li className="flex items-start">
                        <Check
                          className="mr-3 mt-1 text-blue-600 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          Teach and live the Word of God with truth and grace
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check
                          className="mr-3 mt-1 text-blue-600 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          Create a loving community where people are valued
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check
                          className="mr-3 mt-1 text-blue-600 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          Grow disciples who walk boldly in their purpose
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check
                          className="mr-3 mt-1 text-blue-600 flex-shrink-0"
                          size={20}
                        />
                        <span>
                          Reach the lost and bring hope to our community
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Church Covenant Section */}
              <div className="mb-20">
                <Card className="shadow-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <FileText className="text-white" size={32} />
                      </div>
                    </div>
                    <CardTitle className="text-3xl text-gray-900">
                      Our Church Covenant
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      The sacred commitments we make to God and to one another
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-3xl mx-auto">
                      Our church covenant represents the promises we make as a
                      community of believers, outlining our commitment to walk
                      together in Christian love, support one another in faith,
                      and serve God with unity and purpose.
                    </p>
                    <Button
                      onClick={() => setCovenantModalOpen(true)}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <FileText className="mr-2" size={20} />
                      Read Our Church Covenant
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our Leadership
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {leadership.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                            <img
                              src={leader.photo}
                              alt={leader.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <CardTitle className="text-lg text-gray-900">
                          {leader.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {leader.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{leader.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ministries Section */}
        <section id="ministries" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
              Our Ministries
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16">
              Discover ways to serve and grow in faith
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministries.map((ministry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                    <CardHeader>
                      <div className="text-4xl mb-4">{ministry.icon}</div>
                      <CardTitle className="text-xl text-gray-900">
                        {ministry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 text-base leading-relaxed">
                        {ministry.description}
                      </p>
                      <p className="text-sm text-blue-600 font-medium mb-4">
                        {ministry.leader}
                      </p>
                      <Button
                        className="mt-4 w-full border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                        variant="outline"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Times Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-blue-600 to-blue-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-white">
                Service Times
              </h2>
              <p className="text-center text-lg md:text-xl mb-16 text-blue-100">
                Join us for worship and fellowship
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Clock className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Sunday School
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold mb-2 text-blue-600">
                      9:30 AM
                    </p>
                    <p className="text-gray-600 text-base mb-3">Every Sunday</p>
                    <p className="text-gray-700 text-sm">
                      Bible study and fellowship for all ages
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Users className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Sunday Worship
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold mb-2 text-blue-600">
                      10:30 AM
                    </p>
                    <p className="text-gray-600 text-base mb-3">Every Sunday</p>
                    <p className="text-gray-700 text-sm">
                      Powerful worship and inspiring messages
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bell className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      Prayer Call
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold mb-2 text-blue-600">
                      7:00 PM
                    </p>
                    <p className="text-gray-600 text-base mb-3">
                      Every Thursday
                    </p>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-700 font-medium">
                        712-832-8599
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        Code: 3187326
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Press *6 to unmute
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="text-center lg:text-left">
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      Our Location
                    </h3>
                    <p className="text-lg text-white">2383 Norman Ave</p>
                    <p className="text-lg text-white mb-4">Memphis, TN 38108</p>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>

                <Card className="bg-white shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      Find Us
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      2383 Norman Ave, Memphis, TN 38108
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border-2 border-gray-300">
                      <p className="text-gray-600 text-base">
                        Interactive map would be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Weekly Devotional Section */}
        <section id="devotional" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <BookOpen className="mx-auto mb-4 text-blue-600" size={48} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Weekly Devotional
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  New devotional released every Wednesday at 6:30 PM
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      This Week&apos;s Devotional
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      Walking in Faith: Trusting God&apos;s Plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Scripture Focus
                      </h4>
                      <p className="text-gray-700 italic mb-4">
                        &quot;Trust in the LORD with all your heart and lean not
                        on your own understanding; in all your ways submit to
                        him, and he will make your paths straight.&quot; -
                        Proverbs 3:5-6
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Points
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Check
                            className="mr-2 mt-1 text-blue-600 flex-shrink-0"
                            size={18}
                          />
                          <span>
                            Understanding God&apos;s sovereignty in our lives
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check
                            className="mr-2 mt-1 text-blue-600 flex-shrink-0"
                            size={18}
                          />
                          <span>
                            Letting go of our own plans to embrace His will
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check
                            className="mr-2 mt-1 text-blue-600 flex-shrink-0"
                            size={18}
                          />
                          <span>
                            Finding peace in uncertainty through faith
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <BookOpen className="mr-2" size={18} />
                      Read Full Devotional
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Interactive Bible Quiz
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      Test your knowledge about our church and faith
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!quizSubmitted ? (
                      <form onSubmit={handleQuizSubmit} className="space-y-6">
                        {quizQuestions.map((q, index) => (
                          <div key={q.id} className="space-y-3">
                            <Label className="text-sm font-semibold text-gray-900">
                              {index + 1}. {q.question}
                            </Label>
                            <RadioGroup
                              value={quizAnswers[q.id] || ""}
                              onValueChange={(value) =>
                                setQuizAnswers({
                                  ...quizAnswers,
                                  [q.id]: value,
                                })
                              }
                            >
                              {q.options.map((option, optIndex) => (
                                <div
                                  key={optIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <RadioGroupItem
                                    value={option}
                                    id={`${q.id}-${optIndex}`}
                                  />
                                  <Label
                                    htmlFor={`${q.id}-${optIndex}`}
                                    className="text-sm text-gray-700 cursor-pointer"
                                  >
                                    {option}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        ))}
                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Submit Quiz
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="mb-6">
                          <div className="text-6xl font-bold text-blue-600 mb-2">
                            {quizScore}/{quizQuestions.length}
                          </div>
                          <p className="text-xl text-gray-900 font-semibold mb-2">
                            {quizScore === quizQuestions.length
                              ? "Perfect Score!"
                              : quizScore >= quizQuestions.length * 0.75
                                ? "Great Job!"
                                : quizScore >= quizQuestions.length * 0.5
                                  ? "Good Effort!"
                                  : "Keep Learning!"}
                          </p>
                          <p className="text-gray-600">
                            You got {quizScore} out of {quizQuestions.length}{" "}
                            questions correct
                          </p>
                        </div>
                        <div className="space-y-4 mb-6">
                          {quizQuestions.map((q, index) => (
                            <div
                              key={q.id}
                              className={`p-4 rounded-lg ${quizAnswers[q.id] === q.correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                            >
                              <p className="font-semibold text-gray-900 mb-2">
                                {index + 1}. {q.question}
                              </p>
                              <p className="text-sm text-gray-700">
                                Your answer:{" "}
                                <span
                                  className={
                                    quizAnswers[q.id] === q.correct
                                      ? "text-green-700 font-semibold"
                                      : "text-red-700"
                                  }
                                >
                                  {quizAnswers[q.id]}
                                </span>
                              </p>
                              {quizAnswers[q.id] !== q.correct && (
                                <p className="text-sm text-green-700 mt-1">
                                  Correct answer:{" "}
                                  <span className="font-semibold">
                                    {q.correct}
                                  </span>
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={resetQuiz}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Take Quiz Again
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live Stream Section */}
        <section id="livestream" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
                Live Stream
              </h2>
              <p className="text-center text-lg text-gray-600 mb-16">
                Join us online for worship services
              </p>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-gray-900">
                          Sunday Service Live
                        </CardTitle>
                        <span className="px-4 py-2 bg-red-600 text-white text-sm rounded-full font-semibold flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                          LIVE
                        </span>
                      </div>
                      <CardDescription className="text-base text-gray-600">
                        Streaming every Sunday at 10:30 AM
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                        <div className="text-center text-white">
                          <Play className="mx-auto mb-4" size={64} />
                          <p className="text-xl font-semibold mb-2">
                            Live Stream Player
                          </p>
                          <p className="text-gray-300 mb-6">
                            Stream will appear here during service times
                          </p>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Watch on Facebook Live
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          Watch on Facebook
                        </Button>
                        <Button
                          variant="outline"
                          className="border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                        >
                          <Bell className="mr-2" size={18} />
                          Get Notifications
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        Upcoming Services
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="font-semibold text-gray-900 mb-1">
                          Sunday Worship
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          This Sunday at 10:30 AM
                        </p>
                        <Button
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Set Reminder
                        </Button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">
                          Thursday Prayer
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          This Thursday at 7:00 PM
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-2 border-gray-300 text-gray-700 hover:bg-blue-50"
                        >
                          Set Reminder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        Follow Us
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        Stay connected on social media
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                      >
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Follow on Facebook
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-2 border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-600"
                      >
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Subscribe on YouTube
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Archived Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archivedVideos.map((video) => (
                  <Card
                    key={video.id}
                    className="hover:shadow-xl transition-shadow border-0 shadow-lg"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-900 rounded-t-lg flex items-center justify-center relative">
                        <Play className="text-white" size={48} />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {video.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {video.date}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span>{video.views} views</span>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Play className="mr-2" size={16} />
                          Watch on Facebook
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                >
                  View All Archived Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
              Upcoming Events
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16">
              Join us for fellowship and spiritual growth
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow border-0 shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-gray-900">
                        {event.title}
                      </CardTitle>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {event.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      <p className="flex items-center text-gray-700 text-sm">
                        <Calendar
                          className="mr-2 text-blue-600 flex-shrink-0"
                          size={18}
                        />
                        {event.date}
                      </p>
                      <p className="flex items-center text-gray-700 text-sm">
                        <Clock
                          className="mr-2 text-blue-600 flex-shrink-0"
                          size={18}
                        />
                        {event.time}
                      </p>
                      {event.details && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-xs text-gray-700 leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      )}
                    </div>
                    <Button
                      className="w-full border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                      variant="outline"
                    >
                      More Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Giving Section */}
        <section
          id="giving"
          className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
              Give
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16">
              Support our mission to serve God and community
            </p>

            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Your generous giving helps us fulfill our mission to know Christ
                and make Him known. Every gift makes a difference in our
                community and beyond.
              </p>
              <p className="text-sm text-gray-600">
                All donations are tax-deductible. Trinity All Nations Church-
                Memphis is a 501(c)(3) organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow border-2 border-yellow-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <svg
                      className="w-6 h-6 mr-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    CashApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Send your gift directly through CashApp for quick and easy
                    giving.
                  </p>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-2xl font-bold text-green-700 text-center">
                      $REBerry1974
                    </p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-6">
                    Open CashApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2 border-yellow-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Heart className="mr-3 text-purple-600" size={24} />
                    Givelify
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Give securely through Givelify with credit card, debit card,
                    or bank transfer.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base py-6">
                    Give via Givelify
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2 border-yellow-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Mail className="mr-3 text-blue-600" size={24} />
                    Zelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    Send your gift through Zelle for instant bank-to-bank
                    transfer.
                  </p>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm font-bold text-blue-700 text-center break-all">
                      trinallnatmbc@aol.com
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-6">
                    Open Zelle
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto border-2 border-yellow-300 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Other Ways to Give
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-base">
                    You can also give by mailing a check to our church address
                    or giving in person during any service.
                  </p>
                  <p className="text-sm text-gray-700 font-medium">
                    2383 Norman Ave
                    <br />
                    Memphis, TN 38108
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prayer Request Section */}
        <section id="prayer" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
              Prayer Requests
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16">
              Share your needs and pray for others
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Submit a Prayer Request
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      Share your prayer needs with our church family
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <Label
                          htmlFor="prayer-name"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Your Name (Optional)
                        </Label>
                        <Input
                          id="prayer-name"
                          placeholder="Enter your name or remain anonymous"
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="prayer-request"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Prayer Request
                        </Label>
                        <Textarea
                          id="prayer-request"
                          placeholder="Share your prayer request..."
                          rows={5}
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="prayer-category"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Category
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="prayer-category"
                            className="mt-2 text-base border-2 border-gray-300"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="health">Health</SelectItem>
                            <SelectItem value="guidance">Guidance</SelectItem>
                            <SelectItem value="praise">Praise</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6"
                      >
                        Submit Prayer Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Recent Prayer Requests
                </h3>
                <div className="space-y-6">
                  {prayerRequests.map((request) => (
                    <Card
                      key={request.id}
                      className="hover:shadow-xl transition-shadow border-0 shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-gray-900">
                              {request.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600">
                              {request.date} • {request.category}
                            </CardDescription>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                            {request.prayers} praying
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                          {request.request}
                        </p>
                        <Button
                          onClick={() => handlePrayerClick(request.id)}
                          variant="outline"
                          className="w-full border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                        >
                          <Heart className="mr-2" size={16} />
                          I&apos;m Praying
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16">
              We&apos;d love to hear from you
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      Get in touch with our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="contact-name"
                            className="text-sm text-gray-900 font-medium"
                          >
                            Name
                          </Label>
                          <Input
                            id="contact-name"
                            placeholder="Your name"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="contact-email"
                            className="text-sm text-gray-900 font-medium"
                          >
                            Email
                          </Label>
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="your@email.com"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="contact-phone"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Phone (Optional)
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="contact-subject"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Subject
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="contact-subject"
                            className="mt-2 text-base border-2 border-gray-300"
                          >
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="membership">
                              Membership
                            </SelectItem>
                            <SelectItem value="ministry">
                              Ministry Involvement
                            </SelectItem>
                            <SelectItem value="prayer">
                              Prayer Request
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="contact-message"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Your message..."
                          rows={5}
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Address
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        2383 Norman Ave
                        <br />
                        Memphis, TN 38108
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Service Times
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Sunday School: 9:30 AM
                        <br />
                        Sunday Morning Worship: 10:30 AM
                        <br />
                        Thursday Prayer Call: 7:00 PM
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Thursday Prayer Call
                      </h4>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Phone:</strong> 712-832-8599
                          <br />
                          <strong>Code:</strong> 3187326
                          <br />
                          <strong>Note:</strong> Press *6 to unmute
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Contact
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Email: info@trinityallnationschurch-memphis.com
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Church Administration
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Church Clerk:</strong> Sister Quishandrea
                        Williams
                        <br />
                        <strong>Assistant Church Clerk:</strong> Sister Kristi
                        Johnson
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-base">
                        Office Hours
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: By appointment
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      Follow Us Online
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      Stay connected with our community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-600"
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Follow on Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-600"
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Subscribe on YouTube
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="https://i.imgur.com/e8pX83l.png"
                  alt="Trinity All Nations Church- Memphis Logo"
                  className="h-16 w-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-4">
                  Trinity All Nations Church- Memphis
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A place where faith, hope, and love come together to serve God
                  and our community.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("ministries")}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Ministries
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("events")}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Events
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("giving")}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Give
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCovenantModalOpen(true)}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Church Covenant
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <p className="text-gray-300 mb-2 text-sm">2383 Norman Ave</p>
                <p className="text-gray-300 mb-2 text-sm">Memphis, TN 38108</p>
                <p className="text-gray-300 text-sm">
                  info@trinityallnationschurch-memphis.com
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p className="text-sm">
                &copy; 2024 Trinity All Nations Church- Memphis. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Church Covenant Modal */}
        <AnimatePresence>
          {covenantModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setCovenantModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <Card className="border-0">
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          Church Covenant
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                          Trinity All Nations Church- Memphis
                        </CardDescription>
                      </div>
                      <button
                        onClick={() => setCovenantModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      <img
                        src="https://i.imgur.com/eQqOOO5.jpg"
                        alt="Church Covenant"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="text-center">
                      <Button
                        onClick={() => setCovenantModalOpen(false)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Close
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Watch Live Button */}
        <AnimatePresence>
          {showWatchLive && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => scrollToSection("livestream")}
              className="fixed top-24 right-8 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40 flex items-center gap-2 font-semibold"
            >
              <Play size={20} />
              <span className="hidden sm:inline">Watch Live</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Join Our Family Button */}
        <AnimatePresence>
          {showJoinFamily && (
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              onClick={() => setMembershipFormOpen(true)}
              className="fixed top-40 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 flex items-center gap-2 font-semibold"
            >
              <UserPlus size={20} />
              <span className="hidden sm:inline">Join Our Family</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Membership Form Modal */}
        <AnimatePresence>
          {membershipFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setMembershipFormOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <Card className="border-0">
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          Join Our Church Family
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                          We&apos;re excited to welcome you home!
                        </CardDescription>
                      </div>
                      <button
                        onClick={() => setMembershipFormOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="member-first-name"
                            className="text-sm text-gray-900 font-medium"
                          >
                            First Name
                          </Label>
                          <Input
                            id="member-first-name"
                            placeholder="John"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="member-last-name"
                            className="text-sm text-gray-900 font-medium"
                          >
                            Last Name
                          </Label>
                          <Input
                            id="member-last-name"
                            placeholder="Doe"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="member-email"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Email
                        </Label>
                        <Input
                          id="member-email"
                          type="email"
                          placeholder="john.doe@email.com"
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="member-phone"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="member-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="member-address"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Address
                        </Label>
                        <Input
                          id="member-address"
                          placeholder="123 Main Street"
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label
                            htmlFor="member-city"
                            className="text-sm text-gray-900 font-medium"
                          >
                            City
                          </Label>
                          <Input
                            id="member-city"
                            placeholder="Memphis"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="member-state"
                            className="text-sm text-gray-900 font-medium"
                          >
                            State
                          </Label>
                          <Input
                            id="member-state"
                            placeholder="TN"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="member-zip"
                            className="text-sm text-gray-900 font-medium"
                          >
                            ZIP Code
                          </Label>
                          <Input
                            id="member-zip"
                            placeholder="38108"
                            className="mt-2 text-base border-2 border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="member-interest"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Areas of Interest
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="member-interest"
                            className="mt-2 text-base border-2 border-gray-300"
                          >
                            <SelectValue placeholder="Select ministry interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="worship">
                              Worship Ministry
                            </SelectItem>
                            <SelectItem value="youth">
                              Youth Ministry
                            </SelectItem>
                            <SelectItem value="women">
                              Women&apos;s Ministry
                            </SelectItem>
                            <SelectItem value="men">
                              Men&apos;s Ministry
                            </SelectItem>
                            <SelectItem value="outreach">
                              Outreach Ministry
                            </SelectItem>
                            <SelectItem value="hospitality">
                              Hospitality Ministry
                            </SelectItem>
                            <SelectItem value="media">
                              Media Ministry
                            </SelectItem>
                            <SelectItem value="prayer">
                              Prayer Ministry
                            </SelectItem>
                            <SelectItem value="undecided">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="member-message"
                          className="text-sm text-gray-900 font-medium"
                        >
                          Tell Us About Yourself (Optional)
                        </Label>
                        <Textarea
                          id="member-message"
                          placeholder="Share your story, how you found us, or any questions you have..."
                          rows={4}
                          className="mt-2 text-base border-2 border-gray-300"
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-base py-6"
                        >
                          <UserPlus className="mr-2" size={20} />
                          Submit Membership Inquiry
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setMembershipFormOpen(false)}
                          className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// END OF FILE

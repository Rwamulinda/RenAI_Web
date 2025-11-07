import { useState, useEffect } from 'react';
import { Brain, Users, Zap, Target, ArrowRight, Menu, X, CheckCircle2, TrendingUp, FlaskConical, BookOpen } from 'lucide-react';

function useTypeWriter(text, speed = 30) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const missionText = "We bring together AI and Human–Computer Interaction (HCI) to create solutions that are ethical, inclusive, and responsive to real-life challenges. Beyond innovation, we are dedicated to AI literacy and empowerment, teaching people their role, rights, and contributions in the AI ecosystem. Together, we are shaping an AI future that is responsible, people-driven, and proudly African.";
  const typedText = useTypeWriter(missionText, 25);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold">RenAIssance Lab</div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Projects</a>
              <a href="#research" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Research</a>
              <a href="#solutions" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Events</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 text-sm font-medium">About</a>
              <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-600 hover:text-gray-900 py-2 text-sm">Projects</a>
              <a href="#research" className="block text-gray-600 hover:text-gray-900 py-2 text-sm">Research</a>
              <a href="#solutions" className="block text-gray-600 hover:text-gray-900 py-2 text-sm">Events</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 py-2 text-sm">About</a>
              <button className="w-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-5xl">
    <div className="mb-8">
      <img 
        src="/image copy.png" 
        alt="Rwanda AI Research Lab" 
        className="h-40 w-40 mx-auto" 
      />
    </div>
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-black tracking-tight leading-none">
              <span className="text-gray-900">Rene</span>
              <span className="bg-gradient-to-r from-blue-900 to-fuchsia-600 bg-clip-text text-transparent">AI</span>
              <span className="text-gray-900">ssance</span>
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-700 mb-12 leading-relaxed">
            HUMAN-CENTERED AI RESEARCH LAB
          </div>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Pioneering Human-Centered AI Research & Innovation, Empowering Africa to design AI with people at the center
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800">
            Start Your AI Journey
          </button>
        </div>
      </section>

      {/* Mission Section */}
<section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">Our Mission</h2>
    <p className="text-xl text-gray-700 leading-relaxed max-w-full min-h-24">
      {typedText}
      <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-pulse"></span>
    </p>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white-170">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl">
            Comprehensive AI Projects designed to transform our society, we built AI with People 🧠 + 🤖 not for People.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-2xl font-bold mb-3">Safari AI</h3>
              <p className="text-gray-700 mb-4">
                A web platform for AI literacy designed for everyone.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Interactive AI learning through games</li>
                <li>• Understand how AI works in real-life scenarios</li>
                <li>• Improves knowledge and practical AI skills</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Human-Centered AI Research</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl">
            At RenAIssance Lab, we're not just building AI solutions—we're advancing the science of human-centered artificial intelligence through rigorous research and ethical innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Research Focus</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">AI Ethics & Responsible Development</h4>
                  <p className="text-gray-700">Exploring frameworks for ethical AI deployment, bias mitigation, and ensuring AI systems align with human values.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Human-AI Collaboration Models</h4>
                  <p className="text-gray-700">Researching optimal interaction patterns between humans and AI systems to enhance productivity and creativity.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Safety & Reliability</h4>
                  <p className="text-gray-700">Developing methodologies to ensure AI systems are safe, reliable, and behave predictably in real-world scenarios.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Explainable AI Systems</h4>
                  <p className="text-gray-700">Building transparent AI models that can explain their decisions in human-understandable terms.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Research Initiatives</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Human-AI Trust Study</h4>
                    <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1">Ongoing</span>
                  </div>
                  <p className="text-gray-700 text-sm">Investigating factors that build trust between humans and AI agents in enterprise environments.</p>
                  {/* <p className="text-xs text-gray-500 mt-2">Partners: 5 Fortune 500 Companies</p>*/}
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Ethical AI Framework</h4>
                    <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1">Ongoing</span>
                  </div>
                  <p className="text-gray-700 text-sm">A comprehensive framework for evaluating and ensuring ethical AI deployment in organizations.</p>
                  {/*<p className="text-xs text-gray-500 mt-2">Citations: 127 | Downloads: 3.2k</p>*/}
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">AI Workforce Impact Analysis</h4>
                    <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1">Starting Soon </span>
                  </div>
                  <p className="text-gray-700 text-sm">Long-term study on how AI digital employees affect team dynamics, job satisfaction, and productivity.</p>
                  {/*<p className="text-xs text-gray-500 mt-2">Duration: 24 months | Participants: 50+ orgs</p>*/}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded p-12">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold mb-4">Collaborate With Our Research Lab</h3>
              <p className="text-lg text-gray-300 mb-8">
                We partner with universities, research institutions, and forward-thinking organizations to advance the field of human-centered AI. Join us in shaping the future of responsible AI development.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">2+</div>
                  <div className="text-gray-300">Published Papers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-gray-300">Research Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-gray-300">Ongoing Studies</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100">
                  View Research Papers
                </button>
                <button className="border-2 border-white text-white px-6 py-3 font-medium hover:bg-gray-800">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Our AI ecosystem?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Join us to design and evaluate our AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800">
              Schedule a Consultation
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 font-medium hover:bg-gray-50">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold mb-4">RenAIssance Lab</div>
              <p className="text-gray-400 text-sm">
                Human-centered AI innovation for the modern enterprise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">AI Agents</a></li>
                <li><a href="#" className="hover:text-white">Digital Employees</a></li>
                <li><a href="#" className="hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 RenAIssance Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

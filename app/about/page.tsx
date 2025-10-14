export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About ThoughtFlow</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          {/* Mission Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              ThoughtFlow is a platform dedicated to sharing knowledge, insights, and experiences 
              through thoughtfully crafted articles. We believe in the power of words to inspire, 
              educate, and connect people across different domains of expertise.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">For Readers</h3>
                <p className="text-gray-600">
                  Access to high-quality articles across various topics, from technology 
                  and design to productivity and engineering.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">For Writers</h3>
                <p className="text-gray-600">
                  A platform to share your expertise, connect with readers, and contribute 
                  to a growing community of knowledge seekers.
                </p>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Join Our Community</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're here to learn or share your knowledge, ThoughtFlow welcomes you 
              to be part of our growing community. Start reading or writing today and help us 
              build a valuable resource for everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
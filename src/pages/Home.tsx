import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon, BookOpen, Star } from "lucide-react";
import AdBanner from "@/components/AdBanner";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-fantasy font-bold text-primary mb-6 animate-fade-in">
            DisciplineDown
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Discover a mystical collection of fantasy imagery and immersive stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/gallery" className="btn-fantasy">
              Explore Gallery
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/stories" className="btn-ghost-fantasy">
              Read Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <ImageIcon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold mb-3">Fantasy Gallery</h3>
              <p className="text-muted-foreground">
                Curated collection of mystical and elegant imagery with category filters and immersive viewing experience.
              </p>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                <BookOpen className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold mb-3">Immersive Stories</h3>
              <p className="text-muted-foreground">
                Rich narratives spanning different eras and settings, crafted with attention to character development and atmosphere.
              </p>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <Star className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold mb-3">Premium Experience</h3>
              <p className="text-muted-foreground">
                Elegant dark theme with glassmorphism effects, responsive design, and thoughtful user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto flex justify-center">
          <AdBanner size="leaderboard" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-fantasy font-bold text-primary mb-6">
            Begin Your Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Step into a world where discipline meets artistry, where every image tells a story and every story paints a picture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="btn-fantasy">
              View Gallery
            </Link>
            <Link to="/stories" className="btn-ghost-fantasy">
              Read Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Heart, Eye, BookOpen, Users } from "lucide-react";
import AdBanner from "@/components/AdBanner";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-primary mb-4">
            About DisciplineDown
          </h1>
          <p className="text-lg text-muted-foreground">
            A sanctuary for those who appreciate the artistry of discipline and the beauty of storytelling
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass-card p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-fantasy font-semibold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DisciplineDown exists to celebrate the intersection of art, literature, and human experience. 
                We curate a collection that explores themes of growth, transformation, and the beauty found 
                in structured guidance and mentorship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform serves as a digital gallery and library, bringing together visual art and 
                narrative storytelling in a sophisticated, respectful environment that honors both artistic 
                expression and literary craftsmanship.
              </p>
            </div>
            <div className="flex justify-center">
              <AdBanner size="rectangle" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold">Artistic Vision</h3>
            </div>
            <p className="text-muted-foreground">
              We believe in the power of visual storytelling and the emotional resonance that 
              well-crafted imagery can evoke. Every piece in our collection is chosen for its 
              artistic merit and thoughtful composition.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold">Literary Excellence</h3>
            </div>
            <p className="text-muted-foreground">
              Our stories are crafted with attention to character development, historical accuracy, 
              and narrative depth. We honor the tradition of quality literature while exploring 
              timeless themes of personal growth.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <Heart className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold">Respectful Approach</h3>
            </div>
            <p className="text-muted-foreground">
              We approach our subject matter with dignity and respect, focusing on the psychological 
              and emotional aspects of guidance, mentorship, and personal transformation in various 
              historical and fictional contexts.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Users className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-xl font-fantasy font-semibold">Community Focus</h3>
            </div>
            <p className="text-muted-foreground">
              We foster a community of individuals who appreciate art, literature, and the exploration 
              of human relationships and personal development through creative expression and storytelling.
            </p>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Contact Section */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-fantasy font-semibold text-primary mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            We welcome feedback, suggestions, and inquiries from our community. 
            Your input helps us continue to improve and expand our collection.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>For inquiries: contact@disciplinedown.com</p>
            <p>For submissions: submissions@disciplinedown.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
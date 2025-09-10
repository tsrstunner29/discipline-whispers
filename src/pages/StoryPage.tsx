import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Clock, Tag } from "lucide-react";
import { stories } from "@/data/mockData";
import AdBanner from "@/components/AdBanner";

const StoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-fantasy font-bold text-primary mb-4">Story Not Found</h1>
          <p className="text-muted-foreground mb-6">The story you're looking for doesn't exist.</p>
          <Link to="/stories" className="btn-fantasy">
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <Link 
          to="/stories" 
          className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
          Back to Stories
        </Link>

        {/* Story Header */}
        <div className="glass-card p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              {story.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-fantasy font-bold text-primary mb-4">
              {story.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{formatDate(story.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{story.category}</span>
              </div>
            </div>
          </div>

          {/* Ad Banner */}
          <div className="flex justify-center mb-6">
            <AdBanner size="rectangle" />
          </div>
        </div>

        {/* Story Content */}
        <div className="glass-card p-8">
          <div className="prose prose-lg max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-foreground leading-relaxed mb-6 ${
                  index === 0 ? 'first-letter:text-5xl first-letter:font-fantasy first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Inline Ad */}
          <div className="flex justify-center my-8">
            <AdBanner size="rectangle" />
          </div>

          {/* Story Footer */}
          <div className="border-t border-border/30 pt-6 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Written by <span className="font-medium text-foreground">{story.author}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Published on {formatDate(story.createdAt)}
                </p>
              </div>
              <div className="flex gap-3">
                <Link to="/stories" className="btn-ghost-fantasy">
                  More Stories
                </Link>
                <Link to="/gallery" className="btn-fantasy">
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="flex justify-center mt-8">
          <AdBanner size="leaderboard" />
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
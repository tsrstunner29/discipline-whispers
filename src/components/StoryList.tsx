import { useState } from "react";
import { Link } from "react-router-dom";
import { Story, storyCategories } from "@/data/mockData";
import { Clock, User } from "lucide-react";

interface StoryListProps {
  stories: Story[];
  currentPage: number;
  storiesPerPage: number;
}

const StoryList = ({ stories, currentPage, storiesPerPage }: StoryListProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStories = selectedCategory === "All"
    ? stories
    : stories.filter(story => story.category === selectedCategory);

  const startIndex = (currentPage - 1) * storiesPerPage;
  const endIndex = startIndex + storiesPerPage;
  const paginatedStories = filteredStories.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {storyCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn-ghost-fantasy ${
              selectedCategory === category ? "bg-primary/20 text-primary" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedStories.map((story) => (
          <div key={story.id} className="story-card group">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-3">
                {story.category}
              </div>
              <h3 className="text-xl font-fantasy font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {story.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {story.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {formatDate(story.createdAt)}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-4">
              {story.preview}
            </p>

            <Link
              to={`/stories/${story.id}`}
              className="inline-flex items-center text-primary hover:text-primary-glow font-medium transition-colors group"
            >
              Read More
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results */}
      {paginatedStories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No stories found in this category</p>
        </div>
      )}
    </div>
  );
};

export default StoryList;
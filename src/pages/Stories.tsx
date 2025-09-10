import { useState } from "react";
import { stories } from "@/data/mockData";
import StoryList from "@/components/StoryList";
import Pagination from "@/components/Pagination";
import AdBanner from "@/components/AdBanner";

const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;
  
  const totalPages = Math.ceil(stories.length / storiesPerPage);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-primary mb-4">
            Immersive Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover rich narratives that explore themes of discipline, growth, and transformation 
            across different eras and settings.
          </p>
        </div>

        {/* Ad Banner */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Stories List */}
        <StoryList 
          stories={stories}
          currentPage={currentPage}
          storiesPerPage={storiesPerPage}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Bottom Ad */}
        <div className="flex justify-center mt-12">
          <AdBanner size="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Stories;
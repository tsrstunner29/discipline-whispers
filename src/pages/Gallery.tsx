import { useState } from "react";
import { galleryImages } from "@/data/mockData";
import GalleryGrid from "@/components/GalleryGrid";
import Pagination from "@/components/Pagination";
import AdBanner from "@/components/AdBanner";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-primary mb-4">
            Fantasy Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of mystical and elegant imagery. 
            Click on any image to view in full detail.
          </p>
        </div>

        {/* Ad Banner */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Gallery Grid */}
        <GalleryGrid 
          images={galleryImages}
          currentPage={currentPage}
          imagesPerPage={imagesPerPage}
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

export default Gallery;
import { useState } from "react";
import { GalleryImage, categories } from "@/data/mockData";
import ImageModal from "./ImageModal";

interface GalleryGridProps {
  images: GalleryImage[];
  currentPage: number;
  imagesPerPage: number;
}

const GalleryGrid = ({ images, currentPage, imagesPerPage }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = filteredImages.slice(startIndex, endIndex);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginatedImages.map((image) => (
          <div
            key={image.id}
            className="gallery-card aspect-[3/4]"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="gallery-overlay">
              <div>
                <h3 className="font-fantasy font-medium text-lg text-white mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-white/80">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {paginatedImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No images found in this category</p>
        </div>
      )}

      {/* Image Modal */}
      <ImageModal
        image={selectedImage!}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default GalleryGrid;
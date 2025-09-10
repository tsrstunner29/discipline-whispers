import { useState } from "react";
import { X } from "lucide-react";
import { GalleryImage } from "@/data/mockData";
import AdBanner from "./AdBanner";
import TimerUnlock from "./TimerUnlock";

interface ImageModalProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isOpen) return null;

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleClose = () => {
    setIsUnlocked(false);
    onClose();
  };

  return (
    <div className="modal-backdrop flex items-center justify-center p-4 z-50">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background/70 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Ad Banner at Top */}
          <div className="flex justify-center mb-6">
            <AdBanner size="leaderboard" />
          </div>

          {!isUnlocked ? (
            /* Timer Section */
            <TimerUnlock onComplete={handleUnlock} />
          ) : (
            /* Unlocked Content */
            <div className="animate-fade-in">
              <div className="relative mb-6">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full max-h-[60vh] object-contain rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-fantasy text-primary mb-2">
                    {image.title}
                  </h2>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {image.category}
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {image.description}
                </p>

                {image.source && (
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Source:</span> {image.source}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Ad */}
              <div className="flex justify-center mt-8">
                <AdBanner size="rectangle" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
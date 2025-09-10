interface AdBannerProps {
  size?: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const AdBanner = ({ size = "banner", className = "" }: AdBannerProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "leaderboard":
        return "h-24 max-w-3xl";
      case "rectangle":
        return "h-64 max-w-sm";
      default:
        return "h-32 max-w-2xl";
    }
  };

  return (
    <div className={`glass-card flex items-center justify-center ${getSizeClasses()} ${className}`}>
      <div className="text-center text-muted-foreground">
        <div className="text-sm font-medium mb-1">Advertisement</div>
        <div className="text-xs opacity-70">
          {size === "leaderboard" && "728x90"}
          {size === "rectangle" && "300x250"}
          {size === "banner" && "468x60"}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
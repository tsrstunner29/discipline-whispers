import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimerUnlockProps {
  duration?: number; // Duration in seconds
  onComplete: () => void;
}

const TimerUnlock = ({ duration = 5, onComplete }: TimerUnlockProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-gold" size={32} />
        <h3 className="text-2xl font-fantasy text-gold">Unlocking Content</h3>
      </div>
      
      <div className="timer-glow mb-4">
        {timeLeft}
      </div>
      
      <p className="text-muted-foreground text-center max-w-sm">
        Please wait {timeLeft} second{timeLeft !== 1 ? 's' : ''} before accessing the full content...
      </p>
      
      <div className="w-64 h-2 bg-muted rounded-full mt-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-gold transition-all duration-1000 ease-linear"
          style={{ width: `${((duration - timeLeft) / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TimerUnlock;
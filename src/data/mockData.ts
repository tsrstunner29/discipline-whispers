// Mock data for DisciplineDown gallery and stories

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  source?: string;
}

export interface Story {
  id: string;
  title: string;
  preview: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
}

export const categories = [
  "All",
  "Hands Up",
  "Ear Hold", 
  "Kneel",
  "Corner Time",
  "Writing Lines",
  "Other"
];

export const storyCategories = [
  "All",
  "School",
  "Home",
  "Office",
  "Fantasy",
  "Historical"
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Mystic Reflection",
    description: "A contemplative moment in ethereal lighting",
    category: "Hands Up",
    imageUrl: "/api/placeholder/400/600",
    source: "Original Artwork"
  },
  {
    id: "2", 
    title: "Golden Hour Discipline",
    description: "Classical pose with warm golden lighting",
    category: "Ear Hold",
    imageUrl: "/api/placeholder/400/600",
    source: "Studio Collection"
  },
  {
    id: "3",
    title: "Midnight Reverence",
    description: "Solemn moment under starlit skies",
    category: "Kneel",
    imageUrl: "/api/placeholder/400/600",
    source: "Night Series"
  },
  {
    id: "4",
    title: "Corner of Shadows",
    description: "Quiet contemplation in soft shadows",
    category: "Corner Time",
    imageUrl: "/api/placeholder/400/600",
    source: "Shadow Play Collection"
  },
  {
    id: "5",
    title: "Parchment Dreams",
    description: "Focused concentration with quill and ink",
    category: "Writing Lines",
    imageUrl: "/api/placeholder/400/600",
    source: "Classical Studies"
  },
  {
    id: "6",
    title: "Ethereal Stance",
    description: "Graceful positioning in mystical atmosphere",
    category: "Other",
    imageUrl: "/api/placeholder/400/600",
    source: "Fantasy Portraits"
  },
  {
    id: "7",
    title: "Dawn's First Light",
    description: "Morning discipline in soft sunrise glow",
    category: "Hands Up",
    imageUrl: "/api/placeholder/400/600",
    source: "Morning Collection"
  },
  {
    id: "8",
    title: "Crimson Submission",
    description: "Elegant pose with deep red undertones",
    category: "Ear Hold",
    imageUrl: "/api/placeholder/400/600",
    source: "Color Studies"
  },
  {
    id: "9",
    title: "Silent Prayer",
    description: "Peaceful kneeling in cathedral light",
    category: "Kneel",
    imageUrl: "/api/placeholder/400/600",
    source: "Sacred Moments"
  },
  {
    id: "10",
    title: "Waiting Corner",
    description: "Patient stillness in quiet alcove",
    category: "Corner Time",
    imageUrl: "/api/placeholder/400/600",
    source: "Patience Series"
  },
  {
    id: "11",
    title: "Scholar's Task",
    description: "Diligent writing with classical elegance",
    category: "Writing Lines",
    imageUrl: "/api/placeholder/400/600",
    source: "Academic Collection"
  },
  {
    id: "12",
    title: "Moonlight Meditation",
    description: "Serene contemplation under moonbeams",
    category: "Other",
    imageUrl: "/api/placeholder/400/600",
    source: "Lunar Series"
  }
];

export const stories: Story[] = [
  {
    id: "1",
    title: "The Headmistress's Study",
    preview: "Lady Blackthorne's academy was renowned for its discipline and elegance. Behind mahogany doors, lessons in proper behavior were taught with both firmness and care...",
    content: `Lady Blackthorne's academy was renowned for its discipline and elegance. The grand Victorian mansion, with its towering spires and stained glass windows, housed the finest young ladies from across the realm.

Behind the mahogany doors of the headmistress's study, a different kind of education took place. The room was bathed in warm candlelight, casting dancing shadows across leather-bound volumes and antique furniture.

"Miss Charlotte," Lady Blackthorne's voice was firm yet not unkind, "your recent behavior in Latin class has been most disappointing."

The young woman stood before the ornate desk, her hands clasped behind her back, eyes downcast. The weight of disappointment was heavier than any punishment could be.

"I understand, ma'am," Charlotte whispered, her voice barely audible above the crackling fireplace.

The headmistress rose from her chair, her dark robes flowing like liquid night. "Discipline, my dear, is not merely about rules—it is about respect. Respect for your teachers, your studies, and most importantly, yourself."

What followed was a lesson that Charlotte would remember for the rest of her days, one that taught her the true meaning of accountability and grace under pressure.`,
    category: "School",
    author: "Victoria Ashworth",
    createdAt: "2024-01-15"
  },
  {
    id: "2", 
    title: "The Governess's Garden",
    preview: "In the sprawling estate of Thornfield Manor, Miss Eleanor tended not only to the roses but to the character of her young charges with gentle yet unwavering guidance...",
    content: `The summer sun filtered through the ancient oak trees of Thornfield Manor, casting dappled shadows across the perfectly manicured gardens. Miss Eleanor, the governess, moved with quiet grace among the rose bushes, her charges following obediently behind.

"Tell me, Master James," she said without turning around, "what did we discuss about honesty yesterday?"

The twelve-year-old boy shuffled his feet, knowing his deception about the broken vase had been discovered. His sister watched with wide eyes, understanding that this moment would define their relationship with their beloved governess.

Miss Eleanor finally turned, her kind but serious expression conveying more than harsh words ever could. In her hands, she held a wilted rose—a perfect metaphor for the consequences of dishonesty.

"Trust, like this rose, requires careful tending," she explained, her voice gentle yet firm. "Once damaged, it takes time and patience to bloom again."

The lesson that unfolded in that peaceful garden would stay with both children long into their adult years, shaping them into people of integrity and compassion.`,
    category: "Home",
    author: "Eleanor Hartwell",
    createdAt: "2024-01-10"
  },
  {
    id: "3",
    title: "The Merchant's Apprentice",
    preview: "In the bustling marketplace of old London, Master Thornberry ran his shop with precision and fairness. When his newest apprentice made a costly error, a valuable lesson awaited...",
    content: `The cobblestone streets of Whitechapel echoed with the sounds of commerce as Master Thornberry inspected his silk merchant's shop. The morning light streamed through diamond-paned windows, illuminating bolts of fabric in every conceivable color and texture.

Young Timothy had been apprenticed to the master for only three months, but already his eagerness had led to a significant mistake—a bolt of expensive Chinese silk ruined by careless handling of ink.

"Come here, lad," Master Thornberry called, his voice neither angry nor kind, but measured. The older man's weathered hands gestured to the damaged fabric. "What do you see?"

Timothy's throat tightened. "My mistake, sir. The silk is ruined."

"Aye, that it is. But tell me—what else do you see?"

The boy looked closer, confusion clouding his features. "I... I'm not certain, sir."

"You see an opportunity," the master said firmly. "An opportunity to learn the weight of responsibility and the value of careful attention to detail."

What happened next was not the harsh punishment Timothy expected, but rather a lesson in accountability that would serve him well in his future as a respected merchant himself.`,
    category: "Historical",
    author: "Charles Dicksworth",
    createdAt: "2024-01-08"
  }
];
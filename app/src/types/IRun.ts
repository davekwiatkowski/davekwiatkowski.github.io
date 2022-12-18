interface IRun {
  date: string;
  course: string;
  link: string;
  location: string;
  distance: { amount: number; unit: string };
  duration: { days: number; hours: number; minutes: number; seconds: number };
  type: "Backyard" | "Race" | "FKT";
  race?: {
    place: number;
  };
  fkt?: {
    type: "Unsupported" | "Self-supported" | "Supported";
  };
  backyard?: {
    yards: number;
    place: "Win" | "Assist" | "Dnf";
  };
}

export default IRun;

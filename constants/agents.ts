const PLATFORM_ICONS = [
  "https://res.cloudinary.com/dreomly4m/image/upload/v1772992777/facebook_xhod9b.png",
  "https://res.cloudinary.com/dreomly4m/image/upload/v1772992774/instagram_socgag.png",
  "https://res.cloudinary.com/dreomly4m/image/upload/v1772992761/linkedin_b2ceog.png",
  "https://res.cloudinary.com/dreomly4m/image/upload/v1772992818/google_4_mfvkyh.png",
] as const;

const DESIGNATIONS = [
  "Realtor",
  "Broker",
  "Real Estate Agent",
  "Broker/Owner",
  "Team Leader",
] as const;

export const agents = [
  {
    name: "Sarah Mitchell",
    headshot:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop",
    timestamp: "2h ago",
    platformIcon: PLATFORM_ICONS[0],
    designation: DESIGNATIONS[0],
    variant: "default" as const,
  },
  {
    name: "Michael Chen",
    headshot:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1288&auto=format&fit=crop",
    timestamp: "10m ago",
    platformIcon: PLATFORM_ICONS[2],
    designation: DESIGNATIONS[1],
    variant: "success" as const,
  },
  {
    name: "Jessica Torres",
    headshot:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
    timestamp: "45m ago",
    platformIcon: PLATFORM_ICONS[1],
    designation: DESIGNATIONS[2],
    variant: "default" as const,
  },
  {
    name: "David Park",
    headshot:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1287&auto=format&fit=crop",
    timestamp: "1h ago",
    platformIcon: PLATFORM_ICONS[3],
    designation: DESIGNATIONS[3],
    variant: "success" as const,
  },
  {
    name: "Amanda Rodriguez",
    headshot:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1288&auto=format&fit=crop",
    timestamp: "2h ago",
    platformIcon: PLATFORM_ICONS[0],
    designation: DESIGNATIONS[4],
    variant: "warning" as const,
  },
  {
    name: "James Wilson",
    headshot:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    timestamp: "3h ago",
    platformIcon: PLATFORM_ICONS[2],
    designation: DESIGNATIONS[0],
    variant: "success" as const,
  },
  {
    name: "Emily Johnson",
    headshot:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
    timestamp: "4h ago",
    platformIcon: PLATFORM_ICONS[1],
    designation: DESIGNATIONS[1],
    variant: "danger" as const,
  },
  {
    name: "Robert Martinez",
    headshot:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop",
    timestamp: "5h ago",
    platformIcon: PLATFORM_ICONS[3],
    designation: DESIGNATIONS[2],
    variant: "default" as const,
  },
  {
    name: "Lisa Anderson",
    headshot:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1287&auto=format&fit=crop",
    timestamp: "6h ago",
    platformIcon: PLATFORM_ICONS[0],
    designation: DESIGNATIONS[3],
    variant: "success" as const,
  },
  {
    name: "Christopher Lee",
    headshot:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop",
    timestamp: "7h ago",
    platformIcon: PLATFORM_ICONS[2],
    designation: DESIGNATIONS[4],
    variant: "warning" as const,
  },
  {
    name: "Nicole Davis",
    headshot:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    timestamp: "8h ago",
    platformIcon: PLATFORM_ICONS[1],
    designation: DESIGNATIONS[0],
    variant: "success" as const,
  },
  {
    name: "Kevin Thompson",
    headshot:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop",
    timestamp: "9h ago",
    platformIcon: PLATFORM_ICONS[3],
    designation: DESIGNATIONS[1],
    variant: "default" as const,
  },
];

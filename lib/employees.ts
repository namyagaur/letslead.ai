export type EmployeeId =
  | "sarah"
  | "emily"
  | "jessica"
  | "megan"
  | "sophia"
  | "olivia"
  | "ava"
  | "chloe";
export const employees = {
  sarah: {
    id: "sarah",
    name: "Sarah",
    role: "Lead Concierge",
    avatar: "/avatars/sarah.png",
    status: "Online",
     welcomeMessage:
    "Welcome! I'm Sarah, your Lead Concierge. I can help you buy, sell, rent, or answer questions about properties. What brings you here today?",
  },

  emily: {
    id: "emily",
    name: "Emily",
    role: "Buyer Specialist",
    avatar: "/avatars/emily.png",
    status: "Online",
  },

  jessica: {
    id: "jessica",
    name: "Jessica",
    role: "Seller Specialist",
    avatar: "/avatars/jessica.png",
    status: "Online",
  },

  megan: {
    id: "megan",
    name: "Megan",
    role: "Transaction Coordinator",
    avatar: "/avatars/megan.png",
    status: "Online",
  },

  sophia: {
    id: "sophia",
    name: "Sophia",
    role: "Client Success",
    avatar: "/avatars/sophia.png",
    status: "Online",
  },

  olivia: {
    id: "olivia",
    name: "Olivia",
    role: "Mortgage Specialist",
    avatar: "/avatars/olivia.png",
    status: "Online",
  },

  ava: {
    id: "ava",
    name: "Ava",
    role: "Listing Coordinator",
    avatar: "/avatars/ava.png",
    status: "Online",
  },

  chloe: {
    id: "chloe",
    name: "Chloe",
    role: "Operations Manager",
    avatar: "/avatars/chloe.png",
    status: "Online",
  },
} as const;
export const defaultEmployee = employees.sarah;
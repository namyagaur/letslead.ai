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
      "Welcome! I'm Sarah, your Lead Concierge. I can help you buy, sell, rent, explore financing options, or connect you with one of our specialists. What brings you here today?",
  },

  emily: {
    id: "emily",
    name: "Emily",
    role: "Buyer Specialist",
    avatar: "/avatars/emily.png",
    status: "Online",
    welcomeMessage:
      "Hi! I'm Emily, your Buyer Specialist. I'll help you find the right home based on your budget, lifestyle, and preferred location. To start, what kind of home are you looking for?",
  },

  jessica: {
    id: "jessica",
    name: "Jessica",
    role: "Seller Specialist",
    avatar: "/avatars/jessica.png",
    status: "Online",
    welcomeMessage:
      "Hi! I'm Jessica, your Seller Specialist. I'll help you prepare, price, and market your property to attract the right buyers. Tell me a little about the home you'd like to sell.",
  },

  megan: {
    id: "megan",
    name: "Megan",
    role: "Transaction Coordinator",
    avatar: "/avatars/megan.png",
    status: "Online",
    welcomeMessage:
      "Hello! I'm Megan, your Transaction Coordinator. I'll help keep everything organized throughout the buying or selling process—from paperwork to closing. How can I assist you today?",
  },

  sophia: {
    id: "sophia",
    name: "Sophia",
    role: "Client Success",
    avatar: "/avatars/sophia.png",
    status: "Online",
    welcomeMessage:
      "Hi! I'm Sophia from Client Success. Whether you have questions about your experience or need help with next steps, I'm here to make sure everything goes smoothly. How can I help?",
  },

  olivia: {
    id: "olivia",
    name: "Olivia",
    role: "Mortgage Specialist",
    avatar: "/avatars/olivia.png",
    status: "Online",
    welcomeMessage:
      "Hi! I'm Olivia, your Mortgage Specialist. I can help you understand financing options, estimate monthly payments, and guide you through the mortgage process. What would you like to know?",
  },

  ava: {
    id: "ava",
    name: "Ava",
    role: "Listing Coordinator",
    avatar: "/avatars/ava.png",
    status: "Online",
    welcomeMessage:
      "Hi! I'm Ava, your Listing Coordinator. I'll help with property listings, scheduling showings, and keeping everything ready for prospective buyers or tenants. How can I assist you today?",
  },

  chloe: {
    id: "chloe",
    name: "Chloe",
    role: "Operations Manager",
    avatar: "/avatars/chloe.png",
    status: "Online",
    welcomeMessage:
      "Hello! I'm Chloe, the Operations Manager. I oversee our team's processes and can help with more complex requests or anything that needs additional coordination. What can I help you with today?",
  },
} as const;
export const defaultEmployee = employees.sarah;
export type LeadGoal = "buy" | "sell" | "rent" | "invest";

export interface Lead {
  goal?: LeadGoal;

  name?: string;
  email?: string;
  phone?: string;

  budget?: string;

  country?: string;
  state?: string;
  city?: string;

  propertyType?: string;

  bedrooms?: number;
  bathrooms?: number;

  timeline?: string;

  mortgageStatus?: string;

  notes: string[];
}
"use client";

import {
  Home,
  Building2,
  KeyRound,
  Compass,
} from "lucide-react";

const actions = [
  {
    label: "Buy a Home",
    icon: Home,
  },
  {
    label: "Sell a Home",
    icon: Building2,
  },
  {
    label: "Rent a Home",
    icon: KeyRound,
  },
  {
    label: "Just Exploring",
    icon: Compass,
  },
];

interface QuickActionsProps {
  onSelect: (value: string) => void;
}

export default function QuickActions({
  onSelect,
}: QuickActionsProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.label}
            onClick={() => onSelect(action.label)}
className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[15px] font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-50"          >
            <Icon size={15} strokeWidth={2} />
            {action.label}
          </button>
        );
      })}
    </div>
  );
}
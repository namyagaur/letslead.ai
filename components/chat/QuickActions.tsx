"use client";

const actions = [
  "🏡 Buy a Home",
  "🏠 Sell a Home",
  "🔑 Rent a Home",
  "👀 Just Exploring",
];

interface QuickActionsProps {
  onSelect: (value: string) => void;
}

export default function QuickActions({
  onSelect,
}: QuickActionsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={action}
          onClick={() => onSelect(action)}
          className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium transition-all hover:border-black hover:bg-zinc-100"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
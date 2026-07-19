import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { employees } from "@/lib/employees";

type TransferCardProps = {
  from: (typeof employees)[keyof typeof employees];
  to: (typeof employees)[keyof typeof employees];
};

export default function TransferCard({
  from,
  to,
}: TransferCardProps) {
  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-center text-lg font-semibold text-zinc-900">
  Connecting you with {to.name}
</p>

<p className="mb-6 mt-1 text-center text-sm text-zinc-500">
  {to.role}
</p>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={from.avatar}
              alt={from.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="mt-2 text-sm font-medium">{from.name}</p>
          </div>

          <ArrowRight
            className="text-zinc-400"
            size={22}
          />

          <div className="flex flex-col items-center">
            <Image
              src={to.avatar}
              alt={to.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="mt-2 text-sm font-medium">{to.name}</p>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-zinc-500">
          Connecting you with{" "}
          <span className="font-semibold text-zinc-900">
            {to.role}
          </span>
        </p>
      </div>
    </div>
  );
}
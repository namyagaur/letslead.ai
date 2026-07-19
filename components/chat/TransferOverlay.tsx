import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { employees } from "@/lib/employees";

type TransferOverlayProps = {
  from: (typeof employees)[keyof typeof employees];
  to: (typeof employees)[keyof typeof employees];
};

export default function TransferOverlay({
  from,
  to,
}: TransferOverlayProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <p className="mb-8 text-sm font-medium text-zinc-500">
          Connecting you with a specialist...
        </p>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={from.avatar}
              alt={from.name}
              width={56}
              height={56}
              className="rounded-full"
            />

            <p className="mt-2 text-sm font-medium">
              {from.name}
            </p>
          </div>

          <ArrowRight
            className="animate-pulse text-zinc-400"
            size={24}
          />

          <div className="flex flex-col items-center">
            <Image
              src={to.avatar}
              alt={to.name}
              width={56}
              height={56}
              className="rounded-full"
            />

            <p className="mt-2 text-sm font-medium">
              {to.name}
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Please wait a moment...
        </p>
      </div>
    </div>
  );
}
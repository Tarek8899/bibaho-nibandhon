import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="text-xl flex items-center gap-2 font-bold text-white drop-shadow-sm">
      <Image src="/logo.png" alt="বিয়ে নিবন্ধন লোগো" width={60} height={60} className="bg-white rounded-full object-cover" />
      <span>বিবাহনিবন্ধন</span>
    </Link>
  );
}

export default Logo;

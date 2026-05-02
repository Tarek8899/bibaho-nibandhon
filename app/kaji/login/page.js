import KajiLoginForm from "@/components/KajiLoginForm";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

export default function KajiLoginPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F8] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Colorful Background Elements */}
            <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="w-full max-w-md bg-[#d6d6d6] p-10 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-white relative z-10">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-pink-400 to-primary"></div>
                
                <div className="text-center mb-10 mt-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                        <FaUserTie className="text-3xl" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 mb-2 drop-shadow-sm tracking-tight">কাজী লগইন</h1>
                    <p className="text-gray-600 font-medium">আপনার একাউন্টে প্রবেশ করুন</p>
                </div>
                
                <KajiLoginForm />
                
                <div className="mt-8 pt-6 border-t border-gray-200/50 text-center text-sm text-gray-600 font-medium">
                    একাউন্ট নেই?{" "}
                    <Link href="/kaji/register" className="font-bold text-primary hover:text-pink-600 transition-colors duration-300 underline underline-offset-4">
                        এখানে নিবন্ধন করুন
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/" className="text-xs text-gray-500 hover:text-primary transition-colors duration-300 font-medium">
                        মূল পাতায় ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
}

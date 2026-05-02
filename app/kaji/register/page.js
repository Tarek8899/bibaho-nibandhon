import KajiRegisterForm from "@/components/KajiRegisterForm";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

export default function KajiRegisterPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F8] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
            {/* Colorful Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="w-full max-w-4xl relative z-10">
                {/* Logo or Title Header */}
                <div className="text-center mb-10 mt-2">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-3xl shadow-xl shadow-primary/20 mb-6 transform transition-transform hover:scale-110 duration-500">
                        <FaUserTie className="text-4xl" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-primary mb-4 tracking-tight sm:text-5xl drop-shadow-sm">
                        কাজী <span className="italic font-light">নিবন্ধন</span>
                    </h1>
                    <p className="text-lg text-gray-600 font-medium max-w-lg mx-auto leading-relaxed">
                        একজন নিবন্ধিত কাজী হিসেবে নিজেকে প্রতিষ্ঠিত করুন এবং আধুনিক বিবাহ নিবন্ধনের অংশ হোন
                    </p>
                </div>

                {/* Main Registration Card */}
                <div className="bg-[#d6d6d6] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-white relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-primary to-pink-400 rounded-t-[2.5rem]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full border border-primary/10 shadow-sm">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Registration Form</span>
                    </div>

                    <KajiRegisterForm />
                    
                    <div className="mt-12 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-gray-600 font-medium flex items-center gap-2">
                            <span>ইতিমধ্যেই একাউন্ট আছে?</span>
                            <Link href="/kaji/login" className="font-extrabold text-primary hover:text-pink-600 transition-colors duration-300 flex items-center gap-1 group">
                                লগইন করুন
                                <span className="block w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>
                        <Link 
                            href="/" 
                            className="px-6 py-3 bg-white/50 text-gray-600 rounded-2xl hover:bg-white hover:text-primary border border-white transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-sm"
                        >
                            মূল পাতায় ফিরে যান
                        </Link>
                    </div>
                </div>

                {/* Footer Info */}
                <p className="text-center mt-10 text-gray-500 text-sm font-medium">
                    নিবন্ধন করার মাধ্যমে আপনি আমাদের <Link href="#" className="underline hover:text-primary transition-colors">শর্তাবলী</Link> মেনে নিচ্ছেন
                </p>
            </div>
        </div>
    );
}

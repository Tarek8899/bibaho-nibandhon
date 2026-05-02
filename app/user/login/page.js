import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function UserLoginPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F8] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Colorful Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="w-full max-w-md bg-[#d6d6d6] p-10 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-white relative z-10">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-pink-400 to-primary"></div>
                
                <div className="text-center mb-10 mt-2">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 mb-2 drop-shadow-sm">স্বাগতম</h1>
                    <p className="text-gray-600 font-medium">চালিয়ে যেতে আপনার NID এবং পাসওয়ার্ড লিখুন</p>
                </div>
                
                <LoginForm />
                
                <div className="mt-8 pt-6 border-t border-gray-200/50 text-center text-sm text-gray-600 font-medium">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link href="/user/register" className="font-bold text-primary hover:text-pink-600 transition-colors duration-300 underline underline-offset-4">
                        এখানে নিবন্ধন করুন
                    </Link>
                </div>
            </div>
        </div>
    );
}

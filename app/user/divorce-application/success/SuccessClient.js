"use client";

import { FaRegCheckCircle, FaDownload, FaArrowLeft, FaBalanceScale } from "react-icons/fa";
import Link from "next/link";
import { Button } from "antd";

export default function SuccessClient({ application }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 print:shadow-none print:border-none print:rounded-none container-print relative">
                
                {/* Screen Content - Hidden in Print */}
                <div className="p-8 lg:p-12 text-center print:hidden">
                    <FaRegCheckCircle className="text-red-500 text-6xl mx-auto mb-6" />
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                        তালাকনামা আবেদন সফলভাবে জমা দেওয়া হয়েছে!
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        আপনার বিবাহ বিচ্ছেদের আবেদনটি আমাদের সিস্টেমে সংরক্ষিত হয়েছে। 
                        আপনি নিচের বাটন থেকে আপনার আবেদনের কপি পিডিএফ (PDF) ফরম্যাটে ডাউনলোড বা প্রিন্ট করতে পারবেন।
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            danger
                            type="primary" 
                            size="large" 
                            onClick={handlePrint}
                            icon={<FaDownload />}
                            className="bg-red-600 hover:bg-red-700 h-12 px-8 rounded-full text-lg font-medium flex items-center justify-center gap-2"
                        >
                            ফর্ম ডাউনলোড/প্রিন্ট করুন
                        </Button>
                        <Link href="/user/dashboard">
                            <Button 
                                size="large" 
                                icon={<FaArrowLeft />}
                                className="h-12 px-8 rounded-full text-lg font-medium flex items-center justify-center gap-2 w-full sm:w-auto hover:text-red-600 hover:border-red-600 border-gray-300 transition"
                            >
                                ড্যাশবোর্ডে ফিরে যান
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Print/Download View - Specialized layout for the PDF form */}
                <div className="hidden print:block bg-white text-black min-h-screen relative pb-20">
                    {/* Custom Header with Logo */}
                    <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
                        <div className="flex justify-center items-center gap-3 mb-2 text-red-900">
                            <FaBalanceScale className="text-3xl" />
                            <h2 className="text-2xl font-bold uppercase tracking-widest">বিবাহনিবন্ধন ও বিচ্ছেদ</h2>
                        </div>
                        <h1 className="text-2xl font-bold mb-1">তালাকনামা আবেদন ফর্ম</h1>
                        <p className="text-sm mt-1">আবেদন আইডি: <span className="font-semibold">{application.id}</span></p>
                        <p className="text-sm">দাখিলের তারিখ: {new Date(application.createdAt).toLocaleDateString('bn-BD')}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-6">
                        {/* Husband Info */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center">
                                <h2 className="text-lg font-bold">স্বামীর বিবরণ</h2>
                            </div>
                            <div className="p-3">
                                <table className="w-full text-sm text-left">
                                    <tbody>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">নাম:</td><td className="py-1.5">{application.husbandFullName}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">এনআইডি:</td><td className="py-1.5">{application.husbandNid}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">পিতার নাম:</td><td className="py-1.5">{application.husbandFatherName}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মাতার নাম:</td><td className="py-1.5">{application.husbandMotherName}</td></tr>
                                        <tr><td className="py-1.5 font-semibold w-1/3 align-top">ঠিকানা:</td><td className="py-1.5 align-top">{application.husbandAddress}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Wife Info */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center">
                                <h2 className="text-lg font-bold">স্ত্রীর বিবরণ</h2>
                            </div>
                            <div className="p-3">
                                <table className="w-full text-sm text-left">
                                    <tbody>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">নাম:</td><td className="py-1.5">{application.wifeFullName}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">এনআইডি:</td><td className="py-1.5">{application.wifeNid}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">পিতার নাম:</td><td className="py-1.5">{application.wifeFatherName}</td></tr>
                                        <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মাতার নাম:</td><td className="py-1.5">{application.wifeMotherName}</td></tr>
                                        <tr><td className="py-1.5 font-semibold w-1/3 align-top">ঠিকানা:</td><td className="py-1.5 align-top">{application.wifeAddress}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-200 px-3 py-1.5 mb-2 rounded font-sans">বিচ্ছেদের তথ্য</h2>
                        <table className="w-full text-sm text-left border border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50">কার্যকর তারিখ:</td>
                                    <td className="py-2 px-3 border-r border-gray-300 w-1/4">{new Date(application.divorceDate).toLocaleDateString('bn-BD')}</td>
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50">বিচ্ছেদের স্থান:</td>
                                    <td className="py-2 px-3">{application.divorceLocation}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50 align-top">কারণ:</td>
                                    <td colSpan="3" className="py-2 px-3 align-top leading-relaxed">{application.divorceReason}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-200 px-3 py-1.5 mb-2 rounded font-sans">সাক্ষীদের বিবরণ</h2>
                        <table className="w-full text-sm text-left border border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-300 bg-gray-50">
                                    <th className="py-1.5 px-3 border-r border-gray-300 w-1/3">সাক্ষীর ধরন</th>
                                    <th className="py-1.5 px-3 border-r border-gray-300 w-1/3">নাম</th>
                                    <th className="py-1.5 px-3">এনআইডি নম্বর</th>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">সাক্ষী ১</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.witness1Name}</td>
                                    <td className="py-1.5 px-3">{application.witness1Nid}</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">সাক্ষী ২</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.witness2Name}</td>
                                    <td className="py-1.5 px-3">{application.witness2Nid}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-16 flex justify-around px-10">
                        <div className="text-center w-40">
                            <div className="h-4 border-b border-black mb-2"></div>
                            <div className="font-semibold text-sm">আবেদনকারীর স্বাক্ষর</div>
                        </div>
                        <div className="text-center w-40">
                            <div className="h-4 border-b border-black mb-2"></div>
                            <div className="font-semibold text-sm">কাজীর স্বাক্ষর ও সিল</div>
                        </div>
                    </div>

                    {/* Custom Text Footer */}
                    <div className="absolute bottom-0 left-0 w-full text-center text-xs text-gray-500 pt-4 border-t border-gray-300 mt-10">
                        <p>এটি একটি কম্পিউটার-জেনারেটেড ডকুমেন্ট। অফিসিয়াল ব্যবহারের জন্য সংশ্লিষ্ট কাজীর যাচাইকরণ প্রয়োজন।</p>
                        <p className="mt-1">© {new Date().getFullYear()} বিবাহনিবন্ধন সিস্টেম</p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    /* Hides browser header/footer completely on Chrome/Edge */
                    @page { 
                        margin: 0mm; 
                    }
                    body {
                        background-color: white !important;
                        -webkit-print-color-adjust: exact;
                        padding: 10mm; /* Adds back breathing room as margin is 0 */
                    }
                }
            `}</style>
        </div>
    );
}

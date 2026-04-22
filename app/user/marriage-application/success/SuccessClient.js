"use client";

import { FaRegCheckCircle, FaDownload, FaArrowLeft, FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "antd";

export default function SuccessClient({ application }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 print:shadow-none print:border-none print:rounded-none container-print">
                
                {/* Screen Content - Hidden in Print */}
                <div className="p-8 lg:p-12 text-center print:hidden">
                    <FaRegCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                        আবেদন সফলভাবে জমা দেওয়া হয়েছে!
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        আপনার বিবাহ নিবন্ধনের আবেদনটি আমাদের সিস্টেমে সংরক্ষিত হয়েছে। 
                        আপনি নিচের বাটন থেকে আপনার আবেদনের কপি পিডিএফ (PDF) ফরম্যাটে ডাউনলোড বা প্রিন্ট করতে পারবেন।
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            type="primary" 
                            size="large" 
                            onClick={handlePrint}
                            icon={<FaDownload />}
                            className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 rounded-full text-lg font-medium flex items-center justify-center gap-2"
                        >
                            ফর্ম ডাউনলোড/প্রিন্ট করুন
                        </Button>
                        <Link href="/user/dashboard">
                            <Button 
                                size="large" 
                                icon={<FaArrowLeft />}
                                className="h-12 px-8 rounded-full text-lg font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
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
                        <div className="flex justify-center items-center gap-3 mb-2 text-indigo-900">
                            <FaRegFileAlt className="text-3xl" />
                            <h2 className="text-2xl font-bold uppercase tracking-widest">বিবাহনিবন্ধন</h2>
                        </div>
                        <h1 className="text-2xl font-bold mb-1">বিবাহ নিবন্ধনের আবেদন ফর্ম</h1>
                        <p className="text-sm mt-1">আবেদন আইডি: <span className="font-semibold">{application.id}</span></p>
                        <p className="text-sm">দাখিলের তারিখ: {new Date(application.createdAt).toLocaleDateString('bn-BD')}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-6">
                        {/* Groom Info */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center">
                                <h2 className="text-lg font-bold">বরের বিবরণ</h2>
                            </div>
                            <div className="p-3 flex gap-4">
                                <div className="flex-1">
                                    <table className="w-full text-sm text-left">
                                        <tbody>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">নাম:</td><td className="py-1.5">{application.groomFullName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">এনআইডি:</td><td className="py-1.5">{application.groomNid}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">পিতার নাম:</td><td className="py-1.5">{application.groomFatherName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মাতার নাম:</td><td className="py-1.5">{application.groomMotherName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মোবাইল:</td><td className="py-1.5">{application.groomMobile || '-'}</td></tr>
                                            <tr><td className="py-1.5 font-semibold w-1/3 align-top">ঠিকানা:</td><td className="py-1.5 align-top">{application.groomAddress}</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-24 shrink-0">
                                    {application.groomPhoto ? (
                                        <img src={application.groomPhoto} alt="Groom" className="w-full h-32 object-cover border border-gray-300 rounded" />
                                    ) : (
                                        <div className="w-full h-32 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-xs text-center text-gray-500">ছবি নাই</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bride Info */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center">
                                <h2 className="text-lg font-bold">কনের বিবরণ</h2>
                            </div>
                            <div className="p-3 flex gap-4">
                                <div className="flex-1">
                                    <table className="w-full text-sm text-left">
                                        <tbody>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">নাম:</td><td className="py-1.5">{application.brideFullName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">এনআইডি:</td><td className="py-1.5">{application.brideNid}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">পিতার নাম:</td><td className="py-1.5">{application.brideFatherName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মাতার নাম:</td><td className="py-1.5">{application.brideMotherName}</td></tr>
                                            <tr className="border-b border-gray-100"><td className="py-1.5 font-semibold w-1/3">মোবাইল:</td><td className="py-1.5">{application.brideMobile || '-'}</td></tr>
                                            <tr><td className="py-1.5 font-semibold w-1/3 align-top">ঠিকানা:</td><td className="py-1.5 align-top">{application.brideAddress}</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-24 shrink-0">
                                    {application.bridePhoto ? (
                                        <img src={application.bridePhoto} alt="Bride" className="w-full h-32 object-cover border border-gray-300 rounded" />
                                    ) : (
                                        <div className="w-full h-32 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-xs text-center text-gray-500">ছবি নাই</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-200 px-3 py-1.5 mb-2 rounded font-sans">বিবাহের তথ্য</h2>
                        <table className="w-full text-sm text-left border border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50">বিবাহের তারিখ:</td>
                                    <td className="py-2 px-3 border-r border-gray-300 w-1/4">{new Date(application.marriageDate).toLocaleDateString('bn-BD')}</td>
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50">দেনমোহর পরিমাণ:</td>
                                    <td className="py-2 px-3">{application.denmohorAmount} টাকা</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 font-semibold border-r border-gray-300 w-1/4 bg-gray-50">বিবাহের স্থান:</td>
                                    <td colSpan="3" className="py-2 px-3">{application.marriageLocation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-bold bg-gray-200 px-3 py-1.5 mb-2 rounded font-sans">সাক্ষী ও উকিলের বিবরণ</h2>
                        <table className="w-full text-sm text-left border border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-300 bg-gray-50">
                                    <th className="py-1.5 px-3 border-r border-gray-300 w-1/3">পদক্ষেপ/সম্পর্ক</th>
                                    <th className="py-1.5 px-3 border-r border-gray-300 w-1/3">নাম</th>
                                    <th className="py-1.5 px-3">এনআইডি নম্বর</th>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">উকিল ({application.ukilRelation})</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.ukilName}</td>
                                    <td className="py-1.5 px-3">-</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">বরের সাক্ষী ১</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.groomWitness1Name}</td>
                                    <td className="py-1.5 px-3">{application.groomWitness1Nid}</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">বরের সাক্ষী ২</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.groomWitness2Name}</td>
                                    <td className="py-1.5 px-3">{application.groomWitness2Nid}</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">কনের সাক্ষী ১</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.brideWitness1Name}</td>
                                    <td className="py-1.5 px-3">{application.brideWitness1Nid}</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 px-3 font-semibold border-r border-gray-300">কনের সাক্ষী ২</td>
                                    <td className="py-1.5 px-3 border-r border-gray-300">{application.brideWitness2Name}</td>
                                    <td className="py-1.5 px-3">{application.brideWitness2Nid}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 flex justify-between px-10">
                        <div className="text-center">
                            {application.groomSignature ? (
                                <img src={application.groomSignature} alt="Groom Signature" className="h-12 w-32 mx-auto mb-2 object-contain" />
                            ) : (
                                <div className="h-12 mb-2"></div>
                            )}
                            <div className="border-t border-black pt-2 font-semibold">বরের স্বাক্ষর</div>
                        </div>
                        <div className="text-center">
                            {application.brideSignature ? (
                                <img src={application.brideSignature} alt="Bride Signature" className="h-12 w-32 mx-auto mb-2 object-contain" />
                            ) : (
                                <div className="h-12 mb-2"></div>
                            )}
                            <div className="border-t border-black pt-2 font-semibold">কনের স্বাক্ষর</div>
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

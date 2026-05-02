"use client";

import { loginAction } from "@/actions/authActions";
import { Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";

export default function AdminLoginPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await loginAction({ nid: values.username, password: values.password });
            window.location.href = "/admin/dashboard";
            message.success("Admin Login successfully");
        } catch (error) {
            message.error("Invalid Admin Credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF5F8] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Colorful Background Elements */}
            <div className="absolute top-[5%] left-[-5%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-[5%] right-[-5%] w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="w-full max-w-md bg-[#d6d6d6] p-8 md:p-10 shadow-2xl shadow-primary/10 border border-white rounded-[2.5rem] relative z-10">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-pink-400 to-primary"></div>
                
                <div className="text-center mb-8 mt-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                        <FaUserShield className="text-3xl" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 mb-2 drop-shadow-sm tracking-tight">Admin Login</h1>
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-pink-400 mx-auto rounded-full mt-4"></div>
                </div>
                
                <Form onFinish={handleSubmit} layout="vertical">
                    <FormItem 
                        label={<span className="font-medium text-gray-800">Username</span>}
                        name="username" 
                        rules={[{ required: true, message: "Please input admin username" }]}
                    >
                        <input 
                            type="text" 
                            placeholder="Enter username"
                            className="w-full outline-none p-4 border border-white bg-white/70 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                        />
                    </FormItem>

                    <FormItem 
                        label={<span className="font-medium text-gray-800">Password</span>}
                        name="password" 
                        rules={[{ required: true, message: "Please input admin password" }]}
                    >
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password" 
                                className="w-full outline-none p-4 pr-12 border border-white bg-white/70 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                    </FormItem>

                    <button 
                        disabled={loading} 
                        type="submit" 
                        className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-primary to-pink-600 text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300 uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-6"
                    >
                        Login as Admin
                        {loading && <AiOutlineLoading3Quarters className="animate-spin text-white" fontSize={16} />}
                    </button>
                </Form>
            </div>
        </div>
    );
}

"use client";

import FormItem from "antd/es/form/FormItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { Form, message } from "antd";

import { loginAction } from "@/actions/authActions";
import usePost from "@/hooks/usePost";

function RegisterForm() {
  const { postData, loading } = usePost();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    postData(
      "/users/register",
      values,
      async (data) => {
        console.log(data);
        await loginAction({ nid: values.nid, password: values.password });
        window.location.href = "/user/dashboard";
        message.success("নিবন্ধন সফল হয়েছে 🥳");
      },
      (err) => {
        console.log(err);
        message.error(err.message);
      },
    );
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <div className="flex flex-col text-gray-800">
        <div>
          <label htmlFor="nid" className="mb-2 text-base font-medium inline-block">
            জাতীয় পরিচয়পত্র নম্বর (NID)
          </label>
          <FormItem name="nid" rules={[
              { required: true, message: "অনুগ্রহ করে আপনার NID নম্বর লিখুন" },
              { pattern: /^[0-9]+$/, message: "NID নম্বর শুধুমাত্র সংখ্যা হতে হবে" }
          ]}>
            <input type="text" id="nid" placeholder="NID নম্বর" className="w-full outline-none p-4 border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="password" className="mb-2 text-base font-medium inline-block">
            পাসওয়ার্ড
          </label>
          <FormItem name="password" rules={[{ required: true, message: "অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন" }]}>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড" className="w-full outline-none p-4 pr-12 border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" />
              <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </FormItem>
        </div>
        <button disabled={loading} type="submit" className="w-full flex items-center gap-2 justify-center bg-primary text-white font-bold p-4 rounded-xl hover:bg-[#832043] transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2">
          নিবন্ধন করুন
          {loading && <AiOutlineLoading3Quarters color="white" className="animate-spin" fontSize={16} />}
        </button>
      </div>
    </Form>
  );
}

export default RegisterForm;

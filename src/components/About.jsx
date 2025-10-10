import '/src/components/components.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';

export default function About() {
    return (
        <section className="about-page-content p-8 md:p-12 lg:p-16 text-center text-gray-800">
            
            {/* --- Our Mission Section --- */}
            <div className="mission-section mb-12">
                <h2 className="text-4xl font-extrabold mb-6 text-green-900 border-b-4 border-yellow-500 inline-block px-4 pb-2">
                    Our Mission
                </h2>
                <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-6">
                    At GĐPT Từ Đàm, we strive to cultivate a **compassionate and mindful community** where young individuals can grow spiritually, mentally, and emotionally. Rooted in the teachings of the Buddha, we provide a welcoming space to explore mindfulness, kindness, and wisdom through engaging activities, discussions, and service projects.
                </p>
                
                <div className="max-w-3xl mx-auto text-left text-base space-y-3">
                    <p>
                        **By joining our organization, you will:**
                    </p>
                    <ul className="list-none space-y-2 pl-0">
                        <li className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">❤️</span>
                            Connect with like-minded peers who share your values and aspirations.
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">💡</span>
                            Learn practical Buddhist teachings to apply in daily life for inner peace and clarity.
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">🌱</span>
                            Grow as a leader through community service, meditation, and self-development.
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">💖</span>
                            Serve others with compassion, making a meaningful impact in the world.
                        </li>
                    </ul>
                </div>

                <p className="mt-8 text-lg font-semibold">
                    Come be a part of something greater! 🌟
                </p>
                {/* Placeholder button, assuming this links to /apply or a custom apply form */}
                <Link to="/apply" className="hover:text-yellow-300">Click Here To Join Our Family</Link>
            </div>
            
            <hr className="my-12 border-t-2 border-gray-300 max-w-lg mx-auto" />

            {/* --- Leadership Section (Matches structure in video) --- */}
            <div className="leadership-section mb-12">
                <h2 className="text-4xl font-extrabold mb-8 text-green-900 border-b-4 border-yellow-500 inline-block px-4 pb-2">
                    Leadership
                </h2>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Family Leaders</h3>
                <div className="leadership-list space-y-1 max-w-xl mx-auto text-lg">
                    <p>Gia Trưởng (Family Leader): Diệu Đạt - Lê Ngọc Thanh</p>
                    <p>Phụ Tá Gia Trưởng (Assistant Family Leader): Tâm Lộc - Nguyễn Hải (Cố vấn)</p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">General Division Leaders</h3>
                <div className="leadership-list space-y-1 max-w-xl mx-auto text-lg">
                    <p>Liên Đoàn Trưởng (General Division Leader): Như Hạnh - Phạm Huy Vũ</p>
                    <p>Liên Đoàn Phó (Deputy General Division Leader): Như Minh - Phạm Huy Bảo</p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Executive Committee</h3>
                <div className="leadership-list space-y-1 max-w-xl mx-auto text-lg">
                    <p>Thư Ký (Secretary): Thiện Tâm - Nguyễn Hữu Tuấn</p>
                    <p>Thủ Quỹ (Treasurer): Quảng Phước - Nguyễn Mindy</p>
                    <p>Phụ Tá Thủ Quỹ (Assistant Treasurer): Diệu Huệ - Bùi Thị Hòa</p>
                </div>

            </div>
            
            <hr className="my-12 border-t-2 border-gray-300 max-w-lg mx-auto" />

            {/* --- Youth Group Leaders (Matches structure in video) --- */}
            <div className="youth-leadership-section mb-12">
                <h2 className="text-4xl font-extrabold mb-8 text-green-900 border-b-4 border-yellow-500 inline-block px-4 pb-2">
                    Youth Group Leaders
                </h2>
                
                {/* ... (Content for Boys' and Girls' Group Leaders would go here) ... */}
                <h3 className="text-2xl font-bold mt-8 mb-4">Vietnamese Language Committee</h3>
                <div className="leadership-list space-y-1 max-w-xl mx-auto text-lg">
                    <p>Trưởng Ban (Committee Chair): Diệu Quang - Phạm Thị Quỳnh Giao</p>
                    <p>Phó Ban (Vice Chair): Chơn Bảo Ngọc - Nguyễn Quân Quân</p>
                    <p>Giảng Viên (Lecturer/Instructor): Quảng Tử Tánh - Savolainen Aaron</p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Sponsorship Committee (Ban Bảo Trợ)</h3>
                <div className="leadership-list space-y-1 max-w-xl mx-auto text-lg">
                    <p>Trưởng Ban (Committee Chair): Quảng Tử Huệ - Hà Hương Lan</p>
                </div>

            </div>

        </section>
    );
}
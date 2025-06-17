import { useState } from 'react';

export default function Logins() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
        role: 'organizer',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRoleChange = (role) => {
        setFormData((prev) => ({ ...prev, role }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm sm:max-w-md p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#110E5B] text-center mb-6">
                    Welcome To
                </h1>

                {/* Role Selection */}
                <div className="flex gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => handleRoleChange('organizer')}
                        className={`flex-1 py-2 rounded-lg border-2 transition ${
                            formData.role === 'organizer'
                                ? 'border-[#110E5B] text-[#110E5B] font-semibold'
                                : 'border-gray-300 text-gray-600'
                        }`}
                    >
                        Organizer
                    </button>
                    <button
                        type="button"
                        onClick={() => handleRoleChange('admin')}
                        className={`flex-1 py-2 rounded-lg border-2 transition ${
                            formData.role === 'admin'
                                ? 'border-[#110E5B] text-[#110E5B] font-semibold'
                                : 'border-gray-300 text-gray-600'
                        }`}
                    >
                        Admin
                    </button>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#110E5B]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#110E5B] pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4 text-[#110E5B] border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-[#110E5B] text-white rounded-md hover:bg-indigo-950 font-semibold transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

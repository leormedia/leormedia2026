import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiUser,
  FiArrowRight,
  FiCommand,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/auth/dashboard");
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post('/api/auth/login', { identifier, password });
      
      setLoading(false);
      if (res.data.success) {
        login(res.data.user);
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Invalid credentials provided");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] relative flex flex-col items-center justify-center p-4 selection:bg-yellow-500 selection:text-black">
      <Helmet>
        <title>Admin Login | Leor Media</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-[400px] animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Auth Container */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                Access Identity
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Username / Phone"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white text-[14px] outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                Secret Key
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-12 text-white text-[14px] outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                <p className="text-rose-500 text-center font-medium tracking-tight uppercase tracking-widest">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl text-[12px] uppercase font-bold tracking-[0.2em] shadow-lg shadow-yellow-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In to Dashboard
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600 tracking-widest uppercase">
            Unauthorized access is strictly prohibited
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-[10px]">
            <FiCommand /> <span>SYSTEM VERSION 1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

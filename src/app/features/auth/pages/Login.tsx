import { useState } from "react";
import { FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { useLoginForm } from "../hooks/useLoginForm";
import FormErrorHandler from "../../../../components/FormErrorHandler";

const Login = () => {
  const { register, errors, onSubmit } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1f_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Login Card */}
      <div className="relative w-full max-w-md z-10">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-lg opacity-20 animate-pulse" />

        <div className="relative bg-[#111116] backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/5">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl mb-6 border border-purple-500/20">
              <FiLock className="w-7 h-7 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-purple-400">
                  <FiMail className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 bg-[#0a0a0f] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ${
                    errors.email
                      ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                  {...register("email")}
                />
              </div>
              <FormErrorHandler name="email" errors={errors} />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-purple-400">
                  <FiLock className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-3.5 bg-[#0a0a0f] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ${
                    errors.password
                      ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormErrorHandler name="password" errors={errors} />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-700 bg-[#0a0a0f] text-purple-600 focus:ring-purple-500/50 focus:ring-2 focus:ring-offset-0 cursor-pointer transition-colors checked:bg-purple-600 checked:border-purple-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-2.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors inline-flex items-center gap-1 group"
              >
                Sign up for free
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

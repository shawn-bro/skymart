import React from 'react'
import { useAuth } from '../../hook/useAuth';
import { BrainCircuit, Cloud, Terminal, LogIn } from "lucide-react";

function Login() {
    let {
    navigate,
    register,
    errors,
    handleSubmit,
    loginapicaller
  } = useAuth();
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#141218] font-['Inter',sans-serif] text-[#e6e0e9]">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-24 -top-24 h-[500px] w-125 rounded-full bg-[#cfbcff]/5 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-100 w-[400px] rounded-full bg-[#cdc0e9]/5 blur-[100px]" />
      </div>

      {/* Main Login Container */}
      <main className="relative z-10 flex flex-grow items-center justify-center p-4">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Card */}
          <div className="overflow-hidden rounded-xl border border-[#494551]/30 bg-[#1d1b20]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Brand Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6750a4]">
                <BrainCircuit size={28} className="text-[#cfbcff]" />
              </div>

              <h1 className="text-2xl font-semibold tracking-tight">
                Skymart
              </h1>

              <p className="mt-1 text-sm text-[#cbc4d2]">
                Sign in to your workspace
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#494551]/50 bg-[#2b292f] px-4 py-3 transition-colors hover:bg-[#3b383e]"
              >
                <Cloud
                  size={20}
                  className="text-[#cbc4d2] transition-colors group-hover:text-white"
                />
                <span className="text-[11px] font-semibold tracking-wide">
                  GOOGLE
                </span>
              </button>

              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#494551]/50 bg-[#2b292f] px-4 py-3 transition-colors hover:bg-[#3b383e]"
              >
                <Terminal
                  size={20}
                  className="text-[#cbc4d2] transition-colors group-hover:text-white"
                />
                <span className="text-[11px] font-semibold tracking-wide">
                  GITHUB
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8 flex items-center">
              <div className="flex-grow border-t border-[#494551]/30" />

              <span className="mx-3 flex-shrink px-1 text-xs text-[#cbc4d2]">
                or continue with email
              </span>

              <div className="flex-grow border-t border-[#494551]/30" />
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(loginapicaller)}
              className="space-y-6"
            >
              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="ml-1 text-[11px] font-semibold tracking-wide text-[#cbc4d2]"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email",{required:"enter the email"})}
                  className="w-full rounded-lg border border-[#494551]/50 bg-[#0f0d13] px-4 py-3 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                />
                {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label
                    htmlFor="password"
                    className="text-[11px] font-semibold tracking-wide text-[#cbc4d2]"
                  >
                    PASSWORD
                  </label>

                  <a
                    href="#"
                    className="text-xs text-[#cfbcff] transition-all hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password",{required:"enter the password"})}
                  className="w-full rounded-lg border border-[#494551]/50 bg-[#0f0d13] px-4 py-3 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                />
                {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 px-1">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="h-4 w-4 rounded border-[#494551]/50 bg-[#0f0d13] text-[#cfbcff] focus:ring-[#cfbcff]/30"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer select-none text-xs text-[#cbc4d2]"
                >
                  Stay signed in
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6750a4] py-4 text-sm font-semibold text-[#e0d2ff] shadow-lg transition-all duration-300 hover:bg-[#cfbcff] hover:text-[#381e72] hover:shadow-[#cfbcff]/20 active:scale-[0.98]"
              >
                <span>Sign In</span>
                <LogIn size={20} />
              </button>
            </form>

            {/* Sign Up Footer */}
            <div className="mt-8 border-t border-[#494551]/30 pt-6 text-center">
              <p className="text-xs text-[#cbc4d2]">
                Don't have an account?

                <a
                onClick={()=> navigate("/register")}
                  className="ml-1 font-bold text-[#cfbcff] hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>

          {/* Footer Meta */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#948e9c]/50">
              © 2024 Synthetix AI. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-2 flex justify-center gap-4">
              <a
                href="#"
                className="text-xs text-[#948e9c]/40 transition-colors hover:text-[#cbc4d2]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs text-[#948e9c]/40 transition-colors hover:text-[#cbc4d2]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative AI Image */}
      <div className="pointer-events-none fixed bottom-6 right-6 hidden h-64 w-64 select-none overflow-hidden rounded-xl border border-[#494551]/20 opacity-20 lg:block">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMNAC4ppTVn0YPcws7fR8cZoQ0dwlcJzCHSV2igftfRdCty6Xzwi_PvJWJUQiXO8gyA4Za08K6TKFIlPbFGSEIfALTx5yS7m2Loweu3Chxa7qKfJS6kF_cwtpvauw2TcTN5kGAR8YGKUUiQoGQlDen_9MfQv3U_Hjhe8Uasps5cbAYAfuQ0vFuo_HaGsihet7JFy_qk2DKMhLdLZt1c3k4-pJz9ydAXGWkq0Jq8YHaWg6fKfWCKGB1rNI8ExadFltELKG_QsO-4ex"
          alt="Abstract AI visualization"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141218] to-transparent" />
      </div>
    </div>
  );
}

export default Login

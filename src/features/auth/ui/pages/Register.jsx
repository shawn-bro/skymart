import React from 'react'
import { useAuth } from '../../hook/useAuth'
import {
  Sparkles,
  User,
  Mail,
  Lock,
  BrainCircuit,
} from "lucide-react";

function Register() {
 let {
    navigate,
    register,
    errors,
    handleSubmit,
    registerapicaller
  } = useAuth();
  return (
     <div className="min-h-screen overflow-x-hidden bg-[#141218] font-['Inter',sans-serif] text-[#e6e0e9]">
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center px-6 py-5 md:px-8">
        <h2 className="text-xl font-bold tracking-tight">
          Skymart
        </h2>
      </header>

      <main className="flex min-h-screen w-full">
        {/* Left Section */}
        <section className="relative hidden w-[40%] flex-col justify-end overflow-hidden border-r border-[#494551]/30 bg-linear-to-br from-[#0f172a] to-[#1e1b4b] p-12 md:flex">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFssbCNBW8f-0tJgLllgAqAWDBNzNAy3bF5hZHj6AqDD0XL_akzAHMKZFk5xWYQCr3oSIZzV4OS7NZLkSQR6c-ww1c2h5EV8j_DX_4vZ9IeWDEVRbo697BVSHU-H4hr95r0PaC86EEhuuzAtjPVfxhuXT1cV2QpxAMeB_h_yELwhUs3PDszkwE2osVYRL8EbHGlrvBMAAw19qBCzcVr8KGwWB55RmaRlIKT-_tIv2KO6pLY79Dq6eYB0hTHWbcC2VvDIkov6jF2Av"
              alt="Neural network visualization"
              className="h-full w-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#141218] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-[#cfbcff]">
              <Sparkles size={19} fill="currentColor" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Next-Gen Intelligence
              </span>
            </div>

            <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
              Accelerate your team's intelligence.
            </h1>

            <p className="max-w-sm text-base leading-6 text-[#cbc4d2]">
              Connect your enterprise data to our specialized AI
              models and unlock unparalleled strategic insights
              in seconds.
            </p>

            <div className="flex gap-8 pt-8 opacity-70">
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-[#cbc4d2]">Uptime SLA</p>
              </div>

              <div>
                <p className="text-2xl font-bold">ISO</p>
                <p className="text-xs text-[#cbc4d2]">
                  27001 Certified
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex w-full items-center justify-center bg-[#141218] px-6 py-24 md:w-[60%] md:px-12 lg:px-20">
          <div className="w-full max-w-120 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="text-sm leading-5 text-[#cbc4d2]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(registerapicaller)}
              className="space-y-6"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold uppercase tracking-wide text-[#cbc4d2]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name",{required:"enter the name"})}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                </div>
                {errors.name && <p className="text-red-500 font-semibold">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold uppercase tracking-wide text-[#cbc4d2]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email",{required:"enter the email"})}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                </div>
                 {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-[11px] font-semibold uppercase tracking-wide text-[#cbc4d2]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password",{required:"enter the password"})}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                   {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex gap-2">
                    <div className="h-1 flex-1 rounded-full bg-[#cfbcff]" />
                    <div className="h-1 flex-1 rounded-full bg-[#cfbcff]" />
                    <div className="h-1 flex-1 rounded-full bg-[#494551]/40" />
                    <div className="h-1 flex-1 rounded-full bg-[#494551]/40" />
                  </div>

                  <span className="text-xs text-[#cfbcff]">
                    Strong password
                  </span>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 py-1">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms")}
                  className="mt-1 h-5 w-5 rounded border-[#494551] bg-[#1d1b20] text-[#cfbcff] focus:ring-[#cfbcff]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-[#cbc4d2]"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#cfbcff] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[#cfbcff] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-linear-to-r from-[#6750a4] to-[#cfbcff] py-4 font-bold text-[#22005d] shadow-lg transition hover:opacity-90 active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-[#494551]/50" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#948e9c]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-[#494551]/50" />
            </div>

            {/* SSO */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#494551] py-4 transition hover:bg-[#1d1b20]"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHN2FlWTdTx9wh1INaysdZY8qgrdScmCkhGNyzpMYyvbRwQt2tcsIHfDPFWnxeHKbRsGL3kW_0qJfkMIP_Tzkq4WzNtJJHh2L-6aCvq3dIfBzxRm8FxkxInr0BNOLock5HHxiDu_568eYshXQPEERUmYCL6I98MRWPxixmmTcUa1XrMBwbTQe4rVeFRt7uwM15sJK8-NlZpy6L1C-6i-GIifuyiO0xSTjd4KjorP2uvhSTxoppxXtHLkSQ6hnDzznwGqyj6Ao9Q2Xf"
                  alt="Google"
                  className="h-5 w-5"
                />
                <span className="text-sm">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#494551] py-4 transition hover:bg-[#1d1b20]"
              >
                <BrainCircuit size={20} />
                <span className="text-sm">SSO</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="pt-4 text-center">
              <p className="text-sm text-[#cbc4d2]">
                Already have an account?{" "}
                <a
                onClick={()=>navigate("/")}
                  className="ml-1 font-bold text-[#cfbcff] hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center justify-between gap-4 border-t border-[#494551]/30 bg-[#141218] px-6 py-8 md:flex-row md:px-8">
        <div className="text-xl font-semibold">Synthetix AI</div>

        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy Policy", "Terms of Service", "Security", "System Status"].map(
            (item) => (
              <a
                key={item}
                className="text-xs text-[#cbc4d2] transition hover:text-white"
              >
                {item}
              </a>
            )
          )}
        </div>

        <p className="text-center text-xs text-[#cbc4d2]">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  )
}

export default Register

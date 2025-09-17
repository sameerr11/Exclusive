import React, { useState } from 'react';

const EvErp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('This is a demo login. No backend is connected.');
  };

  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-14 md:py-20">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8 border border-white/10 bg-primary">
        <h2 className="text-2xl font-bold text-white text-center mb-2">EV ERP</h2>
        <p className="text-white/70 text-center mb-8">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1.5">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent transition"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 text-gray-700 hover:text-gray-900"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-white/40 text-accent focus:ring-accent"
              />
              <span className="text-sm text-white/80">Remember me</span>
            </label>

            <button type="button" className="text-sm text-accent hover:underline">Forgot password?</button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-transparent transition"
          >
            Sign in
          </button>

          {message && (
            <p className="text-center text-sm text-white/90 mt-2">{message}</p>
          )}
        </form>

        <p className="text-center text-sm text-white/70 mt-6">
          By signing in, you agree to our <span className="text-accent">Terms</span> and <span className="text-accent">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default EvErp;



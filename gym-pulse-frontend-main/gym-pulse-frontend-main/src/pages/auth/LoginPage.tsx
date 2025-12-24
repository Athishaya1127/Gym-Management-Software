import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dumbbell, Eye, EyeOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { UserRole } from '@/data/mockData';
import { Link } from 'react-router-dom';

const roles: { value: UserRole; label: string }[] = [
  { value: 'admin', label: 'Admin' },
  { value: 'trainer', label: 'Trainer' },
  { value: 'trainee', label: 'Trainee' },
];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(searchParams.get('tab') !== 'signup');
  const [selectedRole, setSelectedRole] = useState<UserRole>('trainee');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = { name: formData.name || formData.email.split('@')[0], role: selectedRole, email: formData.email };
    localStorage.setItem('gymforge_user', JSON.stringify(user));
    
    toast({ title: isLogin ? 'Welcome back!' : 'Account created!', description: `Logged in as ${selectedRole}` });
    navigate(`/${selectedRole}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-md mx-4">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Dumbbell className="h-10 w-10 text-primary" />
          <span className="font-display text-3xl font-bold gradient-text">GymForge</span>
        </Link>

        <div className="glass-card p-8">
          <div className="flex rounded-lg bg-muted/50 p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${!isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Sign Up
            </button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">Select your role:</p>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all border ${selectedRole === role.value ? 'bg-primary/20 border-primary text-primary' : 'bg-muted/50 border-border text-muted-foreground hover:border-primary/50'}`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="bg-muted/50" required />
            )}
            <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-muted/50" required />
            <div className="relative">
              <Input type={showPassword ? 'text' : 'password'} placeholder="Password" value={formData.password} onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))} className="bg-muted/50 pr-10" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button type="submit" variant="hero" className="w-full">{isLogin ? 'Login' : 'Create Account'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

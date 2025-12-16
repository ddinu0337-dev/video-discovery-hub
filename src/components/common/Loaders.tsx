import { Search } from 'lucide-react'

// Gemini-style video searching loader
export const GeminiLoader = () => (
  <div className="flex items-center gap-3">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-gradient-to-b from-primary to-primary/80 rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-gradient-to-b from-primary to-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-2 h-2 bg-gradient-to-b from-primary to-primary/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>
  </div>
)

// Google Search-style pulsing loader
export const GoogleSearchLoader = () => (
  <div className="flex items-center gap-2">
    <Search className="w-4 h-4 text-primary animate-pulse" />
    <span className="text-sm text-muted-foreground font-medium">Thinking...</span>
  </div>
)

// Modern wave animation loader
export const WaveLoader = () => (
  <div className="flex items-center gap-3">
    <div className="flex gap-1 h-8 items-end">
      <div className="w-1.5 bg-gradient-to-t from-primary to-primary/70 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '12px' }} />
      <div className="w-1.5 bg-gradient-to-t from-primary to-primary/70 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '20px', animationDelay: '0.1s' }} />
      <div className="w-1.5 bg-gradient-to-t from-primary to-primary/70 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '28px', animationDelay: '0.2s' }} />
      <div className="w-1.5 bg-gradient-to-t from-primary to-primary/70 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '20px', animationDelay: '0.3s' }} />
      <div className="w-1.5 bg-gradient-to-t from-primary to-primary/70 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '12px', animationDelay: '0.4s' }} />
    </div>
    <span className="text-sm text-muted-foreground font-medium">Generating response...</span>
  </div>
)

// Rotating circle loader (Perplexity-style)
export const RotatingCircleLoader = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
      <div className="absolute inset-1 rounded-full border-2 border-transparent border-b-primary/70 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
    </div>
    <span className="text-sm text-muted-foreground font-medium">Searching...</span>
  </div>
)

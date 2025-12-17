import { useParams } from "react-router-dom";
import { Send, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Shell from "@/components/layout/Shell";
import { cn } from "@/lib/utils";
import { GeminiLoader } from "@/components/common/Loaders";
import VideoInfo from "@/components/video/VideoInfo";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I can help you understand this video. Ask me anything about the content!",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    };
    
    setChatMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm analyzing the video content. This feature will be available soon!",
      };
      setChatMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Shell>
      <div className="py-2 px-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/5 border border-border/50">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <VideoInfo
              title="Understanding React Hooks in Depth"
              channelName="Tech Academy"
              views="245K views"
              description="In this comprehensive tutorial, we dive deep into React Hooks and explore how they revolutionize state management in functional components. Learn about useState, useEffect, useContext, and custom hooks with practical examples."
            />
          </div>

          {/* Chat Section */}
          <div className={`lg:col-span-1 ${isExpanded ? 'fixed inset-0 z-50 bg-background p-4' : ''}`}>
            <div className={`bg-card border border-border/50 rounded-lg flex flex-col ${
              isExpanded ? 'h-full' : 'h-[450px] lg:h-[calc(100vh-80px)]'
            }`}>
              {/* Chat Header */}
              <div className="p-2.5 border-b border-border/50 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-foreground text-sm">AI Chat</h2>
                  <p className="text-xs text-muted-foreground">Ask questions about this video</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-8 w-8"
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </div>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-2.5">
                <div className="space-y-2.5">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <GeminiLoader />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="p-2.5 border-t border-border/50">
                <div className="relative">
                  {/* Gradient glow effect */}
                  <div
                    className={cn(
                      "absolute -inset-[2px] rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-md transition-all duration-500",
                      isFocused && "opacity-70 animate-pulse"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-all duration-300",
                      isFocused && "opacity-100"
                    )}
                  />
                  <div
                    className={cn(
                      "relative flex items-center rounded-xl border bg-card transition-all duration-200",
                      isFocused
                        ? "border-transparent shadow-lg"
                        : "border-border/70 hover:border-border"
                    )}
                  >
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Ask about this video..."
                      className="h-10 w-full rounded-xl bg-card pl-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={cn(
                        "absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all shadow-md",
                        message.trim() ? "hover:opacity-90" : "opacity-40 cursor-not-allowed"
                      )}
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default VideoDetail;

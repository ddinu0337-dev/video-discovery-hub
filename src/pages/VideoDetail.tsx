import { useParams } from "react-router-dom";
import { Send, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Shell from "@/components/layout/Shell";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
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
    
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm analyzing the video content. This feature will be available soon!",
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const description = "Video description will appear here. This section provides detailed information about the video content, helping viewers understand what they're about to watch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

  return (
    <Shell>
      <div className="py-2 px-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Video Player & Info Section */}
          <div className="lg:col-span-2 space-y-2">
            {/* YouTube Player */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/5 border border-border/50">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="space-y-1.5">
              <h1 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                Video Title
              </h1>
              
              {/* Description Box */}
              <div className="bg-muted/30 rounded-lg p-2.5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Channel Name</span>
                  <span>•</span>
                  <span>123K views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <p className={`text-sm text-foreground/80 leading-relaxed ${!showFullDescription ? "line-clamp-2" : ""}`}>
                  {description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-1 h-auto p-0 text-xs font-medium text-foreground hover:bg-transparent"
                >
                  {showFullDescription ? (
                    <>Show less <ChevronUp className="h-3 w-3 ml-1" /></>
                  ) : (
                    <>Show more <ChevronDown className="h-3 w-3 ml-1" /></>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/50 rounded-lg h-[350px] lg:h-[calc(100vh-120px)] flex flex-col">
              {/* Chat Header */}
              <div className="p-2.5 border-b border-border/50">
                <h2 className="font-semibold text-foreground text-sm">AI Chat</h2>
                <p className="text-xs text-muted-foreground">Ask questions about this video</p>
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
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="p-2.5 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about this video..."
                    className="flex-1 bg-muted/50 border-border/50 h-8 text-sm"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-primary hover:bg-primary/90 h-8 w-8"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
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

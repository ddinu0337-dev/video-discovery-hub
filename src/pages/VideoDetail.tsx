import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ThumbsUp, Share2, Send } from "lucide-react";
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
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
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
    
    // Simulate AI response
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

  return (
    <Shell>
      <div className="py-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="mb-4 gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player & Info Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* YouTube Player */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5 border border-border/50">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <h1 className="text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                Video Title
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">CH</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Channel Name</p>
                    <p className="text-xs text-muted-foreground">1.2M subscribers</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>123K views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Video description will appear here. This section provides detailed information about the video content, helping viewers understand what they're about to watch.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/50 rounded-xl h-[500px] lg:h-[calc(100vh-200px)] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50">
                <h2 className="font-semibold text-foreground">AI Chat</h2>
                <p className="text-xs text-muted-foreground">Ask questions about this video</p>
              </div>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm ${
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
              <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about this video..."
                    className="flex-1 bg-muted/50 border-border/50"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-primary hover:bg-primary/90"
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

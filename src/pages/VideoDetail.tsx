import { useParams } from "react-router-dom";
import { Send, MessageCircle, X, Minimize2, Maximize2 } from "lucide-react";
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
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

  return (
    <Shell>
      <div className="py-2 px-1 relative">
        {/* Video Player - Full Width */}
        <div className="w-full">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/5 border border-border/50">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Floating Chat Button */}
        {!isChatOpen && (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}

        {/* Overlay Chat Panel */}
        {isChatOpen && (
          <div
            className={`fixed z-50 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out ${
              isChatExpanded
                ? "inset-4 sm:inset-6 lg:inset-12"
                : "bottom-6 right-6 w-[calc(100%-3rem)] sm:w-96 h-[420px] sm:h-[480px]"
            }`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-3 border-b border-border/50 bg-muted/30 rounded-t-xl">
              <div>
                <h2 className="font-semibold text-foreground text-sm">AI Chat</h2>
                <p className="text-xs text-muted-foreground">Ask about this video</p>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsChatExpanded(!isChatExpanded)}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  {isChatExpanded ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsChatOpen(false);
                    setIsChatExpanded(false);
                  }}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-3">
              <div className="space-y-3">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted text-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <div className="p-3 border-t border-border/50 bg-muted/20 rounded-b-xl">
              <div className="flex items-center gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about this video..."
                  className="flex-1 bg-background/80 border-border/50 h-10 text-sm rounded-full px-4"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-primary hover:bg-primary/90 h-10 w-10 rounded-full shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
};

export default VideoDetail;

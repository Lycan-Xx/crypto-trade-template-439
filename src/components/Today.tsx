import React, { useState, useEffect, useCallback, useMemo } from "react";
import { format } from "date-fns";

export const Today = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const timeOfDayMessage = useMemo(() => {
    const hour = currentTime.getHours();
    if (hour < 4) return "Midnight Code Crunch";
    if (hour < 12) return "AM Coffee & Code";
    if (hour < 18) return "Afternoon Debug";
    if (hour < 22) return "Evening Code";
    return "Late Night Code";
  }, [currentTime]);

  const fullGreeting = useMemo(() => {
    return `Welcome! You're in ${timeOfDayMessage} mode.`;
  }, [timeOfDayMessage]);

  const runTypewriter = useCallback(() => {
    setIsTyping(true);
    setTypedText("");

    const startDelay = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullGreeting.length) {
          setTypedText(text => fullGreeting.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, 50);

    return () => clearTimeout(startDelay);
  }, [fullGreeting]);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const resetInterval = setTimeout(() => {
        runTypewriter();
      }, 10000);

      return () => clearTimeout(resetInterval);
    }
  }, [isTyping, runTypewriter]);

  useEffect(() => {
    const typewriterCleanup = runTypewriter();
    return typewriterCleanup;
  }, [runTypewriter]);

  const formattedTime = format(currentTime, "HH:mm:ss");
  const formattedDate = format(currentTime, "EEEE, MMMM do, yyyy");
  const dateParts = formattedDate.split(" ");

  return (
    <div className="glass p-2 rounded-lg w-48 border border-white/10">
      <div className="space-y-1">
        <div className="text-xs font-bold text-primary">Current Time</div>
        <div className="text-lg font-bold text-white font-mono tracking-wider">
          {formattedTime}
        </div>
        <div className="text-xs text-gray-400 font-medium">
          {dateParts.map((part, index) => (
            <span
              key={index}
              style={{
                color: index === 0 ? "#ec704c" : index === 1 ? "#22d3ee" : index === 2 ? "white" : "red",
              }}
            >
              {part}{" "}
            </span>
          ))}
        </div>
        <div className="text-xs font-mono text-gray-300 h-8 overflow-hidden">
          {typedText}
          <span className={`ml-1 inline-block w-1 h-3 bg-cyan-400 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
        </div>
      </div>
    </div>
  );
};
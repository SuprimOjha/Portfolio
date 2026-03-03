"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 5}px`;
        cursorRef.current.style.top = `${e.clientY - 5}px`;
      }
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = `${e.clientX - 15}px`;
          followerRef.current.style.top = `${e.clientY - 15}px`;
        }
      }, 80);
    };
    const grow = () => { if (cursorRef.current) cursorRef.current.style.transform = "scale(2)"; };
    const shrink = () => { if (cursorRef.current) cursorRef.current.style.transform = "scale(1)"; };
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ display: "none" }} />
      <div ref={followerRef} className="cursor-follower" style={{ display: "none" }} />
      <style>{`@media (pointer: fine) { .cursor, .cursor-follower { display: block !important; } }`}</style>
    </>
  );
}

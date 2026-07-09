"use client";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ANIMATION_EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  images: string[];
  title: string;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ImageLightbox({
  images,
  title,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const goTo = useCallback(
    (index: number) => {
      onIndexChange((index + images.length) % images.length);
    },
    [images.length, onIndexChange]
  );

  const nextImage = useCallback(
    () => goTo(currentIndex + 1),
    [currentIndex, goTo]
  );

  const prevImage = useCallback(
    () => goTo(currentIndex - 1),
    [currentIndex, goTo]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, nextImage, onClose, prevImage]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: ANIMATION_EASE }}
            className="relative z-10 flex w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <p className="truncate text-sm font-medium text-foreground/90 sm:text-base">
                {title}
                <span className="ml-2 text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </span>
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                aria-label="Close preview"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-navy-900/60 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative flex h-[min(75dvh,720px)] w-full items-center justify-center p-3 sm:p-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} — screenshot ${currentIndex + 1} of ${images.length}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: ANIMATION_EASE }}
                    className="max-h-full max-w-full rounded-lg object-contain"
                    draggable={false}
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/90 text-foreground backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 sm:left-4 sm:size-11"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="size-5" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/90 text-foreground backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 sm:right-4 sm:size-11"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="size-5" aria-hidden />
                    </button>
                  </>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`View screenshot ${index + 1}`}
                    aria-current={index === currentIndex}
                    onClick={() => goTo(index)}
                    className={cn(
                      "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                      index === currentIndex
                        ? "h-1.5 w-5 bg-cyan-400"
                        : "size-1.5 bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

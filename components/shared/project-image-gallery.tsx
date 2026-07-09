"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ImageLightbox } from "@/components/shared/image-lightbox";
import { cn } from "@/lib/utils";

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

export function ProjectImageGallery({
  images,
  title,
  className,
}: ProjectImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrentImage((index + images.length) % images.length);
    },
    [images.length]
  );

  const nextImage = useCallback(() => goTo(currentImage + 1), [currentImage, goTo]);
  const prevImage = useCallback(() => goTo(currentImage - 1), [currentImage, goTo]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  useEffect(() => {
    if (isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-gallery="project"]')) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextImage, prevImage]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={cn("w-full", className)}
        data-gallery="project"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={0}
      >
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-navy-900/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
          <div className="relative aspect-[16/10] max-h-[200px] w-full sm:max-h-[240px] lg:max-h-[260px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0 flex items-center justify-center p-2 sm:p-3"
              >
                <button
                  type="button"
                  onClick={openLightbox}
                  className="group flex h-full w-full cursor-zoom-in items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  aria-label={`Open screenshot ${currentImage + 1} in fullscreen preview`}
                >
                  <img
                    src={images[currentImage]}
                    alt={`${title} — screenshot ${currentImage + 1} of ${images.length}`}
                    className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    loading={currentImage === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </button>
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/90 text-foreground backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-navy-950 focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-950/90 text-foreground backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-navy-950 focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </>
            )}
          </div>
        </div>

        {images.length > 1 && (
          <div
            className="mt-3 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Screenshot navigation"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === currentImage}
                aria-label={`View screenshot ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                  index === currentImage
                    ? "h-1.5 w-5 bg-cyan-400"
                    : "size-1.5 bg-white/25 hover:bg-white/45"
                )}
              />
            ))}
            <span className="sr-only" aria-live="polite">
              Screenshot {currentImage + 1} of {images.length}
            </span>
          </div>
        )}
      </div>

      <ImageLightbox
        images={images}
        title={title}
        currentIndex={currentImage}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onIndexChange={setCurrentImage}
      />
    </>
  );
}

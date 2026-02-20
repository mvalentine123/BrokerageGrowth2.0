export const DiagonalHatchBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            var(--color-gray-300) 10px,
            var(--color-gray-300) 11px
          )`,
          opacity: 0.15,
          maskImage: `linear-gradient(
            to right,
            black 0%,
            transparent 15%,
            transparent 85%,
            black 100%
          )`,
          WebkitMaskImage: `linear-gradient(
            to right,
            black 0%,
            transparent 15%,
            transparent 85%,
            black 100%
          )`,
        }}
      />
    </div>
  );
};

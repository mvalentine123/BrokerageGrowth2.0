export const DiagonalHatchBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 dark:opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            var(--color-gray-400) 15px,
            var(--color-gray-400) 16px
          )`,
          opacity: 0.4,
        }}
      />
    </div>
  );
};

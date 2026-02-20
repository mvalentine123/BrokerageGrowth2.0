export const DiagonalHatchBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0, 0, 0, 0.08) 20px,
            rgba(0, 0, 0, 0.08) 22px
          )`,
        }}
      />
    </div>
  );
};

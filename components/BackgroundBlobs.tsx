export function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="blob absolute -left-24 -top-20 h-[28rem] w-[28rem] rounded-full bg-sage blur-[100px]" />
      <div className="blob blob-delay-1 absolute -right-24 top-24 h-[34rem] w-[34rem] rounded-full bg-lavender blur-[120px]" />
      <div className="blob blob-delay-2 absolute bottom-[-6rem] left-1/4 h-[26rem] w-[26rem] rounded-full bg-peach opacity-80 blur-[110px]" />
    </div>
  );
}

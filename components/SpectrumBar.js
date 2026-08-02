// The 1px animated bar fixed to the very top of the viewport, above
// everything else including the header. Pure CSS animation, no JS needed;
// prefers-reduced-motion freezes it via app/globals.css rather than removing
// it, so the brand mark stays but the motion doesn't.
export default function SpectrumBar() {
  return (
    <div className="spectrum-bar" aria-hidden="true">
      <div className="spectrum-bar__track" />
    </div>
  );
}

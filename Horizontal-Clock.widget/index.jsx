const { useState, useEffect, useRef } = React;

const buildBlurLayers = (direction) =>
  Array.from({ length: 8 }, (_, i) => {
    const blur = 0.0546875 * Math.pow(2, i);
    const s = i * 12.5;
    const stops =
      i === 7
        ? `rgba(0,0,0,0) ${s}%, rgb(0,0,0) 100%`
        : i === 6
        ? `rgba(0,0,0,0) ${s}%, rgb(0,0,0) ${s + 12.5}%, rgb(0,0,0) 100%`
        : `rgba(0,0,0,0) ${s}%, rgb(0,0,0) ${s + 12.5}%, rgb(0,0,0) ${s + 25}%, rgba(0,0,0,0) ${s + 37.5}%`;
    const mask = `linear-gradient(to ${direction}, ${stops})`;
    return {
      zIndex: i + 1,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      maskImage: mask,
      WebkitMaskImage: mask,
    };
  });

const BLUR_LAYERS_LEFT = buildBlurLayers("left");
const BLUR_LAYERS_RIGHT = buildBlurLayers("right");

const pad = (n) => String(n).padStart(2, "0");

const SLIDE_MS = 1000;
const ITEM_W = 60;
const CENTER_INDEX = 3;
const DIM_ALPHA = 0.085;
const BRIGHT_ALPHA = 0.5;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const lerp = (a, b, t) => a + (b - a) * t;

const HorizontalClock = () => {
  const [now, setNow] = useState(() => new Date());
  const nowRef = useRef(now);
  const rowRef = useRef(null);
  const itemRefs = useRef([]);
  nowRef.current = now;

  useEffect(() => {
    let id;
    const tick = () => {
      setNow(new Date());
      id = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    id = setTimeout(tick, 1000 - (Date.now() % 1000));
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    let raf;
    const loop = () => {
      const secStart = nowRef.current.getTime();
      const t = clamp01((Date.now() - secStart) / SLIDE_MS);
      const eased = easeOutCubic(t);
      const offset = ITEM_W * (1 - eased);

      if (rowRef.current) {
        rowRef.current.style.transform = `translate3d(calc(-50% + ${offset}px), 0, 0)`;
      }

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const distance = (i - CENTER_INDEX) * ITEM_W + offset;
        const dt = clamp01(Math.abs(distance) / ITEM_W);
        const alpha = lerp(BRIGHT_ALPHA, DIM_ALPHA, dt);
        el.style.color = `rgba(255,255,255,${alpha.toFixed(3)})`;
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const s = now.getSeconds();
  const window = [-3, -2, -1, 0, 1, 2, 3].map((o) => (s + o + 60) % 60);

  return (
    <div className="cw-root">
      <div className="cw-time">
        <div className="cw-hm">{pad(now.getHours())}</div>
        <div className="cw-hm">{pad(now.getMinutes())}</div>
      </div>

      <div className="cw-sec-wrap">
        <div className="cw-sec-row" ref={rowRef}>
          {window.map((v, i) => (
            <div
              className="cw-sec-item"
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              {pad(v)}
            </div>
          ))}
        </div>

        <div className="cw-blur cw-blur-left">
          {BLUR_LAYERS_LEFT.map((st, i) => (
            <div key={i} style={st} />
          ))}
        </div>
        <div className="cw-blur cw-blur-right">
          {BLUR_LAYERS_RIGHT.map((st, i) => (
            <div key={i} style={st} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalClock;
export const width = 150;
export const height = 180;
export const y = 348;
export const x = 1170;

export const className = `
  .cw-root {
    position: relative;
    width: 100vw;
    height: 100vh;
    border-radius: 20px;
    overflow: hidden;
    font-family: "Inter", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    padding: 17%; 
    font-size: 52px;
    -webkit-user-select: none;
  }

  .cw-time {
    text-align: center;
    z-index: 2;
  }

  .cw-hm {
    font-weight: 800;
    line-height: 0.88;
    letter-spacing: -0.055em;
    color: #f2f2f2;
    font-variant-numeric: tabular-nums;
  }

  .cw-sec-wrap {
    height: 86px;
    overflow: hidden;
    z-index: 1;
  }

  .cw-sec-row {
    position: absolute;
    top: 55%;
    left: 50%;
    display: flex;
    will-change: transform;
    transform: translate3d(calc(-50% + ${ITEM_W}), 0, 0);
  }

  .cw-sec-item {
    width: $ITEM_W;
    flex: none;
    text-align: center;
    font-weight: 800;
    letter-spacing: -0.07em;
    color: rgba(255,255,255,0.085);
    font-variant-numeric: tabular-nums;
    will-change: color;
  }

  .cw-blur {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 54%;
    z-index: 10;
    pointer-events: none;
  }

  .cw-blur-left { left: 0; }
  .cw-blur-right { right: 0; }

  .cw-blur > div {
    position: absolute;
    inset: 0;
    opacity: 1;
    border-radius: 0;
    pointer-events: none;
  }
`;
export const windowWidth = 350;
export const windowHeight = 80;
export const windowTop = 40;
export const windowLeft = 10;

export const refreshFrequency = 1000 * 60 * 1;

export const command = "./taqvim.sh";

const ORDER = ["bomdod", "quyosh", "peshin", "asr", "shom", "xufton"];

export default function Taqvim({ output }) {
  if (!output) return null;

  let data;
  try {
    data = JSON.parse(output);
  } catch {
    return null;
  }

  const { times } = data.today;
  const labels = data.labels;
  const meta = data.meta;
  const current = activeKey(times, meta?.now);

  return (
    <div style={screen}>
      <div style={widget}>
        <div style={topRow}>
          <span>{meta?.region?.name}</span>
          <span style={{ textTransform: "capitalize" }}>
            {formatDate(meta?.date)}
          </span>
        </div>

        <div style={timesRow}>
          {ORDER.map((k) => (
            <div key={k} style={column}>
              <div style={label}>{shortLabel(labels[k])}</div>
              <div
                style={{
                  ...time,
                  ...(k === current ? activeTime : {}),
                }}
              >
                {times[k]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Helpers */

function toMin(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function activeKey(times, now) {
  if (!now) return null;
  const n = toMin(now);
  let active = null;
  for (const k of ORDER) {
    if (toMin(times[k]) <= n) active = k;
  }
  return active;
}

function shortLabel(t) {
  return t.split(" ")[0];
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("uz-UZ", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
}

const screen = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitUserSelect: "none",
  pointerEvents: "none",
};

const widget = {
  width: windowWidth,
  height: windowHeight,
  top: 100,
  left: 400,
  background: "#111",
  borderRadius: 8,
  padding: "8px 12px",
  color: "#fff",
  fontFamily: "system-ui",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 12,
  opacity: 0.8,
  marginBottom: 6,
};

const timesRow = {
  display: "flex",
  justifyContent: "space-between",
};

const column = {
  textAlign: "center",
  minWidth: 40,
};

const label = {
  fontSize: 11,
  opacity: 0.7,
};

const time = {
  fontSize: 14,
  padding: "2px 6px",
  borderRadius: 999,
};

const activeTime = {
  background: "#0b5d2d",
  fontWeight: 600,
};

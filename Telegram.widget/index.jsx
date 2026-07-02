export const width = 350;
export const height = 300;
export const x = 1120;
export const y = 30;

export default function TelegramWidget() {
  return (
    <iframe
      src="https://web.oqim.ai/"
      frameborder="0"
      style={{ height: "100vh", width: "100vw", borderRadius: 18 }}
    ></iframe>
  );
}

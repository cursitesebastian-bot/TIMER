import "./globals.css";

export const metadata = {
  title: "Egypt Hero",
  description: "Hero section demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

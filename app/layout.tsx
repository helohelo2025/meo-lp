import "./globals.css";

export const metadata = {
  title: "MEO集客支援GPTs",
  description: "Googleマップから来店を増やす",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

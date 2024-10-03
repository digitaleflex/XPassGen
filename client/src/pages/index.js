import Image from "next/image";
import localFont from "next/font/local";

// Définir les polices
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className={`${geistSans.variable} text-4xl font-bold mb-4`}>
        Bienvenue sur XPassGen
      </h1>
      <p className={`${geistMono.variable} text-lg text-gray-600 mb-8 text-center`}>
        Générez des mots de passe sécurisés facilement.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-200">
        Commencer
      </button>
    </div>
  );
}

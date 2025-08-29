import "./globals.css";


//METADADOS HEAD
export const metadata = {
  title: "Chameleon",
  description: "Aprenda idiomas de uma nova forma",
};

//MOLDURA PAGINA
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-blue-200 text-gray-800">
        {/* HEADER */}
        <header className="bg-white border-b-2 border-gray-300 p-3">
          <h1 className="text-blue-600 font-bold text-xl text-center">CHAMELEON</h1>
        </header>

        {/* MAIN */}
        <main className="flex flex-1 items-center justify-center px-4">{children}</main>

        {/* FOOTER */}
        <footer className="flex justify-around border-t-2 border-gray-300 p-2 text-xs">
          <p>
            CREATE BY <strong>RICARDO CIPRIANI</strong>
          </p>
          <p>GITHUB @LUNX</p>
        </footer>
      </body>
    </html>
  );
}
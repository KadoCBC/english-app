import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center space-y-10">
      <h2 className="text-3xl font-semibold w-100 break-words"> 
        Uma nova forma para se aprender um idioma!
      </h2>

      <div className="flex flex-col gap-6 items-center">
        <button className="botao-personalizado">
          COMECE AGORA
        </button>
        <button className="botao-personalizado">
          JÁ TENHO CONTA
        </button>
      </div>
    </section>
  );
}

// 'text- 3x1' -> tamanho do texto
import { ArrowRight } from "lucide-react";
import { FaRegNewspaper, FaWhatsapp } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

export default function Contact(){
return (
    <div>
        <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-center mb-36 mt-28">
        
         Entre em contato
        </h2>
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <FaWhatsapp className="h-16 w-16 mb-4"/>
         Mensagem
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Nos envie uma mensagem através de nosso canal oficial do WhatsApp. A equipe de suporte logo te responderá.
        </p>
      </div>
      <button className="bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Enviar mensagem
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <MdOutlineEmail className="h-16 w-16 mb-4"/>
        E-mail
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Caso prefira entrar em contato via e-mail, preencha o formulário abaixo e um de nossos especialistas responderá em até 3 dias úteis
        </p>
      </div>
      <button className="bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Enviar e-mail
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <FaWhatsapp className="h-16 w-16 mb-4"/>
        Telefone
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Também temos uma central de atendimento 24 horas pronta para te antender e resolver qualquer problema.
        </p>
      </div>
      <button className="mt-10 bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Visitar Central de Contato
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    </div>

    <div>
        <h2 className=" text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-center mb-36 mt-48">
        
        Outros assuntos
        </h2>
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-48">
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <FaRegNewspaper className="h-16 w-16 mb-4"/>
        Mídia & Imprensa
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Envie uma mensagem para o nosso representante de PR.
        </p>
      </div>
      <button className="mt-24 bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Enviar e-mail
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <PiHandshake className="h-16 w-16 mb-4"/>
        Parcerias & patrocínios
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Conheça as possibilidades de parceria e patrocínio para os produtos do Mercado Preso.
        </p>
      </div>
      <button className="mt-4 bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Enviar e-mail
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col justify-center gap-12 p-4 h-auto lg:max-h-[700px] overflow-hidden">
      <div className="flex flex-col gap-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        <IoBriefcaseOutline className="h-16 w-16 mb-4"/>
        Carreiras
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold">
        Faça parte da evolução atual do mercado e-commerce.
        </p>
      </div>
      <button className="mt-24 bg-tchovis w-full lg:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
      Enviar e-mail
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    </div>
    </div>
    </div>
)



}
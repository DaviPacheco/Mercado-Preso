import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer";

export default function Login_Page() {
  return (
   
   <div className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-zambira rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <Image
              alt="Logo do Site"
              width={904}
              height={904}
              className="h-15 w-96 rounded-xl mt-2 mx-auto"
              src={"/icones/Mercado Preso  Icone Solo.png"}
            />
          </a>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-tchovis md:text-2xl text-center">
              Acesse sua conta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-tchovis"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-tchovis"
                >
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
              </div>
            </form>
            <Link href="/admin" className="lg:col-span-3 relative group">
            <button className="text-center bg-tchovis w-full lg:w-12/12 text-black px-6 py-2 rounded-3xl md:text-lg lg:text-xl xl-text-2xl duration-200 font-semibold hover:bg-tchovis/70 flex items-center justify-center gap-2">
              Entrar
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
 
 );
}

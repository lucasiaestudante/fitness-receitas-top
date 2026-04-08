import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Star, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, Check, Flame, Activity, TrendingUp, Clock, ShoppingCart, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white transition-colors" style={{ borderColor: isOpen ? "#00D84A33" : undefined }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
};

function Home() {
  return (
    <div className="min-h-screen w-full font-sans text-gray-900 bg-white overflow-x-hidden">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full py-2 px-4 text-center" style={{ backgroundColor: "#009933" }}>
        <p className="text-white text-sm font-medium">
          🔥 Oferta válida apenas hoje – 05 de março de 2026
        </p>
      </div>
      {/* 2. HERO SECTION */}
      <section className="w-full py-12 md:py-20 px-8 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 w-full min-w-0 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6" style={{ backgroundColor: "rgba(0,216,74,0.12)", color: "#005c1f" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#009933" }}></span>
            Lançamento Oficial
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-2" style={{ color: "#00D84A" }}>
            +100 Receitas Fitness
          </h1>
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-gray-900 mb-6">
            práticas, saborosas e testadas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Ideais para secar, ganhar massa e evoluir todos os dias. Receitas rápidas, simples e perfeitas para quem deseja emagrecer e construir um corpo definido com consistência.
          </p>
          {/* Hero image — mobile only, between text and CTA */}
          <div className="block md:hidden w-full overflow-hidden mb-8">
            <img src="/hero-image.png" alt="E-book Cover" className="w-full h-full object-cover block" />
          </div>
          <Button className="w-full md:w-auto text-white text-base md:text-lg font-bold py-6 px-8 rounded-full shadow-lg transition-all hover:scale-105 mb-4 flex items-center justify-center gap-2" style={{ backgroundColor: "#00D84A", boxShadow: "0 10px 30px rgba(0,216,74,0.3)" }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#00BF42")} onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00D84A")} onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}>
            Quero minhas +100 Receitas Agora <ArrowRight className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-3">
              <img src="https://picsum.photos/seed/av1/100/100" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://picsum.photos/seed/av2/100/100" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://picsum.photos/seed/av3/100/100" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-semibold text-gray-700">4.9 (4,000+ alunos)</span>
            </div>
          </div>
        </div>
        {/* Hero image — desktop only */}
        <div className="hidden md:flex flex-1 w-full max-w-md md:max-w-none overflow-hidden">
          <img 
            src="/hero-image.png" 
            alt="E-book Cover" 
            className="w-full h-full object-cover block"
          />
        </div>
      </section>
      {/* 3. FEATURES SECTION */}
      <section className="bg-gray-50 w-full py-20 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              O que você vai encontrar no material
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo organizado de forma simples para você não perder tempo e focar nos resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Receitas para Emagrecer", desc: "Opções deliciosas e de baixa caloria que ajudam a secar sem passar fome.", icon: <Flame className="w-6 h-6" style={{ color: "#009933" }} /> },
              { title: "Ganho de Massa", desc: "Refeições ricas em proteínas para construir músculos com consistência.", icon: <TrendingUp className="w-6 h-6" style={{ color: "#009933" }} /> },
              { title: "Todas as Refeições", desc: "Café da manhã, almoço, janta e snacks inteligentes para o dia todo.", icon: <Activity className="w-6 h-6" style={{ color: "#009933" }} /> },
              { title: "Rotina Corrida", desc: "Receitas rápidas de 15 a 30 minutos para quem não tem tempo a perder.", icon: <Clock className="w-6 h-6" style={{ color: "#009933" }} /> },
              { title: "Ingredientes Acessíveis", desc: "Nada de ingredientes difíceis de encontrar. Use o que você já tem em casa.", icon: <ShoppingCart className="w-6 h-6" style={{ color: "#009933" }} /> },
              { title: "Macros Calculados", desc: "Saiba exatamente quanto de proteína, carbo e gordura tem em cada prato.", icon: <Calculator className="w-6 h-6" style={{ color: "#009933" }} /> },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(0,216,74,0.12)" }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. RECIPE SHOWCASE SECTION */}
      <section className="w-full py-20 px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Pratos que dão água na boca
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esqueça a comida sem graça. Veja algumas das opções que você vai preparar facilmente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Bowl Proteico de Aveia", kcal: "320", p: "25g", c: "35g", g: "8g", img: "/recipe-bowl.jpg" },
              { name: "Frango com Batata Doce", kcal: "410", p: "40g", c: "45g", g: "6g", img: "/recipe-frango.jpg" },
              { name: "Smoothie Pós-Treino", kcal: "250", p: "30g", c: "20g", g: "5g", img: "/recipe-smoothie.jpg" },
              { name: "Salmão com Aspargos", kcal: "380", p: "32g", c: "15g", g: "20g", img: "/recipe-salmao.jpg" },
            ].map((recipe, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ transition: "transform 150ms ease-in-out, box-shadow 150ms ease-in-out, background-color 150ms ease-in-out" }}
                onMouseDown={e => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(0.97)";
                  el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.1)";
                  el.style.backgroundColor = "#efefef";
                  setTimeout(() => {
                    el.style.transform = "";
                    el.style.boxShadow = "";
                    el.style.backgroundColor = "";
                  }, 300);
                }}
                onTouchStart={e => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(0.97)";
                  el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.1)";
                  el.style.backgroundColor = "#efefef";
                  setTimeout(() => {
                    el.style.transform = "";
                    el.style.boxShadow = "";
                    el.style.backgroundColor = "";
                  }, 300);
                }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={recipe.img}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{recipe.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#00D84A" }}></div>
                    <p className="text-xs font-medium text-gray-500">
                      <span style={{ color: "#FF6B35", fontWeight: "bold" }}>{recipe.kcal} kcal</span>
                      {" | "}
                      <span style={{ color: "#00D84A", fontWeight: "bold" }}>P: {recipe.p}</span>
                      {" | "}
                      <span style={{ color: "#2196F3", fontWeight: "bold" }}>C: {recipe.c}</span>
                      {" | "}
                      <span style={{ color: "#FFC107", fontWeight: "bold" }}>G: {recipe.g}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. TESTIMONIALS SECTION */}
      <section className="bg-gray-50 w-full py-20 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6 text-yellow-400">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-16 text-center max-w-3xl mx-auto">
            Mais de 4.000 pessoas já transformaram seus resultados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "As receitas são perfeitas pra minha rotina corrida. Consegui perder 4kg no primeiro mês só organizando a alimentação com o e-book!", name: "Mariana S.", image: "/testimonial-mariana.png" },
              { quote: "Sempre achei dieta chata, mas as opções de lanches e jantares me surpreenderam. O frango não fica mais seco rs.", name: "Pedro H.", image: "/testimonial-pedro.jpeg" },
              { quote: "Comprei a versão premium pelo cronograma e valeu cada centavo. Facilitou muito minhas compras da semana.", name: "Juliana C.", image: "/testimonial-juliana.png" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
                <div className="absolute -top-4 right-8 text-6xl opacity-50 font-serif" style={{ color: "rgba(0,216,74,0.25)" }}>"</div>
                <p className="text-gray-600 italic mb-8 relative z-10 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: "rgba(0,216,74,0.15)" }} />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. PRICING SECTION */}
      <section id="planos" className="bg-[#111827] w-full py-24 px-8 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full blur-[120px] opacity-10" style={{ backgroundColor: "#00D84A" }}></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Escolha o melhor plano para você
            </h2>
            <p className="text-xl text-gray-400">
              Pagamento único. Acesso vitalício. Risco zero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* LEFT — Oferta Básica */}
            <div className="bg-[#1f2937] rounded-3xl p-8 md:p-10 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Oferta Básica</h3>
              <p className="text-gray-400 mb-6">O essencial para começar</p>
              <div className="mb-8">
                <span className="text-gray-500 line-through text-lg block mb-1">De R$47,00 por apenas</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-5xl font-black">10</span>
                  <span className="text-gray-400 text-sm">/único</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "+100 Receitas Fitness",
                  "Divididas por tipo de refeição",
                  "Cronograma alimentar básico",
                  "Acesso vitalício",
                  "Atualizações gratuitas",
                  "Entrega imediata por e-mail"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#00D84A" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-transparent border-2 border-gray-600 hover:border-white text-white py-6 rounded-xl font-bold text-lg transition-colors" onClick={() => window.open("https://www.ggcheckout.com/checkout/v2/hyogZgGRlQ45uO1Yv9wP", "_blank")}>QUERO COMPRAR</Button>
            </div>

            {/* RIGHT — Oferta Premium */}
            <div className="bg-[#1f2937] rounded-3xl p-8 md:p-10 border-2 shadow-2xl relative transform md:-translate-y-4" style={{ borderColor: "#00D84A", boxShadow: "0 25px 50px rgba(0,61,23,0.2)" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-950 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
                Mais Escolhido
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#00D84A" }}>Oferta Premium</h3>
              <p className="text-gray-400 mb-6">O pacote completo para acelerar resultados</p>
              <div className="mb-8">
                <span className="text-gray-500 line-through text-lg block mb-1">De R$97,00 por apenas</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-6xl font-black">17</span>
                  <span className="text-gray-400 text-sm">/único</span>
                </div>
                <span className="text-sm font-semibold mt-2 inline-block animate-pulse" style={{ color: "#00D84A" }}>⏰ Por tempo limitado</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "+100 Receitas Fitness",
                  "Divididas por tipo de refeição",
                  "Acesso vitalício & Atualizações",
                  "Entrega imediata por e-mail",
                  <span key="1" className="font-bold text-white">Cronograma alimentar completo</span>,
                  <span key="2" className="font-bold text-white">Plano de organização semanal</span>,
                  <span key="3" className="font-bold text-white">Lista de substituições inteligente</span>
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#00D84A" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full text-white py-6 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#00D84A", boxShadow: "0 10px 30px rgba(0,216,74,0.25)" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#00BF42")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#00D84A")}
                onClick={() => window.open("https://www.ggcheckout.com/checkout/v2/JS1r1RHA5UQt2B4tK7Rn", "_blank")}
              >QUERO COMPRAR</Button>
            </div>
          </div>
        </div>
      </section>
      {/* 7. GUARANTEE SECTION */}
      <section className="bg-gray-100 w-full py-20 px-8 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 relative" style={{ backgroundColor: "rgba(0,216,74,0.12)" }}>
            <ShieldCheck className="w-12 h-12" style={{ color: "#009933" }} />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
              <CheckCircle2 className="w-6 h-6" style={{ color: "#00D84A" }} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Acreditamos tanto no conteúdo que, se você acessar o material e achar que não é para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem questionamentos.
          </p>
        </div>
      </section>
      {/* 8. FAQ SECTION */}
      <section className="w-full py-20 px-8 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas principais dúvidas sobre o +100 Receitas Fitness.
            </p>
          </div>
          
          <div className="space-y-1">
            <FAQItem 
              question="Como funciona o acesso ao ebook?" 
              answer="Após a aprovação do pagamento, você receberá um link de acesso no seu e-mail cadastrado imediatamente."
            />
            <FAQItem 
              question="Qual o formato do material?" 
              answer="O material é 100% digital em formato PDF, otimizado para leitura em celulares, tablets e computadores. Você também pode imprimir se preferir."
            />
            <FAQItem 
              question="Para quem é indicado?" 
              answer="Para qualquer pessoa que deseja melhorar a alimentação, emagrecer ou ganhar massa magra, mesmo que não tenha muito tempo para cozinhar ou não saiba fazer pratos complexos."
            />
            <FAQItem 
              question="Existe alguma garantia?" 
              answer="Sim! Você tem 7 dias de garantia incondicional. Se não gostar do material, devolvemos seu dinheiro."
            />
            <FAQItem 
              question="Quais são as formas de pagamento?" 
              answer="Aceitamos PIX e cartão de crédito em até 2x."
            />
            <FAQItem 
              question="Quais resultados posso esperar?" 
              answer="Aliando as receitas à uma rotina saudável e exercícios, você poderá notar redução de inchaço, perda de peso e mais energia nas primeiras semanas."
            />
          </div>
        </div>
      </section>
      {/* 9. CTA SECTION */}
      <section className="w-full py-20 px-8 md:px-12 text-center relative overflow-hidden" style={{ backgroundColor: "#009933" }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Pare de sofrer com dietas restritivas e sem sabor.
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#e6fff0" }}>
            Garanta agora mesmo suas +100 Receitas e comece a ver os resultados no espelho.
          </p>
          <Button
            className="bg-white text-xl font-bold py-7 px-10 rounded-full shadow-2xl transition-transform hover:scale-105"
            style={{ color: "#006620" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e6fff0")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
            onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Garantir meu acesso agora
          </Button>
        </div>
      </section>
      {/* 10. FOOTER */}
      <footer className="bg-black w-full py-8 px-8 md:px-12 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 +100 Receitas Fitness. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

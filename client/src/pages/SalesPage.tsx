import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SALES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/sales-page-Gt82rTNgHpppSn2Jt6PyJG.webp";

export default function SalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-12 px-6 md:px-12">
        <div className="w-full lg:w-1/2 h-96 lg:h-screen overflow-hidden">
          <img
            src={SALES_IMAGE}
            alt="Transformacao"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-6 md:px-12 py-12 lg:py-0 flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            O seu valor esta trancado em um cofre. E voce perdeu a senha.
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Descubra o padrao silencioso que esta matando a sua receptividade e entenda como voce realmente e lida pelos homens.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg border border-border mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Voce jura que esta se fortalecendo, mas esta apenas assinando a sua propria invisibilidade. O excesso de defesa destroi a atracao. O ajuste nao e perder a forca, e abaixar as armas. Ressignifique o seu magnetismo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="btn-primary text-lg">
              <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer">
                Quero Ajustar Minha Presenca
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-12 bg-secondary/20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Os Sinais do Padrao
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Frieza letal disfarcada de mecanismo de defesa",
              "A compulsao exaustiva por provar que nao precisa de ninguem",
              "Um campo de energia que bloqueia em vez de atrair",
              "Distanciamento cronico: voce esta la, mas ninguem te acessa",
            ].map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-foreground/80">{signal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            O Que Muda Quando o Padrao e Ajustado
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Receptividade Magnetica: Atrair sem fazer forca",
              "Firmeza sem Rigidez: O poder que nao precisa gritar para ser ouvido",
              "A Arte do Contraste: Abaixar a guarda sem perder a coroa",
              "Conexao Absoluta: Deixar de ser intocavel para se tornar inesquecivel",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-foreground/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Offers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-12 bg-secondary/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Suas Opcoes de Transformacao
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ebook Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-lg border-2 border-primary relative overflow-hidden"
            >
              {/* Premium Seal */}
              <div className="absolute top-4 right-4 bg-primary text-foreground px-3 py-1 rounded-full text-xs font-bold">
                ✓ PREMIUM CERTIFICADO
              </div>
              
              {/* Guarantee Badge */}
              <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 rounded-full text-xs font-bold">
                GARANTIA 7 DIAS
              </div>

              {/* Book Cover Image */}
              <div className="mb-8 rounded-lg overflow-hidden border border-primary/30 shadow-lg">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/manual-atracao-cover-SMYa6eZdz2epGs2k6sWkmv.webp" 
                  alt="Manual da Atracao Cover" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="w-12 h-1 bg-primary rounded-full mb-6 mt-6" />
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Manual da Atracao
              </h3>
              <p className="text-sm text-primary font-semibold mb-4">Ebook Completo + Acesso Vitalicio</p>
              
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Correcao inicial, entendimento profundo e reorganizacao do seu padrao. Um guia pratico e reflexivo para remover a rigidez e recuperar sua leveza.
              </p>

              {/* Pricing Section - HIGHLIGHTED */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-lg mb-8 border-2 border-primary shadow-lg">
                <p className="text-sm text-foreground/60 mb-2 font-semibold">PRECO ORIGINAL:</p>
                <p className="text-2xl font-bold text-foreground/40 line-through mb-6">R$ 197,00</p>
                
                <div className="flex items-baseline gap-3 mb-6 bg-foreground/5 p-4 rounded-lg">
                  <p className="text-5xl font-bold text-primary">R$ 49,90</p>
                  <span className="bg-primary text-foreground px-4 py-2 rounded-full text-lg font-bold animate-pulse">-74%</span>
                </div>
                
                <div className="bg-primary/20 p-3 rounded-lg">
                  <p className="text-base text-primary font-bold">💰 Voce economiza: R$ 147,10</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Diagnostico detalhado do seu padrao",
                  "Exercicios praticos de reorganizacao",
                  "Tecnicas de leveza e receptividade",
                  "Acesso vitalicio",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Objection Breaker - AMPLIFIED */}
              <div className="bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 p-6 rounded-lg mb-8 border-2 border-primary shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💅</span>
                  <div>
                    <p className="text-base text-foreground/90 leading-relaxed">
                      <strong className="text-primary text-lg">Menos que uma manicure.</strong>
                    </p>
                    <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                      Por R$ 49,90, voce tem acesso vitalicio ao Manual da Atracao. Enquanto uma manicure dura 2 semanas, esse conhecimento transforma sua vida para sempre.
                    </p>
                    <p className="text-xs text-primary font-semibold mt-3">✓ Investimento que dura a vida toda</p>
                  </div>
                </div>
              </div>

              <Button asChild className="btn-primary w-full text-lg font-bold py-6">
                <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer">
                  Acessar o Manual da Atracao
                </a>
              </Button>
            </motion.div>

            {/* Mentorship Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-lg border-2 border-primary relative"
            >
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Em Breve
              </div>

              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Mentoria Premium
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Correcao profunda, aceleracao e acompanhamento personalizado. Transformacao guiada com suporte direto e estrategias customizadas para sua situacao.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Sessoes 1:1 personalizadas",
                  "Acompanhamento de 90 dias",
                  "Estrategias customizadas",
                  "Suporte direto e continu",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                disabled
                className="btn-primary w-full opacity-50 cursor-not-allowed py-6"
              >
                Em Breve
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Comece Sua Transformacao Agora
          </h2>
          <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
            Nao e sobre perder forca. E sobre remover rigidez. Leveza nao e fraqueza. Receptividade nao e perda de poder. Quando a protecao deixa de ser identidade, o magnetismo volta.
          </p>

          <Button asChild className="btn-primary text-lg">
            <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer">
              Quero Ajustar Minha Presenca
            </a>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SALES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/sales-page-Gt82rTNgHpppSn2Jt6PyJG.webp";

export default function SalesPage() {
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
            Voce pode ter valor — mas esta transmitindo isso?
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Descubra quais padroes estao reduzindo sua leveza, sua receptividade e a forma como voce e percebida.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg border border-border mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Muita mulher acredita que esta se fortalecendo. Mas as vezes esta apenas se protegendo demais. Essa protecao excessiva diminui magnetismo e conexao. O ajuste nao e perder forca, e sim remover rigidez.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary text-lg">
                Quero Ajustar Minha Presenca
              </Button>
            </a>
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
              "Rigidez excessiva que reduz sua leveza",
              "Dificuldade em relaxar e receber",
              "Frieza como mecanismo de protecao",
              "Necessidade constante de provar seu valor",
              "Magnetismo bloqueado pela defesa",
              "Receptividade reduzida",
              "Conexao limitada com os outros",
              "Presenca percebida como distante",
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
              "Leveza natural e autenticidade",
              "Receptividade sem perder poder",
              "Firmeza sem rigidez",
              "Magnetismo genuino",
              "Conexoes mais profundas",
              "Presenca mais acessivel",
              "Confianca em sua comunicacao",
              "Valor percebido aumenta",
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
              className="bg-card p-8 md:p-12 rounded-lg border-2 border-border hover:border-primary transition-all"
            >
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ebook: Presenca Feminina
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Correcao inicial, entendimento profundo e reorganizacao do seu padrao. Um guia pratico e reflexivo para remover a rigidez e recuperar sua leveza.
              </p>

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

              <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="btn-primary w-full">
                  Quero Ajustar Minha Presenca
                </Button>
              </a>
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
                className="btn-primary w-full opacity-50 cursor-not-allowed"
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

          <a href="https://pay.kiwify.com.br/Jb7MI2C" target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary text-lg">
              Quero Ajustar Minha Presenca
            </Button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}

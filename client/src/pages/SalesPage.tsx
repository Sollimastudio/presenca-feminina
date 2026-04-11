import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracker";

const KIWIFY = "https://pay.kiwify.com.br/Jb7MI2C";
const SALES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/sales-page-Gt82rTNgHpppSn2Jt6PyJG.webp";

const sinais = [
  "Você faz tudo certo — e as coisas ainda não ficam",
  "Você chama de independência o que na verdade é solidão organizada",
  "Você atrai, mas não retém",
  "Você testa as pessoas sem perceber que está testando",
  "Você quer conexão mas age para provar que não precisa",
];

const oQueVaiMudar = [
  "Você para de afastar quem chega",
  "Você aprende a diferença entre proteção e prisão",
  "Sua presença começa a comunicar o que você realmente vale",
  "Você deixa de sabotar o que está indo bem",
  "Você para de esperar que a outra pessoa prove que vai ficar",
];

export default function SalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    track('sales_viewed');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO — soco no estômago */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-72 lg:h-screen overflow-hidden">
          <img src={SALES_IMAGE} alt="Sol Lima" className="w-full h-full object-cover" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-8 md:px-16 py-16 flex flex-col justify-center"
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
            Diagnóstico concluído — Sol Lima
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Você não tem problema em atrair.<br />
            <span className="text-primary">Você tem problema em não afastar.</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Esse padrão tem nome. Tem raiz. E tem solução. Não é sobre se tornar mais atraente — é sobre parar de sabotar o que já existe.
          </p>

          <div className="bg-secondary/40 border border-border rounded-lg p-6 mb-8">
            <p className="text-base text-foreground/80 leading-relaxed">
              <strong className="text-foreground">O Protocolo da Atração</strong> não é um manual de sedução. É um mapa de desarmamento. 7 dias para identificar o padrão que está te tornando intocável — e começar a removê-lo.
            </p>
          </div>

          <Button asChild className="btn-primary text-base font-bold py-5 w-full md:w-auto">
            <a href={KIWIFY} target="_blank" rel="noopener noreferrer">
              Quero o Protocolo — R$ 49,90
            </a>
          </Button>
          <p className="text-xs text-foreground/40 mt-3">Garantia de 7 dias. Acesso vitalício.</p>
        </motion.div>
      </section>

      {/* SINAIS — você se reconhece? */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-8 md:px-16 bg-secondary/20"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Os sinais</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Se algum desses te descreveu, o diagnóstico acertou.
          </h2>

          <div className="space-y-5">
            {sinais.map((sinal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 bg-background rounded-lg border border-border"
              >
                <span className="text-primary font-bold text-lg mt-0.5">—</span>
                <p className="text-base text-foreground/80">{sinal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* O QUE MUDA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-8 md:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">7 dias depois</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            O que muda quando você para de se sabotar.
          </h2>

          <div className="space-y-4">
            {oQueVaiMudar.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                <p className="text-base text-foreground/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OFERTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-8 md:px-16 bg-secondary/20"
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">O protocolo</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protocolo da Atração
          </h2>
          <p className="text-foreground/60 line-through text-lg mb-1">R$ 197,00</p>
          <p className="text-5xl font-bold text-primary mb-2">R$ 49,90</p>
          <p className="text-sm text-foreground/50 mb-8">Garantia de 7 dias • Acesso vitalício</p>

          <div className="bg-background border border-primary/30 rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-foreground/70 leading-relaxed">
              Por menos que uma refeição fora, você tem acesso ao mapa completo do seu padrão de sabotagem — e ao protocolo para desmontá-lo em 7 dias.
            </p>
          </div>

          <Button asChild className="btn-primary text-base font-bold py-5 w-full">
            <a href={KIWIFY} target="_blank" rel="noopener noreferrer">
              Acessar o Protocolo da Atração
            </a>
          </Button>
        </div>
      </motion.section>

      {/* CLOSING */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-8 md:px-16"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
            "Você não precisa se tornar fraca.<br />
            Você precisa aprender a diferença<br />
            entre proteção e prisão."
          </p>
          <p className="text-foreground/50 text-sm mb-10">— Sol Lima</p>

          <Button asChild className="btn-primary text-base font-bold py-5 px-10">
            <a href={KIWIFY} target="_blank" rel="noopener noreferrer">
              Quero sair da prisão — R$ 49,90
            </a>
          </Button>
        </div>
      </motion.section>

    </div>
  );
}

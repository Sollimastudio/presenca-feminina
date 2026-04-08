import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const RESULTADO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/resultado-diagnóstico-8ZJmPE6dGZAuuAE2khRCZb.webp";

interface DiagnosisResult {
  id: string;
  name: string;
  description: string;
  mainSignals: string[];
  impact: string;
  guidance: string;
  color: string;
}

interface DiagnosisLadder {
  level: number;
  name: string;
  description: string;
}

interface QuizResultProps {
  diagnosis: DiagnosisResult;
  score: number;
  onRestart: () => void;
  diagnosisLadder: DiagnosisLadder[];
}

export default function QuizResult({
  diagnosis,
  score,
  onRestart,
  diagnosisLadder,
}: QuizResultProps) {
  const [, navigate] = useLocation();

  const handleGoToOffer = () => {
    navigate("/oferta");
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Seu Resultado
          </h1>
          <p className="text-xl text-foreground/60">
            Pontuacao: {score} de 30
          </p>
        </motion.div>

        {/* Main Diagnosis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div className="h-96 lg:h-full rounded-lg overflow-hidden">
            <img
              src={RESULTADO_IMAGE}
              alt={diagnosis.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div
              className="w-16 h-1 mb-6 rounded-full"
              style={{ backgroundColor: diagnosis.color }}
            />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {diagnosis.name}
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              {diagnosis.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Seus Principais Sinais:
              </h3>
              <ul className="space-y-3">
                {diagnosis.mainSignals.map((signal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: diagnosis.color }}
                    />
                    <span className="text-foreground/80">{signal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Impact and Guidance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-secondary/50 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Como Voce e Percebida
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {diagnosis.impact}
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Seu Proximo Passo
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {diagnosis.guidance}
            </p>
          </div>
        </motion.div>

        {/* Diagnosis Ladder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            A Escada de Evolucao
          </h3>
          <div className="space-y-3">
            {diagnosisLadder.map((level, index) => {
              const isCurrentLevel = diagnosis.name === level.name;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    isCurrentLevel
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/30 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/60">Nivel {level.level}</p>
                      <p className="text-lg font-semibold text-foreground">
                        {level.name}
                      </p>
                      <p className="text-sm text-foreground/70">
                        {level.description}
                      </p>
                    </div>
                    {isCurrentLevel && (
                      <span className="text-primary font-bold text-sm">
                        VOCE ESTA AQUI
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Transition Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-secondary/50 p-8 md:p-12 rounded-lg border border-border mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            O Que Vem Agora
          </h3>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Seu resultado nao mostra falta de valor. Mostra o modo como esse valor esta sendo comunicado. Quando a protecao vira identidade, o magnetismo diminui. A boa noticia e que isso pode ser ajustado. Veja agora como corrigir os sinais que estao reduzindo sua leveza, sua receptividade e a forma como voce e percebida.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <Button
            onClick={handleGoToOffer}
            className="btn-primary text-lg"
          >
            Acessar a Rota de Fuga
          </Button>
          <Button
            onClick={onRestart}
            variant="outline"
            className="text-lg"
          >
            Refazer Diagnostico
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

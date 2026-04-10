import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, calculateDiagnosis, diagnosisResults, diagnosisLadder } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import QuizResult from "@/components/QuizResult";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032420666/7UJh3d9596UnSnriY2LXYF/hero-quiz-6cbhb9WsucGBWuRXQZbFtx.webp";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleStartQuiz = () => {
    setShowIntro(false);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowIntro(true);
  };

  const diagnosisId = calculateDiagnosis(score);
  const diagnosis = diagnosisResults[diagnosisId];

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col lg:flex-row items-center justify-center"
          >
            <div className="w-full lg:w-1/2 h-96 lg:h-screen overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Presenca Feminina"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 px-6 md:px-12 py-12 lg:py-0 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  O seu magnetismo virou repulsao?
                </h1>
                <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                  O diagnostico visceral que revela os padroes invisiveis que estao sabotando o seu valor e te deixando intocavel.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-secondary/50 p-8 rounded-lg mb-8 border border-border"
              >
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  <strong>Antes de comecar, responda com brutalidade.</strong> Este teste nao acaricia o seu ego. Ele expoe o seu padrao quando as mascaras caem. Ninguem vai ver. Mas voce nao podera mais ignorar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  onClick={handleStartQuiz}
                  className="btn-primary text-lg w-full md:w-auto"
                >
                  Iniciar Raio-X
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {!showIntro && !showResult && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12"
          >
            <div className="max-w-2xl mx-auto w-full">
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-foreground/60">
                    Pergunta {currentQuestion + 1} de {quizQuestions.length}
                  </span>
                  <span className="text-sm text-primary font-semibold">
                    {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                  {quizQuestions[currentQuestion].question}
                </h2>

                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full p-6 text-left border-2 border-border rounded-lg hover:border-primary hover:bg-secondary/30 transition-all duration-300 group"
                    >
                      <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {option.text}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {showResult && (
          <QuizResult
            diagnosis={diagnosis}
            score={score}
            onRestart={handleRestartQuiz}
            diagnosisLadder={diagnosisLadder}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

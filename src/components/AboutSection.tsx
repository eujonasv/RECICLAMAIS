
import React from 'react';
import { Leaf, Users, Recycle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import RecycleLogo from './RecycleLogo';

const AboutSection = () => {
  const features = [
    {
      id: 1,
      icon: <Leaf className="h-8 w-8 text-recicla-primary dark:text-recicla-secondary" />,
      title: "Sustentabilidade",
      description: "Promovemos práticas sustentáveis para reduzir o impacto ambiental e preservar recursos naturais."
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8 text-recicla-primary dark:text-recicla-secondary" />,
      title: "Conexão",
      description: "Facilitamos o encontro entre quem deseja reciclar e quem coleta materiais recicláveis."
    },
    {
      id: 3,
      icon: <Recycle className="h-8 w-8 text-recicla-primary dark:text-recicla-secondary" />,
      title: "Inovação",
      description: "Utilizamos tecnologia para tornar a reciclagem mais acessível e eficiente para todos."
    },
    {
      id: 4,
      icon: <TrendingUp className="h-8 w-8 text-recicla-primary dark:text-recicla-secondary" />,
      title: "Impacto",
      description: "Geramos renda para coletores e parceiros enquanto criamos um impacto ambiental positivo."
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <RecycleLogo size="md" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Sobre a <span className="text-recicla-primary dark:text-recicla-secondary">RECICLA+</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Somos uma startup que revoluciona a forma como as pessoas e empresas lidam com recicláveis, 
            conectando-as a pontos de coleta e promovendo um ciclo virtuoso de sustentabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="card-hover border-0 bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              O que <span className="text-recicla-primary dark:text-recicla-secondary">fazemos</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Nossa plataforma oferece soluções completas para tornar a reciclagem mais fácil e acessível para todos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-recicla-primary/10 dark:bg-recicla-primary/20 mr-4">
                    <Recycle className="h-6 w-6 text-recicla-primary dark:text-recicla-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                      Coleta Inteligente
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Conectamos pessoas e empresas a pontos de coleta próximos, 
                      otimizando o processo de descarte de recicláveis.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-recicla-primary/10 dark:bg-recicla-primary/20 mr-4">
                    <Users className="h-6 w-6 text-recicla-primary dark:text-recicla-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                      Rede de Parceiros
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trabalhamos com uma ampla rede de coletores, cooperativas e empresas recicladoras para garantir o destino correto dos materiais.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-recicla-primary/10 dark:bg-recicla-primary/20 mr-4">
                    <TrendingUp className="h-6 w-6 text-recicla-primary dark:text-recicla-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                      Impacto Ambiental e Social
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Geramos renda para coletores e promovemos a economia circular, reduzindo o impacto no meio ambiente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-recicla-primary/20 filter blur-md"></div>
                <img 
                  src="https://plus.unsplash.com/premium_vector-1682306481700-d924b6112bcf?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Reciclagem" 
                  className="rounded-xl shadow-xl max-w-full object-cover mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

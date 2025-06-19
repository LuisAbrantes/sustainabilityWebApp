export const defaultValues = {
    language: 'pt-BR',
    setLanguage: () => {},
    translations: {
        'pt-BR': {
            navItems: {
                home: 'Início',
                pillars: 'Pilares',
                diagnosis: 'Diagnóstico',
                cop30: 'COP30'
            },
            sections: {
                hero: {
                    title: 'Atividade de Biologia',
                    subtitle:
                        'Uma análise interativa da sustentabilidade, políticas ambientais e o papel do Brasil na agenda climática global rumo à COP30.',
                    authors: 'Feito por Luis Abrantes e Cauã Almeida'
                },
                pillars: {
                    title: 'Os Pilares da Ação Ambiental',
                    subtitle:
                        'Esta seção explora os conceitos fundamentais que estruturam o debate sobre sustentabilidade. Compreender estes pilares é essencial para analisar as políticas públicas e o nosso papel como cidadãos. Interaja com as abas para explorar cada conceito.',
                    tabs: {
                        environmentalEducation: 'Educação Ambiental',
                        sustainability: 'Sustentabilidade',
                        fiveRs: 'Os 5 "R"s'
                    },
                    content: {
                        environmentalEducation: {
                            title: 'A Estrutura Legal da Educação',
                            text: 'A Política Nacional de Educação Ambiental (Lei nº 9.795/1999) é o marco que define a educação ambiental como um processo de construção de valores para a conservação do meio ambiente. Ela deve ocorrer tanto nas escolas (formal) quanto na sociedade (não-formal). Em 2024, uma atualização crucial (Lei nº 14.926) incluiu explicitamente o "enfrentamento da emergência climática e a proteção da biodiversidade" como objetivos, reconhecendo a urgência da crise atual e conectando legalmente educação e clima.'
                        },
                        sustainability: {
                            title: 'O Equilíbrio Interdependente',
                            pillars: {
                                environmental: {
                                    title: 'Ambiental',
                                    text: 'Preservação do capital natural, gestão de recursos, proteção de ecossistemas e combate ao aquecimento global.'
                                },
                                social: {
                                    title: 'Social',
                                    text: 'Foco no bem-estar humano, equidade, justiça social, direitos humanos, saúde e educação para as comunidades.'
                                },
                                economic: {
                                    title: 'Econômico',
                                    text: 'Viabilidade de longo prazo das atividades produtivas com governança responsável, sem minar os outros pilares.'
                                }
                            }
                        },
                        fiveRs: {
                            title: 'Uma Hierarquia para a Ação',
                            rs: [
                                'Repensar',
                                'Recusar',
                                'Reduzir',
                                'Reutilizar',
                                'Reciclar'
                            ],
                            caption:
                                'A prioridade é a prevenção. As ações mais eficazes são as do topo da lista.'
                        }
                    }
                },
                diagnosis: {
                    title: 'O Diagnóstico do Brasil',
                    subtitle:
                        'Esta seção mergulha no desempenho do Brasil em relação aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030. Analisamos o profundo abismo entre o discurso oficial e a realidade documentada pela sociedade civil, revelando os desafios mais urgentes que o país enfrenta.',
                    chart: {
                        title: 'Status das Metas dos ODS (2022)',
                        subtitle:
                            'Visualização baseada nos dados do VII Relatório Luz, que analisa as 169 metas da Agenda 2030. Passe o mouse sobre o gráfico para ver os detalhes.'
                    },
                    table: {
                        title: 'Análise Crítica: Duas Visões de um País',
                        subtitle:
                            'A tabela abaixo contrasta a avaliação crítica do Relatório Luz (sociedade civil) com a narrativa do Relatório Nacional Voluntário (governo) para ODS chave. Use os botões para alternar as visões.',
                        views: {
                            luz: 'Visão: Relatório Luz',
                            rnv: 'Visão: Relatório Nacional'
                        },
                        columns: {
                            ods: 'ODS',
                            status: 'Status / Narrativa'
                        },
                        data: [
                            {
                                ods: 'ODS 1',
                                title: 'Erradicação da Pobreza',
                                relatorioLuz: {
                                    status: 'Retrocesso',
                                    analysis:
                                        'Aumento da fome e da pobreza extrema, fragilização de programas de assistência social e estagnação no acesso a serviços básicos.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Foco na retomada de políticas sociais e celebração do empenho da CNODS para recolocar o Brasil no caminho certo.'
                                }
                            },
                            {
                                ods: 'ODS 13',
                                title: 'Ação Climática',
                                relatorioLuz: {
                                    status: 'Retrocesso',
                                    analysis:
                                        'Desmonte da governança climática, recordes de desmatamento e aumento de mortes por desastres climáticos.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Reafirmação do compromisso com a Agenda 2030, posicionando o Brasil como liderança climática para a COP30.'
                                }
                            },
                            {
                                ods: 'ODS 15',
                                title: 'Vida Terrestre',
                                relatorioLuz: {
                                    status: 'Retrocesso',
                                    analysis:
                                        'Níveis recordes de desmatamento e queimadas, aumento de conflitos por terra e ataques a terras indígenas.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Destaque na retomada do acompanhamento pelo Governo e na importância da proteção ambiental para o desenvolvimento.'
                                }
                            },
                            {
                                ods: 'ODS 16',
                                title: 'Paz e Justiça',
                                relatorioLuz: {
                                    status: 'Retrocesso',
                                    analysis:
                                        'Aumento da violência, fragilização do Estado de Direito e restrições à participação da sociedade civil.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Menção ao fortalecimento da governança e da colaboração institucional como passos importantes.'
                                }
                            }
                        ]
                    }
                },
                cop30: {
                    title: 'O Palco Global: COP30 em Belém',
                    subtitle:
                        'Em novembro de 2025, o Brasil sediará a mais importante conferência climática do mundo. A escolha de Belém, no coração da Amazônia, coloca a floresta, seus povos e a justiça climática no centro do debate. Clique nos cards para explorar as pautas que definirão o futuro do nosso planeta.',
                    cards: [
                        {
                            title: 'Novas Metas (NDCs)',
                            content:
                                'A COP30 é o prazo para os países apresentarem metas de redução de emissões (NDCs) muito mais ambiciosas. O sucesso da conferência depende da ambição coletiva desses novos compromissos, avaliados à luz do primeiro Balanço Global, que mostrou que o mundo está fora da rota para cumprir o Acordo de Paris.'
                        },
                        {
                            title: 'Financiamento Climático',
                            content:
                                'Talvez o ponto mais contencioso. Países em desenvolvimento exigem que os países ricos cumpram a promessa de mobilizar U$100 bilhões por ano e estabeleçam uma nova meta, muito maior, para o pós-2025. A demanda é por transparência e garantia de que os recursos cheguem às comunidades mais vulneráveis.'
                        },
                        {
                            title: 'Justiça Climática',
                            content:
                                'Forte pressão para que a COP30 adote uma agenda de justiça climática, incorporando recortes de raça, gênero e juventude nas políticas. Para o Brasil, a demarcação de terras indígenas e a proteção de defensores do ambiente são pautas centrais e estratégicas.'
                        },
                        {
                            title: 'A Contradição Fóssil',
                            content:
                                'Críticos apontam a contradição do Brasil em sediar a COP enquanto expande a exploração de petróleo e gás. A ausência de um plano claro para eliminar combustíveis fósseis é vista como uma vulnerabilidade que pode minar a credibilidade do país como anfitrião.'
                        }
                    ]
                }
            }
        },
        'en-US': {
            navItems: {
                home: 'Home',
                pillars: 'Pillars',
                diagnosis: 'Diagnosis',
                cop30: 'COP30'
            },
            sections: {
                hero: {
                    title: 'Biology Activity',
                    subtitle:
                        "An interactive analysis of sustainability, environmental policies, and Brazil's role on the global climate agenda towards COP30.",
                    authors: 'Made by Luis Abrantes and Cauã Almeida'
                },
                pillars: {
                    title: 'The Pillars of Environmental Action',
                    subtitle:
                        'This section explores the fundamental concepts that structure the sustainability debate. Understanding these pillars is essential to analyze public policies and our role as citizens. Interact with the tabs to explore each concept.',
                    tabs: {
                        environmentalEducation: 'Environmental Education',
                        sustainability: 'Sustainability',
                        fiveRs: "The 5 R's"
                    },
                    content: {
                        environmentalEducation: {
                            title: 'The Legal Framework of Education',
                            text: 'The National Environmental Education Policy (Law No. 9,795/1999) is the framework that defines environmental education as a process of building values for the conservation of the environment. It must occur both in schools (formal) and in society (non-formal). In 2024, a crucial update (Law No. 14,926) explicitly included "addressing the climate emergency and protecting biodiversity" as objectives, recognizing the urgency of the current crisis and legally connecting education and climate.'
                        },
                        sustainability: {
                            title: 'The Interdependent Balance',
                            pillars: {
                                environmental: {
                                    title: 'Environmental',
                                    text: 'Preservation of natural capital, resource management, ecosystem protection, and combating global warming.'
                                },
                                social: {
                                    title: 'Social',
                                    text: 'Focus on human well-being, equity, social justice, human rights, health, and education for communities.'
                                },
                                economic: {
                                    title: 'Economic',
                                    text: 'Long-term viability of productive activities with responsible governance, without undermining the other pillars.'
                                }
                            }
                        },
                        fiveRs: {
                            title: 'A Hierarchy for Action',
                            rs: [
                                'Rethink',
                                'Refuse',
                                'Reduce',
                                'Reuse',
                                'Recycle'
                            ],
                            caption:
                                'Prevention is the priority. The most effective actions are at the top of the list.'
                        }
                    }
                },
                diagnosis: {
                    title: 'The Diagnosis of Brazil',
                    subtitle:
                        "This section delves into Brazil's performance regarding the Sustainable Development Goals (SDGs) of the 2030 Agenda. We analyze the deep gap between the official discourse and the reality documented by civil society, revealing the most urgent challenges the country faces.",
                    chart: {
                        title: 'Status of SDG Targets (2022)',
                        subtitle:
                            'Visualization based on data from the VII Light Report, which analyzes the 169 targets of the 2030 Agenda. Hover over the chart for details.'
                    },
                    table: {
                        title: 'Critical Analysis: Two Views of a Country',
                        subtitle:
                            'The table below contrasts the critical assessment of the Light Report (civil society) with the narrative of the Voluntary National Review (government) for key SDGs. Use the buttons to switch views.',
                        views: {
                            luz: 'View: Light Report',
                            rnv: 'View: National Report'
                        },
                        columns: {
                            ods: 'SDG',
                            status: 'Status / Narrative'
                        },
                        data: [
                            {
                                ods: 'SDG 1',
                                title: 'No Poverty',
                                relatorioLuz: {
                                    status: 'Setback',
                                    analysis:
                                        'Increase in hunger and extreme poverty, weakening of social assistance programs, and stagnation in access to basic services.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Focus on resuming social policies and celebrating the commitment of the CNODS to put Brazil back on the right track.'
                                }
                            },
                            {
                                ods: 'SDG 13',
                                title: 'Climate Action',
                                relatorioLuz: {
                                    status: 'Setback',
                                    analysis:
                                        'Dismantling of climate governance, record deforestation, and increase in deaths from climate disasters.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Reaffirmation of the commitment to the 2030 Agenda, positioning Brazil as a climate leader for COP30.'
                                }
                            },
                            {
                                ods: 'SDG 15',
                                title: 'Life on Land',
                                relatorioLuz: {
                                    status: 'Setback',
                                    analysis:
                                        'Record levels of deforestation and fires, increase in land conflicts, and attacks on indigenous lands.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Emphasis on the resumption of monitoring by the Government and the importance of environmental protection for development.'
                                }
                            },
                            {
                                ods: 'SDG 16',
                                title: 'Peace and Justice',
                                relatorioLuz: {
                                    status: 'Setback',
                                    analysis:
                                        'Increase in violence, weakening of the Rule of Law, and restrictions on civil society participation.'
                                },
                                rnv2024: {
                                    narrative:
                                        'Mention of strengthening governance and institutional collaboration as important steps.'
                                }
                            }
                        ]
                    }
                },
                cop30: {
                    title: 'The Global Stage: COP30 in Belém',
                    subtitle:
                        "In November 2025, Brazil will host the world's most important climate conference. The choice of Belém, in the heart of the Amazon, places the forest, its peoples, and climate justice at the center of the debate. Click on the cards to explore the issues that will define the future of our planet.",
                    cards: [
                        {
                            title: 'New Targets (NDCs)',
                            content:
                                'COP30 is the deadline for countries to submit much more ambitious emission reduction targets (NDCs). The success of the conference depends on the collective ambition of these new commitments, assessed in light of the first Global Stocktake, which showed that the world is off track to meet the Paris Agreement.'
                        },
                        {
                            title: 'Climate Finance',
                            content:
                                'Perhaps the most contentious point. Developing countries demand that rich countries fulfill their promise to mobilize $100 billion a year and set a new, much larger target for post-2025. The demand is for transparency and ensuring that resources reach the most vulnerable communities.'
                        },
                        {
                            title: 'Climate Justice',
                            content:
                                'Strong pressure for COP30 to adopt a climate justice agenda, incorporating race, gender, and youth perspectives into policies. For Brazil, the demarcation of indigenous lands and the protection of environmental defenders are central and strategic issues.'
                        },
                        {
                            title: 'The Fossil Fuel Contradiction',
                            content:
                                "Critics point to the contradiction of Brazil hosting the COP while expanding oil and gas exploration. The absence of a clear plan to phase out fossil fuels is seen as a vulnerability that could undermine the country's credibility as a host."
                        }
                    ]
                }
            }
        }
    }
};

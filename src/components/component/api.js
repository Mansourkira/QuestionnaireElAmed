let api = [
  {
    section: "A. GÉNÉRALITÉS ET IDENTIFICATION",
    questions: [
      {
        Question: "Quel est votre genre?",
        Options: ["Masculin", "Féminin"],
      },
      {
        Question: "Etes-vous venu le:",
        Options: ["Matin", "Le soir", "La nuit", "Le weekend", "Jour ouvrable"],
      },
      {
        Question: "Dans quelle tranche d’âge appartenez-vous?",
        Options: ["15-24", "25-39", "40-54", "55-69", "70+"],
      },
      {
        Question: "Vous consultez les urgences :",
        Options: ["Pour la 1ére fois", "Pour la (…) fois"],
      },
      {
        Question: "Votre ré-consultation a été dans :",
        Options: [
          "Moins de 7 jours",
          "Entre 7 jours et 1 mois",
          "Entre 1 et 6 mois",
          "Plus que 6 mois",
        ],
      },
      {
        Question: "Vous êtes orienté vers le service d’urgences par :",
        Options: [
          "A la demande de votre médecin traitant",
          "A votre propre initiative",
          "Par un autre professionnel de santé",
          "Par un service mobile d’urgence",
        ],
      },
      {
        Question: "Vous avez été transporté par :",
        Options: [
          "Les pompiers",
          "Ambulance (SAMU)",
          "Vos propres moyens",
          "Un taxi",
          "Un ami ou un parent",
          "A pied",
        ],
      },
      {
        Question:
          "Dans le cas de déplacement personnel, les enseignes d'orientation sont-ils bons ?",
        Options: ["Oui", "Non"],
      },
    ],
  },
  {
    section: "Prés Triage : LORS DE L’ACCUEIL ET DE L'INSCRIPTION",
    questions: [
      {
        Question: "A votre arrivée, vous avez été reçu par :",
        Options: [
          "Un agent administratif",
          "Un agent de sécurité",
          "Un infirmier(e)",
          "Un médecin",
          "Indéterminé",
        ],
      },
      {
        Question:
          "Précisez le temps écoulé entre l’arrivée aux urgences et l’inscription :",
        Options: [
          "Immédiat",
          "Moins de 5 minutes",
          "5 à 15 minutes",
          "Plus que 15 minutes",
        ],
      },
      {
        Question:
          "A l'inscription, étiez-vous informé des délais d’attente pour votre prise en charge?",
        Options: ["Oui", "Non"],
      },
      {
        Question: "Si oui, par qui?",
        Options: [
          "Un agent administratif",
          "Un agent de sécurité",
          "Un infirmier(e)",
          "Un médecin",
          "Indéterminé",
        ],
      },
      {
        Question:
          "Comment jugez-vous : très satisfaisant - satisfaisant - moyen - peu satisfaisant - très insatisfaisant",
        Subquestions: [
          {
            Question: "Le délai d’accueil",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La qualité de l’accueil : Courtoisie",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La qualité de l’accueil : Serviabilité",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La qualité de l’accueil : Sécurité",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La qualité de l’accueil : Confidentialité",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La salle d’attente : Décoration",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La salle d’attente : TV",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question: "La salle d’attente : Collation",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
          {
            Question:
              "La possibilité d’occupation durant l’attente (revues, documents d’information, affichages, …)?",
            Options: [
              "Très satisfaisant",
              "Satisfaisant",
              "Moyen",
              "Peu satisfaisant",
              "Très insatisfaisant",
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Triage : LORS DU 1er CONTACT MEDICAL",
    questions: [
      {
        Question: "Quel est votre motif de consultation?",
        Options: [
          "Traumatisme",
          "Douleur thoracique",
          "Agression",
          "Intoxication",
          "Perte de conscience",
          "Autre",
        ],
      },
      {
        Question:
          "Précisez le temps écoulé entre l’inscription et le premier contact médical:",
        Options: [
          "Immédiat",
          "Après 5 min",
          "Entre 5 et 15 min",
          "Plus que 15 min",
          "Autre",
        ],
      },
      {
        Question: "Comment jugez-vous ce délai d’attente?",
        Options: ["Très long", "Long", "Court", "Très court"],
      },
      {
        Question: "Le respect de votre intimité et de votre confidentialité :",
        Options: ["Garanti", "Non garanti"],
      },
      {
        Question:
          "Avez-vous trouvé que l'environnement était bruyant pendant votre séjour?",
        Options: [
          "Oui, très bruyant",
          "Oui, un peu bruyant",
          "Non, pas particulièrement bruyant",
        ],
      },
      {
        Question:
          "Avez-vous trouvé les espaces (salle d'attente, couloirs, chambres, ..) encombrés pendant votre visite?",
        Options: [
          "Oui, très encombrés",
          "Oui, un peu encombrés",
          "Non, les espaces étaient bien organisés",
        ],
      },
      {
        Question: "Avez-vous eu des informations sur votre état de santé?",
        Options: [
          "Claire et concise",
          "Le juste nécessaire",
          "Flou et mal expliqué",
          "Aucune information",
        ],
      },
      {
        Question: "Avez-vous des douleurs à l’arrivée aux urgences?",
        Options: ["Oui", "Non"],
      },
      {
        Question:
          "Sur une échelle de 0 à 10, comment évaluez-vous votre niveau de douleur (où 0 représente aucune douleur et 10 représente la pire douleur imaginable):",
        Options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      {
        Question: "Un antalgique est-il administré?",
        Options: ["Oui", "Non"],
      },
      {
        Question: "Si oui, le soulagement de votre douleur est jugé comme :",
        Options: ["Excellent", "Bien", "Moyen", "Mauvais"],
      },
    ],
  },
];

export default api;

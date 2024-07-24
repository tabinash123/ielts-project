export const readingData = [
  {
    part: 1,
    passage: [
      "The advent of artificial intelligence (AI) has revolutionized various industries, from healthcare to finance. AI technologies are now capable of performing tasks that were once the sole domain of humans, such as diagnosing diseases and trading stocks. While the benefits of AI are immense, including increased efficiency and reduced human error, there are also significant ethical concerns. Issues such as data privacy, job displacement, and the potential for biased decision-making must be carefully managed as AI continues to evolve."
    ],
    questions: [
      {
        type: 'trueFalse',
        instruction: 'Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.',
        title: "Artificial Intelligence Impact",
        questions: [
          {
            questionNo: 1,
            text: 'AI technologies can diagnose diseases.',
            answer: 'TRUE'
          },
          {
            questionNo: 2,
            text: 'AI has no impact on job displacement.',
            answer: 'FALSE'
          },
          {
            questionNo: 3,
            text: 'There are no ethical concerns with AI.',
            answer: 'NOT GIVEN'
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write ONE WORD ONLY from the text for each answer.',
        title: "Artificial Intelligence Impact",
        questions: [
          {
            questionNo: 4,
            text: "AI technologies have revolutionized various {BLANK:4}.",
            answer: "industries"
          },
          {
            questionNo: 5,
            text: "AI can perform tasks such as diagnosing {BLANK:5}.",
            answer: "diseases"
          },
          {
            questionNo: 6,
            text: "AI raises important {BLANK:6} concerns.",
            answer: "ethical"
          }
        ]
      },
      {
        type: 'fillInParagraph',
        instruction: 'Complete the summary. Write ONE WORD ONLY from the text for each answer.',
        title: "Artificial Intelligence Impact",
        paragraph: `The advent of artificial intelligence (AI) has revolutionized various {BLANK:7}, from healthcare to finance. AI technologies are now capable of performing tasks that were once the sole domain of humans, such as diagnosing {BLANK:8} and trading stocks. While the benefits of AI are immense, including increased efficiency and reduced human error, there are also significant {BLANK:9} concerns. Issues such as data privacy, job displacement, and the potential for biased decision-making must be carefully managed as AI continues to {BLANK:10}.`,
        questions: [
          {
            questionNo: 7,
            answer: "industries"
          },
          {
            questionNo: 8,
            answer: "diseases"
          },
          {
            questionNo: 9,
            answer: "ethical"
          },
          {
            questionNo: 10,
            answer: "evolve"
          }
        ]
      }
    ]
  },
  {
    part: 2,
    passage: [
      "Climate change is one of the most pressing issues of our time. It refers to long-term changes in temperature, precipitation, wind patterns, and other aspects of Earth's climate system. Human activities, particularly the burning of fossil fuels, deforestation, and industrial processes, have significantly contributed to the increase in greenhouse gases, leading to global warming. The consequences of climate change include rising sea levels, more frequent and severe weather events, and disruptions to ecosystems and biodiversity."
    ],
    questions: [
      {
        type: 'trueFalse',
        instruction: 'Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.',
        title: "Climate Change Effects",
        questions: [
          {
            questionNo: 11,
            text: 'Climate change refers to short-term weather changes.',
            answer: 'FALSE'
          },
          {
            questionNo: 12,
            text: 'Human activities have contributed to the increase in greenhouse gases.',
            answer: 'TRUE'
          },
          {
            questionNo: 13,
            text: 'Rising sea levels are one consequence of climate change.',
            answer: 'TRUE'
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write ONE WORD ONLY from the text for each answer.',
        title: "Climate Change Effects",
        questions: [
          {
            questionNo: 14,
            text: "Climate change refers to long-term changes in {BLANK:14}.",
            answer: "temperature"
          },
          {
            questionNo: 15,
            text: "Human activities, such as burning fossil fuels, have increased {BLANK:15} gases.",
            answer: "greenhouse"
          },
          {
            questionNo: 16,
            text: "The consequences {BLANK:16} of climate change include rising  levels.",
            answer: "sea"
          }
        ]
      },
      {
        type: 'fillInParagraph',
        instruction: 'Complete the summary. Write ONE WORD ONLY from the text for each answer.',
        title: "Climate Change Effects",
        paragraph: `Climate {BLANK:17} change is one of the most pressing issues of our time. It refers to long-term changes in , precipitation, wind patterns, and other aspects of Earth's climate system. Human activities, particularly the burning of {BLANK:18} fuels, deforestation, and industrial processes, have significantly contributed to the increase in {BLANK:19} gases, leading to global warming. The consequences of climate change include rising sea levels, more frequent and severe {BLANK:20} events, and disruptions to ecosystems and {BLANK:21}.`,
        questions: [
          {
            questionNo: 17,
            answer: "temperature"
          },
          {
            questionNo: 18,
            answer: "fossil"
          },
          {
            questionNo: 19,
            answer: "greenhouse"
          },
          {
            questionNo: 20,
            answer: "weather"
          },
          {
            questionNo: 21,
            answer: "biodiversity"
          }
        ]
      }
    ]
  },
  

];

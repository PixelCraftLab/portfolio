export const myProjects = [
  {
    id: 7,
    title: "Custom RAG – AI Document Assistant (Production-Deployed Internship Project)",
    description:
      "A production-ready Retrieval-Augmented Generation (RAG) application developed during my internship and deployed for real-world business use cases. The system enables users to upload PDF documents and ask context-aware questions, combining semantic search with Large Language Models for grounded and accurate document-based responses. Continuously refined and optimized based on production requirements while fulfilling the CEO's objective of building a zero-cost AI solution without relying on paid subscription-based services.",

    subDescription: [
      "Built a full-stack production-ready RAG application using React, FastAPI, LangChain, ChromaDB, and Groq Llama 3.3 70B, enabling users to upload PDFs and interact with their documents through natural language conversations. Successfully deployed and continuously enhanced based on real-world production feedback and evolving business requirements.",
      "Implemented a complete document ingestion pipeline that loads PDFs, performs intelligent text chunking using RecursiveCharacterTextSplitter, generates embeddings with BAAI/bge-small-en-v1.5, and stores vectors persistently in ChromaDB for efficient semantic retrieval, ensuring scalable and reliable production performance.",
      "Designed a grounded AI workflow that retrieves the top-k most relevant document chunks using vector similarity search before passing them to the LLM, ensuring responses are generated strictly from the uploaded document without hallucinations while optimizing retrieval quality for real-world document querying.",
      "Developed a scalable and modular backend architecture following the Single Responsibility Principle (SRP), with separate modules for document loading, chunking, embeddings, retrieval, prompt engineering, vector database management, and API endpoints for maintainability, future scalability, and easier production maintenance.",
      "Engineered secure document management features including document upload, deletion, persistent vector storage, metadata tracking, and RESTful APIs, while building an intuitive React frontend for seamless document interaction and real-time AI-powered question answering.",
      "Successfully accomplished the CEO's requirement of delivering a production-grade AI Document Assistant at zero software licensing cost by leveraging open-source technologies and free-tier AI services, eliminating the need for paid LLM or vector database subscriptions while maintaining production-quality performance."
    ],
    href: "https://github.com/PixelCraftLab/custom-RAG",
    logo: "",
    image: "/assets/projects/CustomRAG.png",
    tags: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "FastAPI",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "LangChain",
      },
      {
        id: 5,
        name: "ChromaDB",
      },
      {
        id: 6,
        name: "RAG Pipeline",
      },
      {
        id: 7,
        name: "LLM",
      },
      {
        id: 8,
        name: "Groq API",
      },
      {
        id: 9,
        name: "Hugging Face",
      },
      {
        id: 10,
        name: "Vector Database",
      }
    ],
  },
  {
    id: 6,
    title: "House Price Prediction",
    description:
      "An end-to-end Machine Learning application designed to predict house prices accurately using property features, featuring a complete ML pipeline and an interactive Streamlit interface for real-time price estimation.",
    subDescription: [
      "Developed an end-to-end Machine Learning application to accurately predict house prices using multiple property features, enabling real-time property value estimation.",
      "Built a complete ML pipeline including data preprocessing, exploratory data analysis (EDA), feature engineering, model training, evaluation, and deployment using Linear Regression.",
      "Designed and deployed an interactive Streamlit web application that allows users to input property details and receive instant house price predictions through an intuitive interface.",
      "Optimized model performance through feature selection, data cleaning, and hyperparameter tuning to improve prediction accuracy and reliability.",
      "Followed industry-standard development practices, including modular code architecture, model serialization, version control, and reproducible workflows for seamless deployment and maintenance."
    ],
    href: "https://house-price-prediction-8lvyc5hyb2dorgh3kymcx2.streamlit.app/",
    logo: "",
    image: "/assets/projects/HousePricePrediction.png",
    tags: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "Machine Learning",
      },
      {
        id: 3,
        name: "Streamlit",
      },
      {
        id: 4,
        name: "Pandas, NumPy",
      },
      {
        id: 5,
        name: "Data Analysis",
      },
      {
        id: 6,
        name: "end-to-end pipeline",
      },
      {
        id: 7,
        name: "ML algos",
      }
    ],
  },
  {
    id: 5,
    title: "Smart Store",
    description:
      "An AI-powered smart retail application designed to enhance online shopping through intelligent recommendations, automation, and seamless user experience.",
    subDescription: [
      "Developed Smart Store, an AI-driven e-commerce platform focused on personalized product recommendations and efficient user interaction.",
      "Designed and implemented end-to-end system architecture, including frontend, backend, and API integrations for seamless functionality.",
      "Integrated intelligent workflows to automate product suggestions, improving user engagement and decision-making.",
      "Built scalable and responsive interfaces using modern web technologies, ensuring smooth performance across devices.",
      "Focused on optimizing user experience by combining real-time data handling with intuitive UI/UX design."
    ],
    href: "https://shop-store-tidw.vercel.app/",
    logo: "",
    image: "/assets/projects/smartstore.png",
    tags: [
      {
        id: 1,
        name: "AI chatbot soon",
      },
      {
        id: 2,
        name: "TailwindCSS",
      },
      {
        id: 3,
        name: "React parent child components",
      },
      {
        id: 4,
        name: "Full stack soon",
      },
      {
        id: 4,
        name: "Work in progress",
      }
    ],
  },
  {
    id: 1,
    title: "LoginAuth",
    description:
      " A lightweight authentication system implementing client-side login and session management using localStorage.",

    subDescription: [
      "Built a secure login and registration flow with form validation and error handling.",
      "Implemented session persistence using localStorage to maintain user authentication state.",
      "Developed protected routes and conditional rendering based on login status.",
      "Designed a responsive and clean UI for seamless user interaction.",
    ],
    href: "https://login-auth-two-alpha.vercel.app/",
    logo: "",
    image: "/assets/projects/LoginAuthimg.png",
    tags: [
      {
        id: 1,
        name: "LocalStorage",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "DOM Manipulation",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "Regex Validation",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

  {
    id: 2,
    title: "TODO's App",
    description:
      "A modern, animated to-do app featuring a beautifully decorated UI/UX that makes task management smooth, engaging, and enjoyable.",
    subDescription: [
      "Built a fully interactive Todo application allowing users to create, edit, delete, and manage daily tasks efficiently.",
      "Implemented CRUD functionality with a structured backend for reliable task management.",
      "Designed responsive UI components with Tailwind CSS for a clean and intuitive user experience.",
      "Integrated database storage to persist tasks and ensure secure data handling.",
    ],
    href: "https://todo-s-app-nine.vercel.app/",
    logo: "",
    image: "/assets/projects/TodoAppimg.png",
    tags: [
      {
        id: 1,
        name: "DOM Manipulation",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "An interactive Tic-Tac-Toe game built with efficient game logic and responsive design.",

    subDescription: [
      "Implemented core game logic to handle player turns, win detection, and draw conditions.",
      "Designed a clean and responsive user interface for smooth gameplay experience.",
      "Added real-time game state updates with restart and reset functionality.",
      "Optimized logic for fast performance and seamless user interaction.",
    ],
    href: "https://tic-tac-toe-xox-5epd.vercel.app/",
    logo: "",
    image: "/assets/projects/TicTacToeimg.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "DOM Manipulation",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 4,
    title: "WeatherSync",
    description:
      "A real-time weather synchronization app that provides accurate forecasts and location-based weather updates.",

    subDescription: [
      "Integrated a weather API to fetch real-time temperature, humidity, and forecast data.",
      "Implemented location-based search with dynamic weather updates.",
      "Designed a responsive and clean UI for seamless user experience across devices.",
      "Optimized performance with efficient data fetching and state management.",
    ],
    href: "https://weather-sync-kappa.vercel.app/",
    logo: "",
    image: "/assets/projects/WeatherSyncimg.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "Async/Await",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Promises",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "REST API",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 5,
    title: "MediConnect",
    description:
      "A healthcare-focused application built for Microsoft Imagine Cup that advanced to the SharkPool investment round, showcasing real-world impact and strong business potential.",
    subDescription: [
      "Led end-to-end development of MediConnect, a healthcare app built for Microsoft Imagine Cup that advanced to the SharkPool investment round.",
      "Served as Technical and Product Lead in a two-member team, independently handling architecture, core development, workflow design, and system planning over 3 months.",
      "Identified key gaps in the medical industry and translated them into actionable, market-ready solutions with strong ownership and analytical thinking.",
      "Built and validated the MVP demonstrating real-world impact and business potential.",
    ],
    href: "https://my-imagine-cup.vercel.app/",
    logo: "",
    image: "/assets/projects/MediConnectimg.png",
    tags: [
      {
        id: 1,
        name: "A startup initiative reflecting practical problem-solving skills and the ability to turn real-world challenges into scalable solutions.",

      },
      {
        id: 2,
        name: "#Microsoft",

      },
      {
        id: 3,
        name: "#Prompt Engineering Skills",
      }

    ],
  },


];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vishal-kumar-gowda-686729379/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishal_k_gowda_sk/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "LeetCode",
    href: "",
    icon: "",
  },
];


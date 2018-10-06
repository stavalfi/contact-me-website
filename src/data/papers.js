const papers = [
    {
        title: "Functional Programming In JS: Compositions And Transducers",
        summary: "Throughout this tutorial, we will cover a series of basic technics for manipulating a collection of functions. We will build a utility that processes a single element using composition of functions. Then we will process a collection using multiple implementations such that each of them can do more than the last.",
        tags: [
            "Javascript",
            "Functional Programming",
            "ES6"
        ],
        isBook: false,
        githubLink: "https://github.com/stavalfi/lectures/blob/master/Functional%20Programming%20In%20JS%20-%20Compositions%20And%20Transducers.md",
    },
    {
        title: "Functional Programming in Java 8 - Java Streams In Depth",
        summary: "In this book, we will cover the stream library from the basic operations and learn each relevant classes. The tutorial designates to developers with absolutely no experience with streams to more experienced developers who want to clarify their knowledge. Throughout this series, we will introduce new phrases and explain more deeply each Java stream method.",
        tags: [
            "Java 8",
            "Java Streams",
            "Functional Programming",
            "Multi Threading"
        ],
        isBook: true,
        githubLink: "https://github.com/stavalfi/lectures/tree/master/Java%20Streams%20-%20Series",
    },
    {
        title: "Functional Programming in Java 8 - Basic Concepts and Lambdas",
        summary: "This article is meant to build a common language with the reader which will be used to answer the following questions: What are free variables? Are we allowed to change them inside the lambda expression? Is it considered dangerous to mutate them?" +
        "At the end we will discuss about the differences between Lambdas and method reference.",
        tags: [
            "Java 8",
            "Lambda Expression",
            "Functional Programming",
        ],
        isBook: false,
        githubLink: "https://github.com/stavalfi/lectures/blob/master/Functional%20Programming%20in%20Java%208%20-%20Basic%20Concepts%20and%20Lambdas.md",
    },
    {
        title: "Introduction to Git",
        summary: "The tutorial is intended for programmers that want to dive deep and understand what is going on behind the scene. After reading and practicing you should be able to manipulate and understand more advanced articles online about other topics that are not mentioned here. You will learn familiar concepts and fully understand their definitions.",
        tags: [
            "Git"
        ],
        isBook: false,
        githubLink: "https://github.com/stavalfi/lectures/blob/master/Introduction%20To%20Git.md",
    },
    {
        title: "Git Cherry Picking",
        summary: "The goal of this tutorial is for explaining what cherry-pick command is, how does it work and how to handle errors (conflicts).\n" +
        "\n" +
        "This tutorial does not focus on real-life examples which involve cherry-picking because those examples may be objective. However, I do say that git cherry-pick is a prerequirement to understand git rebase which will be covered in the future tutorial.",
        tags: [
            "Git",
            "Git-Cherry-Pick"
        ],
        isBook: false,
        githubLink: "https://github.com/stavalfi/lectures/blob/master/Git%20Cherry%20Picking.md",
    },
    {
        title: "Introduction To Docker",
        summary: "Docker is a software for managing CI/CD for our application. It means, we no longer need to manually install our products after each build in the development/production environment. Docker does that by letting us install multiple tiny operation systems (e.g., Ubuntu) on our virtual/physical machine, and each tiny operation system will contain a single web application.",
        tags: [
            "Docker"
        ],
        isBook: false,
        githubLink: "https://github.com/stavalfi/lectures/blob/master/Introduction%20To%20Docker.md",
    }
];
export {papers};
const { prisma } = require("../src/generated/prisma-client");

async function run() {
  const ada = await prisma.createUser({
    name: "Ada",
    email: "ada@prisma.io",
    posts: {
      create: [
        {
          title: "Introducing the Analytical Engine",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        },
        {
          title: "Building General-Purpose Computers",
          published: true,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        },
        {
          title: "Why Algorithms are Awesome",
          published: true,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        }
      ]
    }
  });

  const grace = await prisma.createUser({
    name: "Grace",
    email: "grace@prisma.io",
    posts: {
      create: [
        {
          title: "Five Things You Didn't Know About Compilers",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        },
        {
          title: "Progamming with English Words",
          published: true,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        }
      ]
    }
  });

  const lynn = await prisma.createUser({
    name: "Lynn",
    email: "lynn@prisma.io",
    posts: {
      create: [
        {
          title: "Working at Xerox PARC",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        },
        {
          title: "Introduction to VLSI Systems",
          published: true,
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea."
        }
      ]
    }
  });
}

run().catch(e => console.error(e));

# Get Your GraphQL Server Sandbox

This project uses a hosted database that has writes disabled. Follow these steps to set up your own demo database that lets you perform database writes:

### 1. Fork the CodeSandbox

To get your own version of this sandbox, click the **Fork** button in the top-left corner:

![](https://imgur.com/aTCEfuD.png)

### 2. Open new Terminal tab

Once the forking succeeded and you have your own version of the sandbox available, you can open a new terminal tab by clicking the little **+** button:

![](https://imgur.com/iWwZ1yD.png)

### 3. Deploy datamodel & re-generate Prisma client

The next step connects the Prisma client with a fresh demo database that will be set up for you. In the terminal, run: 

```
yarn prisma deploy
```

Then, follow these steps in the interactive CLI wizard:

1. Select **Demo server**
1. **Open the URL** that's printed by the CLI in your browser 
1. **Authenticate** with Prisma Cloud in your browser
1. Back in the CodeSandbox terminal, **confirm all suggested values**

After `prisma deploy` has terminated, the Prisma client in `src/generated/prisma-client` is re-generated. This means the GraphQL server is now connected to your own demo database.

### 4. Explore the Prisma client API

Run the following command to start exploring:

```
yarn start
```

### 5. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./src/schema.graphql`](./src/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new user

```graphql
mutation {
  signupUser(
    name: "Sarah"
    email: "sarah@prisma.io"
  ) {
    id
  }
}
```

#### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
  ) {
    id
    published
  }
}
```

#### Publish an existing draft

```graphql
mutation {
  publish(id: "__POST_ID__") {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

#### Search for posts with a specific title or content

```graphql
{
  filterPosts(searchString: "graphql") {
    id
    title
    content
    published 
    author {
      id
      name
      email
    }
  }
}
```

#### Retrieve a single post

```graphql
{
  post(id: "__POST_ID__") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

#### Delete a post

```graphql
mutation {
  deletePost(id: "__POST_ID__") {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

</Details>
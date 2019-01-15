export const defaultPlaygroundQuery = `\
query {
  feed {
    id
    title
    published
    author {
      id
      name
      email
    }
  }
}`
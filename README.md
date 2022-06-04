## Relay 13 with NextJS
This repo is a try to replicate the relay examples of data driven dependencies with nextjs.

First, it is being implemented with lazy load query + use fragment.

After make this work the next steps is go to SSR and implement the preloaded queries.

## problems
This repo it was created also to link a with a issue on relay github because the generated files cannot be found.
- [x] Module not found: Can't resolve 'relay-13-nextjs/./__generated__/pagesIndexQuery.graphql.js'
- [x] https://github.com/facebook/relay/issues/3879
- [ ] fix build docker image with relay compiler https://github.com/facebook/relay/issues/3939

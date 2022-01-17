import { makeVar, InMemoryCache } from '@apollo/client';

export const authVar = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          auth: {
            read() {
              return authVar();
            }
          }
        }
      }
    }
  });
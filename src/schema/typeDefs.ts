import {ApolloServer, gql} from 'apollo-server-koa';

export const TypeDefs = gql`
    type Query {
        info: Info,
        student: Student,
        infos: [Info!]
    }

    type Info {
        _id: ID!,
        height: String!,
        weight: String!,
        hobby: [String!],
        meta: Meta
    }

    type Meta {
        createdAt: String!,
        updatedAt: String!
    }

    type Student {
        _id: ID!,
        name: String,
        sex: String,
        age: Int,
        info: Info
    }
`;
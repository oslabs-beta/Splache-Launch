import {ResolverCache} from './ResolverCache'
const cache = new ResolverCache()
import { graphql, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull } from  'graphql';


const Person = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        height: {
            type: GraphQLString
        },
        mass: {
            type: GraphQLString
        },
        hair_color: {
            type: GraphQLString
        },
        skin_color: {
            type: GraphQLString
        },
        eye_color: {
            type: GraphQLString
        },
        birth_year:{
            type: GraphQLString
        },
        gender:{
            type: GraphQLString
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        person: {
            type: Person, 
            args: {
                id: {
                    description: 'id of the person',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve:  ((parent, args, context, info) => cache.checkCache(parent, args, context, info, getPerson))
        }
    })
});

//functions getPerson and getPlanet that fetches from SWAPI 
async function getPerson(args:{id:number}) {
    const {id} = args;
    console.log(id);
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    return data;
}



export const schema = new GraphQLSchema({
    query: RootQuery
})

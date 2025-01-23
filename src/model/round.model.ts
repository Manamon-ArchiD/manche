import { Round } from "../types/round.type";


let db;

export const setDb = (database: any) => {
    db = database;
}

export const createRound = async (matchId: string) => {
    return Error('Not implemented');
}

export const updateRound = async (matchId: string, roundId: string, round: Round) => {
    return Error('Not implemented');
}

export const getRound = async (matchId: string, roundId: string) => {
    return Error('Not implemented');
}

export const getRounds = async (matchId: string) => {
    return Error('Not implemented');
}

import { Request, Response, NextFunction } from 'express';
import * as roundModel from '../model/round.model';

// POST /match/{matchId}/round : Créer une nouvelle manche dans un match.
// PUT /match/{matchId}/round/{roundId} : Mettre à jour le résultat ou l’état d’une manche.
// GET /match/{matchId}/round/{roundId} : Consulter les détails d’une manche
// GET /match/{matchId}/round : Consulter la liste des manches d’un match.

export const createRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const round = await roundModel.createRound(matchId);
        res.status(201).json(round);
    } catch (error) {
        next(error);
    }
};

export const updateRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const roundId = req.params.roundId;
        const round = await roundModel.updateRound(matchId, roundId, req.body);
        res.status(200).json(round);
    } catch (error) {
        next(error);
    }
};

export const getRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const roundId = req.params.roundId;
        const round = await roundModel.getRound(matchId, roundId);
        res.status(200).json(round);
    } catch (error) {
        next(error);
    }
};

export const getRounds = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const rounds = await roundModel.getRounds(matchId);
        res.status(200).json(rounds);
    } catch (error) {
        next(error);
    }
};

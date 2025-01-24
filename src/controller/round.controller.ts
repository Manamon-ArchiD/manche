import { Request, Response, NextFunction } from 'express';


// POST /match/{matchId}/round : Créer une nouvelle manche dans un match.
// PUT /match/{matchId}/round/{roundId} : Mettre à jour le résultat ou l’état d’une manche.
// GET /match/{matchId}/round/{roundId} : Consulter les détails d’une manche
// GET /match/{matchId}/round : Consulter la liste des manches d’un match.

const Round = require('../model/round.model');
export const createRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const round = new Round.Round({
            number: req.body.number,
            status: req.body.status,
            scoreA: 0,
            scoreB: 0,
            winnerId: null,
        });
        const newRound = await round.save();
    } catch (error) {
        next(error);
    }
};

export const updateRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const roundId = req.params.roundId;
    } catch (error) {
        next(error);
    }
};

export const getRound = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
        const roundId = req.params.roundId;
    } catch (error) {
        next(error);
    }
};

export const getRounds = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const matchId = req.params.matchId;
    } catch (error) {
        next(error);
    }
};

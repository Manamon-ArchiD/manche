import { Request, Response, NextFunction, RequestHandler } from 'express';
import Round from '../model/round.model';

export const createRound: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const matchId = req.body.matchId;
        const roundCount = await Round.countDocuments({ matchId });
        console.log(matchId, roundCount);
        
        const round = new Round({
            number: roundCount + 1,
            status: "pending",
            scoreA: 0,
            scoreB: 0,
            winnerId: null,
            matchId: matchId
        });

        const newRound = await round.save();
        if (!newRound) {
            res.status(500).json({ message: 'Round creation failed' });
            return;
        }
        res.status(201).json(newRound);
        return;
    } catch (error) {
        next(error);
    }
};

export const updateRound: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { matchId, roundNumber } = req.params;
        const updatedRound = await Round.findOneAndUpdate(
            { matchId, number: roundNumber },
            {
                ...req.body,
                updatedAt: new Date()
            },
            { new: true }
        );
        if (!updatedRound) {
            res.status(404).json({ message: 'Round update failed' });
            return;
        }
        res.status(200).json(updatedRound);
        return;
    } catch (error) {
        next(error);
    }
};

export const getRound : RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { matchId, roundNumber } = req.params;
        const round = await Round.findOne({ matchId, number: roundNumber });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return;
        }
        res.status(200).json(round);
        return;
    } catch (error) {
        next(error);
    }
};

export const getRounds : RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { matchId } = req.params;
        const rounds = await Round.find({ matchId });
       if (!rounds) {
            res.status(404).json({ message: 'Rounds not found' });
            return;
        }
        res.status(200).json(rounds);
        return;
    } catch (error) {
        next(error);
    }
};
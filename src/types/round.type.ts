export interface Round {
    id: string;
    number: number;
    status: status;
    scoreA: number;
    scoreB: number;
    winnerId: string;
    matchId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type status = 'running' | 'finished' | 'pending' | 'cancelled';


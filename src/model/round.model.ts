import mongoose, { Document, Schema } from 'mongoose';
import { Round } from '../types/round.type';

const RoundSchema: Schema = new Schema(
  {
    number: { type: Number, required: true },
    status: { type: String, enum: ['running', 'finished', 'pending', 'cancelled'], required: true },
    scoreA: { type: Number, required: true },
    scoreB: { type: Number, required: true },
    winnerId: { type: String, required: false },
    matchId: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Round>('Round', RoundSchema);
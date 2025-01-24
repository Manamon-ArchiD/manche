import { Router } from 'express';
import { createRound, getRound, getRounds, updateRound } from '../controller/round.controller';

const router = Router();

// POST /match/{matchId}/round : Créer une nouvelle manche dans un match.
// PUT /match/{matchId}/round/{roundId} : Mettre à jour le résultat ou l’état d’une manche.
// GET /match/{matchId}/round/{roundId} : Consulter les détails d’une manche
// GET /match/{matchId}/round : Consulter la liste des manches d’un match.

/**
 * @swagger
 * tags:
 *   name: Round
 *   description: Gestion des manches de match
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Round:
 *       type: object
 *       properties:
 *         id:
 *          type: string
 *          description: ID de la manche.
 *          example: "123456"
 * 
 *         number:
 *          type: number
 *          description: Numéro de la manche.
 *          example: 1
 * 
 *         status:
 *           type: string
 *           enum:
 *             - running
 *             - finished
 *             - pending
 *             - cancelled
 *           description: Statut de la manche.
 *           example: "running"
 * 
 *         scoreA:
 *           type: number
 *           description: Score de l'équipe A.
 *           example: 5
 * 
 *         scoreB:
 *           type: number
 *           description: Score de l'équipe B.
 *           example: 3
 *         winnerId:
 *          type: string
 *          description: ID de l'équipe gagnante.
 *          example: "teamA123"
 * 
 * 

 */

// Route: Créer une nouvelle manche dans un match
router.post('/:matchId/round', createRound);

/**
 * @swagger
 * /match/{matchId}/round:
 *   post:
 *     summary: Créer une nouvelle manche dans un match
 *     tags: [Round]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         description: ID du match
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Manche créée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Round'
 *       400:
 *         description: Requête invalide.
 *       500:
 *         description: Erreur interne du serveur.
 */



// Route: Mettre à jour une manche
router.put('/:matchId/round/:roundNumber', updateRound);

/**
 * @swagger
 * /match/{matchId}/round/{roundNumber}:
 *   put:
 *     summary: Mettre à jour une manche
 *     tags: [Round]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         description: ID du match
 *         schema:
 *           type: string
 *       - in: path
 *         name: roundNumber
 *         required: true
 *         description: Numéro de la manche
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Round'
 *           example:
 *             status: "finished"
 *             scoreA: 7
 *             scoreB: 5
 *             winnerId: "teamA123"
 *     responses:
 *       200:
 *         description: Manche mise à jour avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Round'
 *       400:
 *         description: Requête invalide.
 *       404:
 *         description: Match ou manche introuvable.
 *       500:
 *         description: Erreur interne du serveur.
 */


// Route: Consulter les détails d'une manche
router.get('/:matchId/round/:roundId', getRound);

/**
 * @swagger
 * /round/{roundId}:
 *   get:
 *     summary: Consulter les détails d'une manche
 *     tags: [Round]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         description: ID du match
 *         schema:
 *           type: string
 *       - in: path
 *         name: roundId
 *         required: true
 *         description: ID de la manche
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Détails de la manche récupérés avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Round'
 *       404:
 *         description: Match ou manche introuvable.
 *       500:
 *         description: Erreur interne du serveur.
 */

export default router;

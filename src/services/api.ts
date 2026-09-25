import {matches,demoMatch,players,tracking,events} from '../data/mockData';
import {Match} from '../types';
const wait=<T,>(data:T)=>new Promise<T>(r=>setTimeout(()=>r(data),180));
export const getMatches=()=>wait(matches); export const getMatch=(id:string)=>wait(matches.find(m=>m.id===id)||demoMatch);
export const uploadMatch=(data:Partial<Match>)=>wait({...demoMatch,...data,id:`match-${Date.now()}`,status:'Pendiente' as const});
export const processMatch=(id:string)=>wait({id,status:'Procesando'}); export const getPlayers=()=>wait(players); export const getPlayer=(id:string)=>wait(players.find(p=>p.id===id)||players[0]);
export const getTrackingData=(matchId:string)=>wait(tracking); export const getEvents=(matchId:string)=>wait(events);
export const analyzeMatchWithAI=async(question:string)=>wait(`Según los datos simulados del partido, ${question.toLowerCase().includes('defend')?'el equipo local defendió con un bloque medio compacto y buena protección del carril central.':'la mayor influencia correspondió a Sergio Arribas, con alta participación, progresiones y un rating de 8.2.'} El análisis detallado estará disponible cuando conectemos el motor Gemini.`);

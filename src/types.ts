export interface Match {id:string; homeTeam:string; awayTeam:string; competition:string; date:string; duration:number; status:'Analizado'|'Procesando'|'Pendiente'; score:[number,number];}
export interface Player {id:string; name:string; team:'local'|'visitante'; position:string; number:number; age:number; minutes:number; distance:number; maxSpeed:number; avgSpeed:number; sprints:number; accelerations:number; decelerations:number; touches:number; rating:number; passes:number; passAccuracy:number; shots:number; xg:number; xa:number;}
export interface PlayerTrackingPoint {playerId:string; timestamp:number; x:number; y:number; speed:number;}
export interface MatchEvent {id:string; minute:number; type:'Gol'|'Tiro'|'Tiro a puerta'|'Falta'|'Tarjeta'|'Corner'|'Pérdida'|'Recuperación'|'Cambio'; team:'local'|'visitante'; player:string; detail:string;}
export interface Metric {label:string; value:string|number; change?:string; icon?:string;}

export type ZoomMode="physical"|"conceptual"|"outward"|"hybrid";
export type Fidelity="draft"|"high"|"very-high";
export type RendererType="room"|"product"|"machine"|"circuit"|"chip"|"cell"|"material"|"molecule"|"atom"|"nucleus"|"particle"|"screen"|"document"|"code"|"network"|"generic";
export interface ZoomNode{ id:string; label:string; description?:string; scaleM?:number; renderer:RendererType; parent?:string; children?:string[]; target?:{childId?:string;anchor?:[number,number,number];note?:string}; camera?:{approach?:"diagonal"|"center"|"orbit";curve?:number;roll?:number}; visual?:{color?:string;density?:number;motion?:"none"|"subtle"|"active";variant?:string}; facts?:string[]; sourceUrls?:string[]}
export interface ZoomRoute{ id:string; label:string; nodes:string[]; branchKey?:"a"|"d"}
export interface InfinizoomProject{version:1|2;name:string;slug:string;prompt?:string;mode:ZoomMode;startNode:string;defaultRoute:string;durationSeconds:number;fidelity:Fidelity;style:{background:string;track:string;accent:string;feel:string[]};authoring?:{status:"scaffold"|"researched"|"approved";generatedAt?:string;notes?:string[]};nodes:ZoomNode[];routes:ZoomRoute[]}

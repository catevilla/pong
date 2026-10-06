const BIANCO= 0xFFFFFF;;
const L_RACCHETTA = 20;
const A_RACCHETTA = 120;
const L_PALLINA = 24;
const MARGINE = 40;

let racchetta_sx;
let racchetta_dx;
let pallina;   

let vel_x = 6;

function preload (s){

}

function create (s){
racchetta_sx=PP.shapes.rectangle_add(s , MARGINE, ALTEZZA/2, L_RACCHETTA, A_RACCHETTA, BIANCO, 1);
racchetta_dx=PP.shapes.rectangle_add(s , LARGHEZZA - MARGINE , ALTEZZA/2, L_RACCHETTA, A_RACCHETTA, BIANCO, 1);
pallina=PP.shapes.rectangle_add(s , LARGHEZZA/2, ALTEZZA/2, L_PALLINA, L_PALLINA, 0x0000FF, 1);
}

function update (s){
pallina.geometry.x =pallina.geometry.x + vel_x;
if (pallina.geometry.x > LARGHEZZA) {
    vel_x = -vel_x}
    if (pallina)
}

function destroy (s){

}

PP.scenes.aa("pong", preload, create, update, destroy);


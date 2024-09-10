/* operador suma */

let numero1 = 25;
let numero2 = 75;
let texto1 = "Curso JavaScript";
// este carcater es un espacio en blanco &nbsp;
let texto2 = 'Cenfotec-ProfeFrank';

//concatenacion de datos usando el signo +
document.write(numero1 + numero2 + "<br>"); /* resultado: 100 */
document.write(texto1 + texto2 + "<br>"); /* resultado: Curso JavaScript Cenfotec-ProfeFrank */
document.write(numero1 + texto2 + "<br>"); /* resultado: 25 Cenfotec-ProfeFrank */

//operador resta

let n1 = 24;
let n2 = 14;
let r = 0;
r = n1 - n2;
document.write(r + "<br>"); /* reultado: 10 */
r = -r;
document.write(r + "<br>"); /* resultado: -10 */
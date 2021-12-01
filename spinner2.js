/*process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r| ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout (() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\ ');
}, 700);   */

const spinner2 = ['| ', '/ ', '- ', '\\ ', '| ', '/ ', '- ', ' \\ ', '| '];
let i = 0; //as always start looping at '0' ... 
for (let character of spinner2) {
  setTimeout(() => {
    process.stdout.write("\r" + character);
  }, i);
  i+= 800;
};
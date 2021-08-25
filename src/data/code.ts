export const defaultCodes = {
  python: `_input = input()
  #code
  print(_input)`,
  javascript: `const input = [];
  
  require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", function (line) {
      input.push(line.trim());
    })
    .on("close", function () {
      //code
    });
      `,
};

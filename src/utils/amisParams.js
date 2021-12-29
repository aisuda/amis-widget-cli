let consoleTag = '[amis]'; // 输出标记

function setConsoleTag(newText) {
  consoleTag = newText;
}

module.exports = {
  get consoleTag() {
    return consoleTag;
  },
  setConsoleTag
};

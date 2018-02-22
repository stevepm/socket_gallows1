import HangmanSocket from './hangman_socket'

window.onload = function () {
  let hangman = new HangmanSocket();

  hangman.connect_to_hangman();
};
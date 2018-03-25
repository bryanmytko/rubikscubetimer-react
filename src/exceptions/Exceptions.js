class Exception {
  constructor(message) {
    this.message = message;
  }
}

class ScrambleServiceException extends Exception {}

export { Exception, ScrambleServiceException };

// just pass through Franz
module.exports = Franz =>
  class HangoutsChat extends Franz {
    overrideUserAgent() {
      return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:71.0) Gecko/20100101 Firefox/71.0";
    }
  };

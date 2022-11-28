function ensureQuestion(s) {
    let xyi = s.slice(-1)
    if (xyi === '?') {
      return s;
    }
    return s +'?'
  };
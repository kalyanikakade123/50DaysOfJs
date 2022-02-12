function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
  }
  
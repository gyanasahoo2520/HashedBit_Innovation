function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
  }
  
  let paragraph = "This is a simple paragraph to count words.";
  let wordCount = countWords(paragraph);
  
  console.log(`Number of words: ${wordCount}`); 
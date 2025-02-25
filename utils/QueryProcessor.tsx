export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  
  if (query.includes("plus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
    return `${parseInt(numbers[0], 10) + parseInt(numbers[1], 10)}`;
    }
  }
    
  if (query.includes("minus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
    return `${parseInt(numbers[0], 10) - parseInt(numbers[1], 10)}`;
    }
  }   
    
  if (query.includes("largest")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
    return `${Math.max(...numbers.map(num => parseInt(num, 10)))}`;
    }
  }
    
  if (query.includes("multiplied")) {
    let numbers = query.match(/\d+/g);
    if (numbers) {
    return `${parseInt(numbers[0], 10) * parseInt(numbers[1], 10)}`;
    }
  }
  
  return "";
}
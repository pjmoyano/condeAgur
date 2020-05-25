import lista from './QuotesList.txt';

export let quotes = []


export const createQuotes = () => {
  fetch(lista)
    .then(res => res.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(line => quotes.push(line));
    });
}

createQuotes()
export const getQuotes = (number) => {
  return quotes[number];
}

export const getCountQuotes = () => {
  return quotes.length - 1;
}
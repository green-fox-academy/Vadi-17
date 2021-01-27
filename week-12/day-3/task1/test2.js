
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://telex.hu/rss', true);
// Also try http://444.hu/feed
httpRequest.send(null);
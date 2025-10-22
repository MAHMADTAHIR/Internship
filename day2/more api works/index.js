const apiKey = "6df3e1fc0fc24d0cb560232b07385e70";
let allArticles = [];
let currentPage = 0;
const pageSize = 5;

async function getBlogs() {
  document.getElementById('loader').style.display = 'inline-block'; 

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  const data = await res.json();
  allArticles = data.articles;
  showBlogs();
}
function showBlogs() {
  const container = document.getElementById('news');
    const start = currentPage * pageSize;
  const end = start + pageSize;

  allArticles.slice(start, end).forEach(b => {
    container.innerHTML += `
      <div class="blog">
        <img src="${b.urlToImage}" alt="Image">
        <h3>${b.title}</h3>
        <p>${b.description}</p>
      </div>
    `;
  });

  document.getElementById('loader').style.display = 'none';
  currentPage++;
}

document.getElementById('load-more').onclick = () => {
  showBlogs();
};

getBlogs();

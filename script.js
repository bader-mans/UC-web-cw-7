
let movei1={
    name:"The Hobbit",
    img:'https://www.bing.com/images/search?view=detailV2&ccid=gkF55rtm&id=180E75DEBD5730FD6A39C67DF7075612CC7B0657&thid=OIP.gkF55rtmV9bn1it09-Ra0wHaKy&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.824179e6bb6657d6e7d62b74f7e45ad3%3frik%3dVwZ7zBJWB%252fd9xg%26riu%3dhttp%253a%252f%252fwww.blackfilm.com%252fread%252fwp-content%252fuploads%252f2013%252f12%252fThe-Hobbit-The-Desolation-of-Smaug-character-poster-7.jpg%26ehk%3d5nixZGtr0QadJHQkXCk4ms%252ffp7L2810Jq2wqzLvCnU8%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2048&expw=1405&q=the+hobbit+movie+picture&simid=608021482531731814&FORM=IRPRST&ck=11054E72F3253563AC50CEB066D04A7A&selectedIndex=0&ajaxhist=0&ajaxserp=0'
}
let movei2={
    name:"RED",
    img:'https://www.bing.com/images/search?view=detailV2&ccid=Y%2fGw50%2bJ&id=6CF73ABFABEFC6F5BFEB7FA4F94590F8A0BE6190&thid=OIP.Y_Gw50-JukvuTXL2mAeXswHaLH&mediaurl=https%3a%2f%2fimage.tmdb.org%2ft%2fp%2fw600_and_h900_bestv2%2fadHKzS0v29apMxJlKuvAf1ykNnS.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.63f1b0e74f89ba4bee4d72f6980797b3%3frik%3dkGG%252boPiQRfmkfw%26pid%3dImgRaw%26r%3d0&exph=900&expw=600&q=RED+movie+picture&simid=608041948051276915&FORM=IRPRST&ck=E32E2356DD89D2CB9870196DFDCB2D93&selectedIndex=1&ajaxhist=0&ajaxserp=0'
}
let movei3={
    name:" Street Kings",
    img:'https://www.bing.com/images/search?view=detailV2&ccid=Vjru5yQL&id=E70F83EEF9CA80761C8C64E9A81A5B778F770F39&thid=OIP.Vjru5yQL-NgcewlRJXbujAHaK-&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.563aeee7240bf8d81c7b09512576ee8c%3frik%3dOQ93j3dbGqjpZA%26riu%3dhttp%253a%252f%252f3.bp.blogspot.com%252f-6sqC5AZrXyc%252fUIOVgpoXVpI%252fAAAAAAAFUUM%252f1GEsOIhTv38%252fs1600%252fstreet_kings-2008-MSS-poster-1-xl.jpg%26ehk%3dWPOuOD%252b4Xz7ZhBiTr1Piy0EtyZcdRaIGLQ04nUY8um4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1280&expw=864&q=street+kings+movie+pic&simid=608041733282398830&FORM=IRPRST&ck=CF2BE32B4C285029EBF69046C39AE71E&selectedIndex=1&ajaxhist=0&ajaxserp=0'
}
let movies =[];
movies.push(movei1, movei2, movei3) 
 moviecontainer = document.getElementById('container')
movies.forEach(element => {
    movieContainer.innerHTML += `
    <div class="movie">
    <img src="${movie.img}" alt="movie picture" />
    <h2>${movie.name}</h2>
    </div>
   `;   
});
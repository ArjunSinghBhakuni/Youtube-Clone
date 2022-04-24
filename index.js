 // https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=[YOUR_API_KEY]  
 
 const api = "AIzaSyB8O7Gt06FMqjDFaIYs0vS0-8Y6Svt6Rfw"

  
fetch(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=48&key= ${api} `)
.then(response => {
  //console.log(response)
 return response.json()


})
.then(response =>{
  console.log(response.items)
 appendData(response.items) 
})
.catch(function (err){
 console.log(err)
})


 
let appendData = (videos) => {

 let show_videos = document.getElementById("show_videos");
 show_videos.innerHTML = null;

 videos.forEach(({id:{videoId} ,snippet:{channelTitle,description,thumbnails:{medium:{url}} ,title}})=>{

  let div = document.createElement("div");

  let thumbnails = document.createElement("img")

  thumbnails.src =  url

 thumbnails.setAttribute("id","thum")

 

  let name = document.createElement("h4")

  name.innerText = title;

  let accName = document.createElement("p")
  accName.innerText = channelTitle;

  div.append(thumbnails,name,accName)
 
  let data = {
    title,
    videoId,
    channelTitle,
    description,
    
    
  }

  div.onclick = ()=>{
    showvideos(data);
  } 

  show_videos.append(div)

 })

}

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] 
  let search_videos = async ()=>{
try{
   let query = document.getElementById("query").value
  
   let rese = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${query}%202&key=${api}  `)
  //console.log(rese)
  
let dataa = await rese.json();
  console.log(dataa.items)
   appendData(dataa.items)
    
}catch(err){
  console.log(err)
} 

}
 
showvideos=(x)=>{
  window.location.href= "video.html"

  localStorage.setItem("video",JSON.stringify(x));
}
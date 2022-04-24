let {title,videoId,channelTitle,description,}= JSON.parse(localStorage.getItem("video"))

let show_videos = document.getElementById("particular_video")

let div = document.createElement("div");

let iframe = document.createElement("iframe")

iframe.src = `https://www.youtube.com/embed/${videoId}`

iframe.width = "100%"
iframe.height ="400px"

iframe.allow = "fullscreen"

let name = document.createElement("h2")

name.innerText = title;

 document.querySelector("title").innerText = title;

let accName = document.createElement("h4")
accName.innerText = channelTitle;

let des = document.createElement("p")
des.innerText = description;

div.append(iframe,name,accName,des)

show_videos.append(div)


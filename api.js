async function myvar(){ //using async func, so that it can wait until the data loads
    let result= await fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=380793906c3944b38079a72301b2928d");
   result=await result.json() //converts to json

    var div=document.getElementById("container")
    for(let i=0;i<result.articles.length;i++){
    var div1=document.createElement("div")
    var title=document.createElement("h1")
    var description=document.createElement("p")
    var image=document.createElement("img")
   image.setAttribute("class","picture") //setting class name
   div1.setAttribute("class","news_article")
   title.setAttribute("class","title")
   description.setAttribute("class","description")

    var title_text=document.createTextNode(result.articles[i].title)
    var description_text=document.createTextNode(result.articles[i].description)
    image.src=result.articles[i].urlToImage

    title.appendChild(title_text)
    
    description.appendChild(description_text)
    
    div1.appendChild(title)
    div1.appendChild(description)
    div1.appendChild(image)
    div.appendChild(div1)
}
    
   

    

   
}
myvar()
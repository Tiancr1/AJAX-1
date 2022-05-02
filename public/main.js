console.log('我是main.js')
//创建XMLHttpRequest对象
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    //调用对象的open方法
    request.open('GET','/style.css')
    //监听对象的onload和onerror事件
    request.onload = ()=>{
        console.log('request.response')
        console.log(request.response)
        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //插到头里面
        document.head.appendChild(style)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    //调用对象的send方法（发送请求）
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    //调用对象的open方法
    request.open('GET','/2.js')
    //监听对象的onload和onerror事件
    request.onload = ()=>{
        console.log('request.response')
        console.log(request.response)
        //创建style标签
        const script = document.createElement('script')
        //填写style内容
        script.innerHTML = request.response
        //插到头里面
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    //调用对象的send方法（发送请求）
    request.send() 
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.htl') //readyState = 1
    request.onreadystatechange = ()=>{
        //下载完成，但不知道是下载的是2xx的还是4xx、5xx
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const html = document.createElement('html')
                html.innerHTML = request.response
                document.body.appendChild(html)
            }else{
                alert('加载HTML失败')
            }
        }
    }
    request.send() //readyState = 2
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('加载XML失败')
            }
        }
    }
    request.send()
}
getJSON.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }else{
                alert('加载json失败')
            }
        }
    }
    request.send()
}
let n=1
getPAGE.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 &&request.status<300){
                console.log(request.response)
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n+=1;
            }
        }
    }
    request.send()
}
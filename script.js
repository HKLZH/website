const target = document.getElementById('console');
const text = `> 初始化...
> 访问权限已授权...
> 尝试接入代理服务器...
> 连接成功...
> 开始数据传输...
> 数据传输完毕...
> 最终程序启动中...
> 网页渲染完毕...
> 警告!警告！和网站建立的TCP被不明物体劫持！请勿相信任何信息！
> Waring! waring! TCP of connect server was hacked that undefination！
  Do'nt believe anything !
 
> Welcome to WarGod !!!
`;

let index = 0;
let isShaking = false;

function typeWriter() {
    target.classList.add('static');
    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // 调整这里的延迟时间以改变打字速度
    } else {
        
        target.classList.remove('static')

       
    }


    if (index >= text.length) {
        const image = document.createElement('img');
        image.src = 'hammer_sickle.webp';
        image.classList.add('image-container');
        target.appendChild(image);
    }
}

typeWriter();

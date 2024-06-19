const sec2 = document.getElementById("sec2");
const sec4= document.getElementById('sec4')
const imgList = document.getElementById("imgList")
const sec6Head = document.getElementById("sec6-head")
const sec7= document.getElementById("sec7")
const box = document.getElementById("box")
const table = document.getElementById("table")
const child = sec2.firstElementChild
const child1 = sec4.firstElementChild
const listChild = sec6Head.firstElementChild
const child2= sec7.firstElementChild
const sec2Data =[ 
    [
  {
    image: `<div class="icon1">
        <iconify-icon icon="game-icons:achievement"  style="color: #fff;font-size: 30px"></iconify-icon>
        </div>`,
    title: "170 K+",
    description: "Websites Built by Jupiter X",
  },
  {
    image: `<div class="icon1" style="background:#46b1ff">
        <iconify-icon icon="ic:round-star"  style="color: #fff;font-size: 30px"></iconify-icon>
        </div>
        `,
    title: "5,000",
    description: "5-star reviews on Themeforest",
  },
  {
    image: `<div class="icon1" style="background:#3ae2e2">
        <iconify-icon icon="mdi:like"  style="color: #fff;font-size: 30px"></iconify-icon>
        </div>`,
    title: "No 1",
    description: "Most preferred theme by Freelancers",
  },
  {
    image: `<div class="icon1" style="background:#fc4cda">
        <iconify-icon icon="material-symbols:trophy-sharp"  style="color: #fff;font-size: 30px"></iconify-icon>
        </div>
        `,
    title: "10+ years",
    description: "Top selling theme since 2013",
  },
],

[
    {
        vedioUrl: `<div class="sec3-v1">
  <video class="sec4-vedio" autoplay loop muted src="https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/shop-builder.mp4"></video>
</div>`,
        title: "Shop builder",
        style:`  color: #FF96AA;  background-image: linear-gradient(100deg, #FF96AA 0%, #BE6A7A 100%);`,
        heading:"Create simple or advanced shops in no time.",
        description: "Build beautiful product pages that convert. Choose from 60+ professional shop designs or customize all the way to the thank you page!",
      },  
    {
        vedioUrl: `<div class="sec3-v1">
  <video class="sec4-vedio" autoplay loop muted src="https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/header-builder.mp4"></video>
</div>`,
        title: "Header builder",
        style:`color: #FA89CA;background-image: linear-gradient(96deg, #FA89CA 0%, #DA6CAB 100%);`,
        heading:"Unique headers where you want.",
        description: "Design beautiful headers and place them on all or specific pages of your site.",
    },  
    {
        vedioUrl: `<div class="sec3-v1">
        <video class="sec4-vedio" autoplay loop muted src="https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/motion-effects.mp4"></video>
        </div>`,
        title: "Motion effects",
        style:`color: #C4E275; background-image: linear-gradient(96deg, #C4E275 0%, #A0C341 100%);`,
        heading:"Bring your site to life with animations.",
        description: "Add lively and interactive animations and transitions to your site. Make your site look dynamic and alive.",
      },  
    {
        vedioUrl: `<div class="sec3-v1">
  <img class="sec4-vedio"  src=" https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/04/Group-182.png"></img>
</div>`,
        title: "Layout builder",
        style:`color: #79DDDE; background-image: linear-gradient(96deg, #79DDDE 0%, #5CBDBE 100%);`,
        heading:"Full site editing from one place",
        description: "Design and manage your entire website from head to toe within one single page.",
      },  
]
,
[
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/manicure-2-cp.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/model-3-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/yacht-rental-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/jewelry-shop-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/law-firm.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/app-4.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/swimwear-shop-cp.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/agency-3.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/car-rental-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/seo-cp.jpg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/dance-academy-cp.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/hotel-listing-3-cp.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/Fashion-Blog-cp.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/american-football-cp-copy.jpeg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/fitness-shop-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/butchery-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/cake-shop-cp.png",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/Video-Production-cp.jpg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/business-mentor-cp.jpg",
    "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/03/personal-trainer-cp.jpg"
],
[
    "designers 👩🏻‍🎨",
    "developers 👨‍💻",
    "marketers 👩🏻‍💼",
    "shops 🛍️",
    "bloggers ✍️",
    "creatives 🧑‍🎤",
]
,[
  {
title:"Dynamic content",
style:"background-color: transparent;background-image: linear-gradient(180deg, #0072F9 0%, #00B9F2 100%);",
para:"Easily build advanced dynamic sites such as booking, event manager, listing and more.",
img:"https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/dynamic-content.png",
imgSize:"padding:30px 0px",
paraColor:"white",
headColor:"white"
},
{
  title:"Membership widgets",
  style:"background-color: #F5F5F7;",
    para:"Powerful sign-up and login forms, social login and password reset widgets. All flexible and customizable.",
    img:"https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/featured-3.jpg",
    imgSize:"padding:30px",
    paraColor:"gray",
    headColor:"black"
  },
  {
    title:"Global Styling",
    para:"Set global fonts, colors, and widgets and reuse them anywhere on your website.",
    style:"background-color: #F5F5F7;",
    img:"https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/global-styling.png",
    imgSize:"padding:20px",
    paraColor:"gray",
    headColor:"black"
  },
  {
    title:"Advanced menu builder",
    para:"Build any menu design from horizontal to vertical, mega menu, off-canvas and more",
    style:"background-color: transparent;background-image: linear-gradient(140deg, #3613FA 12%, #FC4CDA 100%);",
    img:"https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/advanced-menubuilder.jpg",
    imgSize:"padding:0px 0px 0px 100px",
    paraColor:"white",
    headColor:"white"
  }
],
[
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/01.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/02.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/02-1.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/03.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/03-2.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/04.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/05.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/06.jpg",
  "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2022/11/09.jpg"
],
[
  {
    img:"./images/obj.jpg",
    title:"Custom Css",
    content:"Expand abilities with custom CSS to control the appearance and behavior of any section on your website."
  },
  {
    img:"./images/div.jpg",
    title:"Custom Codes",
    content:"Integrate third party tools like Google Analytics with custom code. Write snippets in PHP for even greater flexibility."
  },
  {
    img:"./images/a.jpg",
    title:"Custom Fonts",
    content:"Upload your own custom fonts using popular formats like WOFF, WOFF2, TTF, SVG or EOT files or connect Adobe Fonts for total brand consistency."
  },
  {
    img:"./images/star.jpg",
    title:"Custom Icons",
    content:"Create smart vector-based SVG icons that are flexible, light, and completely customizable for any size you require."
  },
  {
    img:"./images/bar.jpg",
    title:"Custom Fields",
    content:"Add custom fields to any post type to capture and store extra information related to any type of page or post."
  },
  {
    img:"./images/card.jpg",
    title:"Custom Post Types",
    content:"Extend beyond standard WordPress posts and create your own custom post types (CPT) to handle any kind of specialized content."
  },
]

];




sec2Data[0].map((item) => {
  const div = document.createElement("div");
  div.className = "sec2-card";
  div.innerHTML = `
  ${item.image}
<h1 class="card-title">${item.title}</h1>
<p class="card-para">${item.description}</p>

 `;

 child.appendChild(div)
});



sec2Data[1].map((item) => {
  const div = document.createElement("div");
  div.className ="sec3-v w-100";
  div.innerHTML =`
${item.vedioUrl}
<div class="sec3-v2">
  <h3 class="sec4-title" style="${item.style}">${item.title}</h3>
  <h1 class="sec4-description">${item.heading}</h1>
  <p class="sec4-para">${item.description}</p>

</div>
`;

 child1.appendChild(div)
});


sec2Data[2].map((item)=>{
    const div = document.createElement("div");
//   div.className ="sec5-img";
  div.innerHTML=`<img class="sec5-img" src="${item}"/>`
  imgList.appendChild(div)

})


sec2Data[4].map((item)=>{
  const div = document.createElement("div");
  div.style.cssText+=`${item.style}`
    div.className ="sec7-right d-flex  flex-column ";
    div.innerHTML=`
    <div class="d-flex flex-column align-items-start">
    <h1 class="sec7-head " style="color:${item.headColor}">${item.title}</h1>
    <p class="sec7-para" style="color:${item.paraColor}">${item.para}</p>
    </div>
    <div style="${item.imgSize}">
    <img style="width:100%" src="${item.img}" alt="">
    </div>
`
    child2.appendChild(div)
})

sec2Data[5].map((elm)=>{
const div = document.createElement("div")
div.className="logo"
div.innerHTML=`<img style="" src="${elm}"/>`
box.appendChild(div)
})


sec2Data[6].map((item)=>{
  const div = document.createElement("div")
  div.className="table-card"
  div.innerHTML=`<img style="width:2.2em;height:2.2em" src="${item.img}"/>
  <h4 class="table-title">${item.title}</h4>
  <p class="table-para">${item.content}</p>
  `
  table.appendChild(div)
})

let index = 0;
function updateList() {
  listChild.innerHTML = sec2Data[3][index];
  index = (index + 1) % sec2Data[3].length;
  setTimeout(updateList, 1500);
}
      
      setTimeout(updateList, 1500);


      document.addEventListener('DOMContentLoaded', function () {
        const h1 = document.querySelector('.sec12-head');
    
        h1.addEventListener('mousemove', function (event) {
            const boundingRect = h1.getBoundingClientRect();
            const x = event.clientX - boundingRect.left;
            const halfWidth = boundingRect.width / 2;
            const rotateY = (x - halfWidth) / halfWidth * 30;
    
            h1.style.setProperty('--rotateX', '0deg'); 
            h1.style.setProperty('--rotateY', `${rotateY}deg`);
        });
    
        h1.addEventListener('mouseleave', function () {
            h1.style.setProperty('--rotateX', '0deg');
            h1.style.setProperty('--rotateY', '0deg');
        });
    });
    

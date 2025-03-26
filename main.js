let box = document.getElementById("candy")



let data = [
   {
       img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4bd9a25b-9a7a-4130-87ce-2cb2d184665f.jpg?ts=1733471277",
       time : "10 Min",
       description :  "Ashirvaad Shudh Chakki <br> Atta(100% Atta...) ",
       weight : "5 kg",
     price : "248rupees",
     previousprice : 283,
     button : "Add",
    //  link : "https://blinkit.com/prn/aashirvaad-high-fibre-atta-with-multigrains-5-kg/prid/108301"
     
   },
   {
       img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/174379a.jpg?ts=1672037249",
       time : "10 Min",
       description :  "Silver Coin Traditional <br> Chakki Atta ",
       weight : "5 kg",
       price : "226rupees",
       previousprice : 290,
       button : "Add"
       
    },
    {
      img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a3e14899-cdda-46c3-9062-69e94f778f9d.jpg?ts=1720100197",
      time : "10 Min",
      description :  "Patanjali Traditional Whole Wheat Chakki Atta  ",
      weight : "10kg",
      price : "452rupees",
      previousprice : 480,
      button : "Add"
  
    },
    {
        img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e156dfe2-509b-423c-bdb6-4833f95a4a7e.jpg?ts=1742386572",
      time : "10 Min",
      description :  "Lo! Foods Ultra Low <br> Carb Keto Atta... ",
      weight : "500 kg",
      price : "284rupees",
      previousprice : 319,
      button : "Add"
    
      
    }, 
    {
      img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1648f481-8d90-45c1-be07-7623e3fc4eaa.jpg?ts=1730894527",
      time : "10 Min",
      description :  "Aashirvaad High Fibre Atta with Multigrains",
      weight : "5 kg",
      price : "332rupees",
      previousprice : 386,
      button : "Add"
  
    },
    {
        img :"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/146099a.jpg?ts=1690805510"
    ,time : "10 Min",
    description :  "Silver Coin Tradiotnal  <br> Chakki Fresh Atta",
    weight : "1 kg",
    price : "50rupees",
    previousprice : 62,
    button : "Add"

  },
  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/d2b0f1bf-5e1c-4011-aab1-f2673637cb6e.jpg?ts=1739412575",
    time : "10 Min",
    description :  "Fortune Challi Fresh <br> (100% Atta, 0% Maida)...",
    weight : "10 kg",
    price : "448rupees",
    previousprice : 485,
    button : "Add"

  },
  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d86fa99d-affa-482c-b7ff-3fbd2badb413.jpg?ts=1730894517",
    time : "10 Min",
    description :  "Ashirvaad Shudh Chakki <br> Atta(100% Atta...) ",
    weight : "5 kg",
    price : "248rupees",
    previousprice : 283,
    button : "Add"

  },
  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534355a.jpg",
    time : "10 Min",
    description : "Talti Bafla Flour <br>    ",
    weight : "5 kg",
    price : "248rupees",
    previousprice : 283,
    button : "Add"

  },

  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b13c7db3-066c-431d-9da7-416dcf342122.jpg?ts=1713633747",
     time : "10 Min",
    description :  "Organic Tattva Wheat <br> Organic Atta 1 Kg ",
    weight : "1 kg",
    price : "66rupees",
    previousprice : 80,
    button : "Add"

  },
  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/128ea161-7c8c-4bc7-a2a3-10decb6451e9.jpg?ts=1742469933",
    time : "10 Min",
    description :  "24 Mantra Organic 7 <br> Grain Atta",
    weight : "1 kg",
    price : "115rupees",
    previousprice : 125,
    button : "Add"

  },
  {
    img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a1f47485-7bc9-4b1c-960c-a02dbf2fc507.jpg?ts=1707977072",
    time : "10 Min",
    description :  "Organic Tattva Wheat Organic Atta 5kg",
    weight : "5 kg",
    price : "335rupees",
    previousprice : 449,
    button : "Add"

  },













]


data.map((data)=>{

    let boxes= document.createElement("div");
    boxes.className = "card"
    
   boxes.innerHTML =` <img src="${data.img}" alt="">
   <h4> ${data.time} </h4>
    <h1> ${data.description} </h1>
    <h4> ${data.weight} </h4>
    <h3> ${data.price}</h3>
    <h5> ${data.previousprice}</h5>
    <button>${data.button}</button>
   
   `
    box.appendChild(boxes)


} )

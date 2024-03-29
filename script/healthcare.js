
     let catData =[
          {
               img_url :"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png",
               cat_Name : "Covid Essentials",
               offer:"  Upto 77% off",
          },
          {
               img_url : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png",
               cat_Name : "Personal Care",
               offer:" Upto 80% off",
          },
          {
               img_url : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png",
               cat_Name : "Health Food and Drinks",
               offer:" Upto 57% off",
          },
          {
               img_url : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png",
               cat_Name : "Beauty",
               offer:" Upto 35% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png",
               cat_Name:"Skin Care",
               offer:" Upto 50% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png",
                cat_Name:"Home care",
                offer:" Upto 35% off",
          },
          {
               img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png",
               cat_Name: "Ayurvedic Care",
               offer:" Upto 70% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f970ef9868093acb9d1d37a9387912f9.png",
               cat_Name: "Sexual Wellness",
               offer:" Upto 53% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cf0c849550a38109738815b3fc2fac6.png",
               cat_Name:"Fitness Supplements",
               offer:" Upto 80% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/efdbfba5bfbb3b809728b627e7dfa118.png",
               cat_Name:"Mother and Baby Care",
               offer:" Upto 50% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ac80578390a23bcfb1ed5a4551886ea7.png",
               cat_Name:"Health Devices",
               offer:"Upto 65% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e0863336e309387bb5bdf0b8e1d314e4.png",
               cat_Name:"Health Condition",
               offer:"Upto 65% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c3cfab4f38b63297b4096607e1349d61.png",
               cat_Name:"Diabetic Care",
               offer:"Upto 65% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4eb8bfa2d4ea3bc0a5cade3b15aa246e.png",
               cat_Name:"Elderly Care",
               offer:"Upto 45% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1a830431aa043c9caef5a8f37cfb4b06.png",
               cat_Name:"Accessories/Wearables",
               offer:"Upto 35% off",
          },
          {
               img_url:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
               cat_Name:"Top Products ",
               offer:"Upto 60% off",
          },
          ];

          catData.map(function(elem){
              
               let box = document.createElement("div");

               let Product_img = document.createElement("img");
               Product_img.setAttribute("src",elem.img_url);

               let product_name = document.createElement("h4");
               product_name.innerText= elem.cat_Name;

               let product_off = document.createElement("p");
               product_off.innerText = elem.offer;

               box.append(Product_img,product_name,product_off);
               
               document.querySelector("#category").append(box);

          });

          document.querySelector(".left>img").addEventListener("click", function () {
           window.location.href = "index.html";
          });

          document.querySelector("#medlogin").addEventListener("click", function () {
          window.location.href = "login.html";
          });

          document.querySelector("#med").addEventListener("click", function () {
          window.location.href = "medicine.html";
          });

          document.querySelector("#Hc").addEventListener("click", function () {
          window.location.href = "healthCare.html";
          });

          document.querySelector("#Lt").addEventListener("click", function () {
          window.location.href = "medicine.html";
          });

          document.querySelector("#Of").addEventListener("click", function () {
          window.location.href = "medicine.html";
          });

          document.querySelector("#Pls").addEventListener("click", function () {
          window.location.href = "medicine.html";
          });

          document.querySelector("#Hb").addEventListener("click", function () {
          window.location.href = "healthCare.html";
          });

          document.querySelector("#home").addEventListener("click", function () {
          window.location.href = "index.html";
          });

          document.querySelector("#medcart").addEventListener("click", function () {
          window.location.href = "cartPage.html";
          });

          document.querySelectorAll("#category div").addEventListener("click", function () {
          window.location.href = "valueStore.html";
          });

window.addEventListener("load",function(){
    //input Search
    const formSearch = document.querySelector(".search-form")
    const inputSearch = document.querySelector(".search-form input")
    console.log(formSearch)
    formSearch.addEventListener("submit", handleSearch)
    function handleSearch(e){
        if(inputSearch.value===""){
            e.preventDefault();
            alert("Bạn chưa nhập gì hết")
        }
    }
    function formatMoney(num) {
        return Intl.NumberFormat("vi-VN").format(num) + " đ";
      }

    //Đăng ký đăng nhập liên hệ 
    const formregistration = document.querySelector(".form-registration")
    const inputPass = document.querySelector("#pass")  ;
    const inputPwd = document.querySelector("#pass2")  ;
    const inputName = document.querySelector("#nameuser");
    const inputConmntent = document.querySelector("#content");

    let isSubmit =true;
    let isPass = true;
    let Pwd="";
    let isRpPwd= true;
    let isInputName = true;
    let isInputContent = true;
    

    inputPass?.addEventListener("change", function(e){
        
        Pwd=e.target.value;
        if(e.target.value.length<8){
            isPass=false;
            alert("Mật khẩu từ 8 ký tự trở lên")
        }
    })

    inputPwd?.addEventListener("change", function(e){
        if(e.target.value === Pwd ){
            isRpPwd=true;
            // alert("Mat khau nhap lai da dung")
        }
        else {
            isRpPwd=false;
            alert("Mật khẩu nhập lại chưa đúng")
        }
    })
    
    inputName?.addEventListener("change", function(e){
        if(e.target.value.length<4){
            alert("Họ tên từ 4 ký tự trở lên");
            isInputName = false
        }
        else{
            isInputName=true;
        }
    }
    )

    inputConmntent?.addEventListener("change", function(e){
        if(e.target.value.length<10){
            alert("Nội dung từ 10 ký tự trở lên");
            isInputContent = false
        }
        else{
            isInputContent=true;
        }
    })

    formregistration?.addEventListener("submit",function(e){
        e.preventDefault();
        if(isPass && isRpPwd || (isInputName && isInputContent)){
            this.submit();
            alert("Gửi dữ liệu thành công")
            this.reset();
          
        }
        else{
         
        }
    })
// SAN PHAM 
    
const items = [
    {
      id: 1,
      name: "Sữa Chua Vị Kiwi",
      title:
        "Hương vị thơm ngon của trái Kiwi xanh, nổi tiếng của đất nước New ZeaLand có trong Sữa chua vị Kiwi xanh đem đến một món ăn nhẹ Siêu ngon và tốt cho hệ tiêu hóa.",
      price: 21000,
      photo: "./images/sanpham/kiwi.jpg",
    },
    {
      id: 2,

      name: "Sữa Chua Vị Xoài",
      title:
        "Sữa chua xoài thích hợp cho mọi lứa tuổi, vì vậy hãy để cả gia đình quây quần bên nhau cùng thưởng thức món ăn thơm ngon, bổ dưỡng này.",
      price: 22000,
      photo: "./images/sanpham/mango.jpg",
    },
    {
      id: 3,

      name: "Sữa Chua Vị Dưa Lưới",
      title:
        "Trong dưa lưới chứa rất nhiều vitamin C có tác dụng làm đẹp da hiệu quả. Phụ nữ ăn sinh tố dưa lưới thường xuyên sẽ có làn da mịn màng.",
      price: 23000,
      photo: "./images/sanpham/cantaloupe.jpg",
    },
    {
      id: 4,

      name: "Sữa Chua Vị Mâm Xôi",
      title:
        "Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
      price: 24000,
      photo: "./images/sanpham/blackberry.jpg",
    },
    {
      id: 5,

      name: "Sữa Chua Vị Dâu Tây",
      title:
        "Dâu tây là một loại cây thân thảo có thân ngắn và các chiếc lá mọc gần với nhau. Lá có nhiều gai, bề mặt lá có nhiều lông tơ và kích thước lá có thể khác nhau ở từng giống.",
      price: 25000,
      photo: "./images/sanpham/strawberry.jpg",
    },
    {
      id: 6,

      name: "Sữa Chua Vị Việt Quất",
      title:
        "Quả việt quất chứa các dưỡng chất tốt cho sức khỏe như chất xơ, kali, folate, vitamin C và vitamin B6 (những chất hỗ trợ rất tốt cho sức khỏe của tim).",
      price: 26000,
      photo: "./images/sanpham/blueberry.jpg",
    },
    {
      id: 7,

      name: "Sữa Chua Vị Bưởi",
      title:
        "Bưởi là một loại quả thuộc chi Cam chanh có nguồn gốc từ Đông Nam Á. Bưởi tiếng Anh gọi là Pomelo, tuy nhiên nhiều từ điển ở Việt Nam lại dịch thành grapefruit.",
      price: 27000,
      photo: "./images/sanpham/grapes.jpg",
    },
    {
      id: 8,

      name: "Sữa Chua Vị Táo Xanh",
      title:
        "Táo xanh có hàm lượng chất xơ cao giúp tăng cường quá trình trao đổi chất của cơ thể. Bên cạnh đó chất xơ còn giúp quá trình giải độc gan và hệ tiêu hóa.",
      price: 28000,
      photo: "./images/sanpham/strawberry.jpg",
    },
    {
      id: 9,

      name: "Sữa Chua Vị Dứa",
      title:
        "Dứa có tên gọi khác như là khóm, thơm, khớm, gai hoặc huyền nương. Đây là một loại quả nhiệt đới. Dứa là cây bản địa của các nước Nam Mỹ.",
      price: 29000,
      photo: "./images/sanpham/kiwi.jpg",
    },
  ];
  function randerItem(item){
    const template =`
    <img src="${item.photo}" alt="" data-id=${item.id}>
    <div class="item-bottom">
        <h2 class="name-item">${item.name}</h2>
        <p>
            <span class= "item-title">
            ${item.title}
            </span>

            <a href="#"> Xem chi tiết. </a>
        </p>
        <div class= "money">
        <span> Giá: </span>
        <span class="money-item"> ${item.price} </span>
        </div>
        <div class="product-list-sp">
            <span >Số Lượng: </span>
            <input class="amount"  type="number" max="100" min="0" value="0" size="3">
            <button>Đặt hàng</button>
        </div>
    </div>
    `
    return template;
  }
    const productListItem = document.querySelectorAll(".product-list-item")
    console.log(productListItem)

    for(let i=0; i<productListItem.length; i++){
        let item=items[i];
        productListItem[i].insertAdjacentHTML('beforeend', randerItem(item))
    }

    let itemCard = [];
    function addCard(e){
        itemCard= JSON.parse(localStorage.getItem("listItem")) || [];
        if(e.target.matches(".product-list-sp button")){
            window.onstorage=()=>{
                itemCard=localStorage.length>0? JSON.parse(localStorage.getItem("listItem")) : [];
            }
            let infoItem = {
                id: +this.querySelector("img").dataset.id,
                img: this.querySelector("img").src,
                name: this.querySelector(".name-item").textContent,
                price: +this.querySelector(".money-item").textContent,
                amount: +this.querySelector(".amount").value,
            
            }
            let index=-1;
           if(infoItem.amount<0 || infoItem.amount>100){
               alert("Số lượng phải lớn hơn 0 và nhỏ hơn 100")
           }
           else{
               if(itemCard.length>0){
                    index = itemCard.findIndex((item)=>item.id === infoItem.id)

               }
               if(index>-1){
                   let newAmount=itemCard[index].amount+infoItem.amount
                   itemCard[index].amount=newAmount;
                   alert("Sản phẩm đã có trong giỏ hàng")
                   this.querySelector(".amount").value="0"
               }
               else{
                   if(index<0 || itemCard.length==0){
                       itemCard.push(infoItem)
                        this.querySelector(".amount").value="0"
                        alert("Sản phẩm đã thêm vào giỏ hàng")

                   }
               }
           }
           window.localStorage.setItem("listItem", JSON.stringify(itemCard))
        }
        
    }
    for(let i=0 ; i< productListItem.length; i++){
            productListItem[i].addEventListener("click", addCard);
            productListItem[i].addEventListener("click", showCart);

            productListItem[i].addEventListener("click", calcularSumMoney);

                
            
        }


        // gio hang 
        const bodycart= document.querySelector(".body-cart")
        function randerCart(item){
            const template =`
                <tr class="cart-item" data-id=${item.id}>
                <td > <img src="${item.img}"  alt=""> </td>
                <td> ${item.name}</td>
                <td> ${item.amount}</td>
                <td> ${item.price}</td>
                <td> ${item.price*item.amount}</td>
                <td > <i class="fas fa-trash cart-icon"></i> </td>
            </tr>
            `
            bodycart?.insertAdjacentHTML('beforeend', template)
        }
        const moneyItem = document.querySelector(".money-sum")
        console.log( moneyItem)
        const moneyCk = document.querySelector(".money-ck")
        const moneyTax = document.querySelector(".money-tax")
        const moneyDh = document.querySelector(".money-dh")
        function showCart(){
            itemCard=JSON.parse(localStorage.getItem("listItem")) || [];
            bodycart? bodycart.innerHTML = "":"";
            if(itemCard.length>0){
                itemCard.forEach((item, index) => randerCart(item));
                
                calcularSumMoney();
            }
        }
        showCart();
        window.onstorage= ()=>{
            showCart();

        }
        bodycart?.addEventListener("click" , function(e){

            // console.log(e.target)
            if(e.target.matches(".cart-icon")){
                // console.log("asbdc")
                // remove dom
                const parentElement = e.target.parentElement.parentElement.parentElement;
                // console.log(parentElement)
                parentElement.removeChild(e.target.parentElement.parentElement);

                // remove localstoge
                const indexItem = +e.target.parentElement.parentElement.dataset.id
                // console.log(indexItem)
                index = itemCard.findIndex((item)=>item.id === indexItem)
                // console.log(index)
                
                itemCard.splice(index, 1)
                localStorage.setItem("listItem", JSON.stringify(itemCard));
                calcularSumMoney();
            }
        })
        
        function calcularSumMoney (){
          itemCard=JSON.parse(localStorage.getItem("listItem")) || [];
            let sum=0;

            if(itemCard.length>0){
                itemCard.forEach(item=>{
                    sum+=+(item.price)*(item.amount)

                })
            }
            moneyItem ? moneyItem.textContent= formatMoney(sum):"";
            moneyCk? moneyCk.textContent=formatMoney(sum*0.1): "";
            moneyTax? moneyTax.textContent=formatMoney(0.1*(sum-(sum*0.1))): "";
            moneyDh? moneyDh.textContent=formatMoney((sum-(sum*0.1))+0.1*(sum-(sum*0.1))):"";

        }

})
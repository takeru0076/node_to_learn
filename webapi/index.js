const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000,console.log("server"));

app.get("/",(request,response) => {
  response.send("プログラミングチュートリアルへようこそ");
});


//お客様情報を保持している。
const customers = [
  {title: "田中", id: 1},
  {title: "斉藤", id: 2},
  {title: "鈴木", id: 3},
  {title: "安藤", id: 4},
  {title: "遠藤", id: 5},
]

//データを取得できるようにしよう (GET メソッド)
app.get("/api/customers",(request, response) =>{
  response.send(customers);
});

app.get("/api/customers/:id", (request,response) =>{
  const customer = customers.find((c) => c.id === parseInt(request.params.id));
  response.send(customer);
});

//データを送信(作成)してみよう (POSTメソッド)
app.post("/api/customers",(request,response) => {
  const customer = {
    title: request.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  response.send(customers);
});

//データを更新してみよう(PUTメソッド)
app.put("/api/customers/:id", (request,response) =>{
  const customer = customers.find((c) => c.id === parseInt(request.params.id));
  customer.title = request.body.title;
  response.send(customer);
});

//データを削除してみよう(DELETEメソッド)
app.delete("/api/customers/:id", (request,response) =>{
  const customer = customers.find((c) => c.id === parseInt(request.params.id));
  const index = customers.indexOf(customer);
  customers.splice(index,1);
  response.send(customer);
});


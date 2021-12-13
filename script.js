function addIncome() {
    let income = document.getElementById("income").value;
    document.getElementById("iVal").innerHTML = "$" + income;
    let balance = income - document.getElementById("eVal").innerHTML.split("$")[1];
    document.getElementById("bVal").innerHTML = "$" + balance;
    document.getElementById("income").innerHTML = "";
}

function addExpense() {
    const para1 = document.createElement("tr");
    const para2 = document.createElement("td");
    const para3 = document.createElement("td");

    const node1 = document.createTextNode(document.getElementById("name").value);
    const node2 = document.createTextNode("$" + document.getElementById("amount").value);

    para2.appendChild(node1);
    para3.appendChild(node2);

    para1.appendChild(para2);
    para1.appendChild(para3);

    const element = document.getElementById("tables");
    element.appendChild(para1);

    let exp = Number(document.getElementById("eVal").innerHTML.split("$")[1]) + Number(document.getElementById("amount").value);
    document.getElementById("eVal").innerHTML = "$" + exp;
    let bal = document.getElementById("bVal").innerHTML.split("$")[1] - document.getElementById("amount").value
    document.getElementById("bVal").innerHTML = "$" + bal;

    document.getElementById("name").innerHTML = "";
    document.getElementById("amount").innerHTML = "";
}
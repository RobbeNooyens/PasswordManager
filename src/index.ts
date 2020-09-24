import { tychei } from "seedrandom";
import Hashids from "hashids";

var service = document.getElementById("service");
var password = document.getElementById("password");
var result = document.getElementById("result");

function updateResult(){
    var rand = tychei(service["value"] + password["value"]);
    var seed = rand.quick() * 1000000;
    result.innerHTML = new Hashids('', 8, 'abcdefghijklmnopqrstuvwxyz1234567890').encode(Math.round(seed));
}

service.addEventListener("keyup", updateResult);
password.addEventListener("keyup", updateResult);
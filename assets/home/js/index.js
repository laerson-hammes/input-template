// By: Emanuel ABIZIMI
// https://www.youtube.com/channel/UCg09KJD3yKTwdQFjERgRW0w

$(document).ready(() => {
   var input = document.querySelector("input"),
   input_value = null,
   li = document.querySelectorAll("li"),
   list_text = null;

   input.onkeyup = function() {
      input_value = this.value;
      for (let index = 0; index <= li.length - 1; index++) {
         list_text = li[index].textContent;
         list_text = list_text.toLowerCase();
         input_value = input_value.toLowerCase();
         if (list_text.indexOf(input_value) > - 1) {
            // console.log("sss");
            li[index].style.display = "block";
         } else {
            // console.log("nnn");
            li[index].style.display = "none";
         }
      }
   }
});
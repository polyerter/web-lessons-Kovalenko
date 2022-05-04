<script src="https://code.jquery.com/jquery-3.6.0.min.js">
</script>

<h2>Lists</h2>
<ul>
  <li>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  </li>
  <li>
    Aliquam tincidunt mauris eu risus.
  </li>
  <li>
    Vestibulum auctor dapibus neque.
  </li>
  <li>
    Nunc dignissim risus id metus.
  </li>
  <li>
    Cras ornare tristique elit.
  </li>
  <li>
    Vivamus vestibulum ntulla nec ante.
  </li>
</ul>



.active {
  color: green;
  font-size: 20px;
}


/*let link =
  "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg";

$("ul")
  .css({
    background: "red",
   color: "#fff",
    "font-size": "20px"
  })
  .find("li")
    .html("<h1>Hello word</h1>")
  .on("click", function () {
    let img = $("<img/>", {
      src: link
    });

    img.css({
      widht: "100px",
      height: "200px",
    });

    img.on("click", function () {
     $(this).css({
        widht: "300px",
        height: "400px"
      });
    });

    $(this).append(img);
    $(this).html(`<img src='${link}' \>`);
     $(this).remove();
    $(this).css('font-size', '10px')
    console.log(this)
  });
*/



$('h2')
.on('dblclick', function () {
    $('ul').css('background', 'red');
  
  $('li').each(function(index, element) {
    let text = $(element).text(); 
     if ((index+1) % 2 === 0) {
       $(element).css('background', '#fff').on('click', function () {
         
         $(element).toggleClass('active');
        // alert($(element).text());
         
       });
     }
    $(element).text(`${index+1}. ${text}`);
    
   // console.log(index, text);
  });
  
});



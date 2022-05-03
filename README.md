<script src="https://code.jquery.com/jquery-3.6.0.min.js">
</script>

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



let link = 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg';

$("ul")
  .css({
    background: "red",
    color: "#fff",
    "font-size": "20px"
  })
  .find("li")
//  .html("<h1>Hello word</h1>")
  .on('click', function () {
  let img = $('<img/>', {
    src: link
  });
  
  img.css ({
    widht: '100px',
    height: '200px',
  });
  
  img.on('click', function () {
    $(this).css({
       widht: '300px',
       height: '400px',
    })
  });
  
  $(this).append(img);
  //$(this).html(`<img src='${link}' \>`);
 // $(this).remove(); 
 //$(this).css('font-size', '10px')
  //console.log(this)
});


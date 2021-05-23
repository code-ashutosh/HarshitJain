$(document).ready(function() {
    var counter = 0;
  
    // Start the changing images
    setInterval(function() {
      if(counter == 9) { 
        counter = 0; 
      }
  
      changeImage(counter);
      counter++;
    }, 3000);
  
    // Set the percentage off
    loading();
  });
  
  function changeImage(counter) {
    var images = [
      '<i class="fa fa-fighter-jet"></i>',
      '<i class="fa fa-gamepad"></i>',
      '<i class="fa fa-headphones"></i>',
      '<i class="fa fa-cubes"></i>',
      '<i class="fa fa-paw"></i>',
      '<i class="fa fa-rocket"></i>',
      '<i class="fa fa-ticket"></i>',
      '<i class="fa fa-pie-chart"></i>',
      '<i class="fa fa-codepen"></i>'
    ];
  
    $(".loader .image").html(""+ images[counter] +"");
  }
  function delay(){
    setInterval(function() {
        
      }, 1000);
  }
  function loading(){
    var num = 0;
  
    for(i=0; i<=100; i++) {
      setTimeout(function() { 
        if(num >=95 && num<=100) {
            $('.loader span').html(num+'%'+"<br></br>"+"I'm Here...");
        }
        else if(num>=0&&num<=25){
            $('.loader span').html(num+'%'+"<br></br>"+"I'm Waking up...");
            delay();
        }
        else if(num>=26&&num<=40){
            $('.loader span').html(num+'%'+"<br></br>"+"I'm Having lunch...");
            delay();
        }
        else if(num>=41&&num<=60){
            $('.loader span').html(num+'%'+"<br></br>"+"I'm Dressing...");
            delay();
        }
        else if(num>=60&&num<=95){
            $('.loader span').html(num+'%'+"<br></br>"+"I'm on my way...");
        }
        if(num == 100){
            loading();
        }
        num++;
      },i*120);
    };
  
  }
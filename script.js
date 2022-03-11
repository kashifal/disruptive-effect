      
         $(document).on('click', '.cards-margin .not-active', function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.not-tick').toggleClass('tick')
           
        });
        $(document).on('click', '.bars',function(){
        $('.sidebar').addClass('show');
        $('.overlay').addClass('show');
        })
        $(document).on('click', '.time',function(){
            $('.sidebar').removeClass('show');
            $('.overlay').removeClass('show');
            })
        
        
        
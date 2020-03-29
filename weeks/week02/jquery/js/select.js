$(document).ready(function() {
    $('div.example h3').click(function() {
        $(this).next('div.content').slideToggle('fast');
    });
    $('div.section h2').click(function() {
        $(this).parent().find('div.content').slideToggle('fast');
    });

    $('input[title*=http]').openDOMWindow({
        height:600,
        width:950,
        eventType:'click',
        windowSource:'iframe',
        windowPadding:0,
        loader:1,
        loaderHeight:16,
        loaderWidth:17,
        windowSourceAttrURL:'title'
    });

    $('#toggleCustom').toggle(function() {

        var $this = $(this),
            $domtree = $this.parents('div.section').find('div.domtree'),
            query = $this.prev().val();

        $domtree.find(query).addClass('highlight').animate({ marginLeft: 10}, 'fast');
    }, function() {

        var $this = $(this),
            $domtree = $this.parents('div.section').find('div.domtree'),
            query = $this.prev().val();
        $domtree.find(query).removeClass('highlight').animate({ marginLeft: 0}, 'fast');
    });

});


$(document).ready(function() {
    $('input[id!="toggleCustom"]:submit').toggle(function() {
        var $this = $(this),
            $domtree = $this.parents('div.section').find('div.domtree'),
            query = $this.prev().find('span.querystring').text();
        $domtree.find(query).addClass('highlight')
            .animate({ marginLeft: 10}, 'fast');
    }, function() {
        var $this = $(this),
            $domtree = $this.parents('div.section').find('div.domtree'),
            query = $this.prev().find('span.querystring').text();
        $domtree.find(query).removeClass('highlight')
            .animate({ marginLeft: 0}, 'fast');
    });
});


$("code").on({
    mouseenter: function(){
        $(this).css("background-color.md", "lightgray");
    },
    mouseleave: function(){
        $(this).css("background-color.md", "lightblue");
    },
    click: function(){
        $(this).css("background-color.md", "yellow");
    }
});
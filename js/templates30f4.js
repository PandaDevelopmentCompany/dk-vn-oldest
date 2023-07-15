// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function($){
	
	
	//	îïðåäåëåíèå øèðèíû è âûñîòû îêíà
	
	function  getPageSize(){
       var xScroll, yScroll;
 
       if (window.innerHeight && window.scrollMaxY) {
               xScroll = document.body.scrollWidth;
               yScroll = window.innerHeight + window.scrollMaxY;
       } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
               xScroll = document.body.scrollWidth;
               yScroll = document.body.scrollHeight;
       } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){ // Explorer 6 strict mode
               xScroll = document.documentElement.scrollWidth;
               yScroll = document.documentElement.scrollHeight;
       } else { // Explorer Mac...would also work in Mozilla and Safari
               xScroll = document.body.offsetWidth;
               yScroll = document.body.offsetHeight;
       }
 
       var windowWidth, windowHeight;
       if (self.innerHeight) { // all except Explorer
               windowWidth = self.innerWidth;
               windowHeight = self.innerHeight;
       } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
               windowWidth = document.documentElement.clientWidth;
               windowHeight = document.documentElement.clientHeight;
       } else if (document.body) { // other Explorers
               windowWidth = document.body.clientWidth;
               windowHeight = document.body.clientHeight;
       }
 
       // for small pages with total height less then height of the viewport
       if(yScroll < windowHeight){
               pageHeight = windowHeight;
       } else {
               pageHeight = yScroll;
       }
 
       // for small pages with total width less then width of the viewport
       if(xScroll < windowWidth){
               pageWidth = windowWidth;
       } else {
               pageWidth = xScroll;
       }
 
       return [pageWidth,pageHeight,windowWidth,windowHeight];
	}
	
	function screenHeight(){
		return $.browser.opera? window.innerHeight : $(window).height();
	}
	
	
	
	
	
	
	//	êîëîíêè
	
	$('.com_services .text a:odd').addClass('bg');
	
	//	òàáëèöà
	
	//var tbl = $('table.tbl');
	
	$('table.tbl').find('td:first').closest('tr').find('td').addClass('bdr_top');
	
	function asBody(){
		$('.as_body').height($('#wrap').height());
	}
	
	$(window).resize(
		function(){
			asBody();
		}
	);
	
	asBody();
	
	if(window.attachEvent) {
		window.attachEvent('onload', asBody);
	} else {
		if(window.onload) {
			var curronload = window.onload;
			var newonload = function() {
				curronload();
				asBody();
			};
			window.onload = newonload;
		} else {
			window.onload = asBody;
		}
	}
	
	
	

	
	
	$('.dots tr:has(td)').hover(
		function(){	
			$(this).addClass('over');
		},function(){	
			$(this).removeClass('over');
		}
	);
	
	$.datepicker.regional['ru'] = {
		clearText: 'Î÷èñòèòü', clearStatus: '',
		closeText: 'Çàêðûòü', closeStatus: '',
		prevText: '<Ïðåä',  prevStatus: '',
		nextText: 'Ñëåä>', nextStatus: '',
		currentText: 'Ñåãîäíÿ', currentStatus: '',
		monthNames: ['ßíâàðü','Ôåâðàëü','Ìàðò','Àïðåëü','Ìàé','Èþíü','Èþëü','Àâãóñò','Ñåíòÿáðü','Îêòÿáðü','Íîÿáðü','Äåêàáðü'],
		monthNamesShort: ['ßíâ','Ôåâ','Ìàð','Àïð','Ìàé','Èþí','Èþë','Àâã','Ñåí','Îêò','Íîÿ','Äåê'],
		monthStatus: '', yearStatus: '',
		weekHeader: 'Íå', weekStatus: '',
		dayNames: ['âîñêðåñåíüå','ïîíåäåëüíèê','âòîðíèê','ñðåäà','÷åòâåðã','ïÿòíèöà','ñóááîòà'],
		dayNamesShort: ['âñê','ïíä','âòð','ñðä','÷òâ','ïòí','ñáò'],
		dayNamesMin: ['Âñ','Ïí','Âò','Ñð','×ò','Ïò','Ñá'],
		dayStatus: 'DD', dateStatus: 'D, M d',
		dateFormat: 'dd-mm-yy', 
		firstDay: 1, 
		initStatus: '', 
		isRTL: false
	}; 	
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$.timepicker.regional['ru'] = {
		timeOnlyTitle: 'Âûáåðèòå âðåìÿ',
		timeText: 'Âðåìÿ',
		hourText: '×àñû',
		minuteText: 'Ìèíóòû',
		secondText: 'Ñåêóíäû',
		millisecText: 'ìèëëèñåêóíäû',
		currentText: 'Ñåé÷àñ',
		closeText: 'Ãîòîâî',
		ampm: false
	};
	$.timepicker.setDefaults($.timepicker.regional['ru']);
	
	
	$('.callback').click(function(){
		$('body').append('<div class="feed_popup center_popup" id="callback"><form action="" method="post"><input type="hidden" name="callback" value="1" />	<div class="clear"><h3 class="feed_title">Îáðàòíûé çâîíîê</h3><div class="close"></div></div><div class="clear"><div class="field"><p>Âàøå èìÿ:</p><input type="text" name="name" id="name" /></div><div class="field"><p>Âàø òåëåôîí:</p><input type="text" name="phone" id="phone" /></div></div><span id="span_callback"></span><div class="clear">	<input type="submit" class="send" /></div></form></div>');
		$('.feed_bg').show();
		$('#callback').show();
	});
	
	$('.key').click(function(){
		$('body').append('<div class="feed_popup login_popup" id="callback"><form action="" method="post"><input type="hidden" name="auth" value="1"> <div class="clear"><div class="close"></div></div><div class="clear"><div class="field_login"><p>ëîãèí:</p><input type="text" name="login"><p>ïàðîëü:</p><input type="password" name="pass"></div></div><div class="clear"><input type="submit" class="login_btn"></div></form></div>');
		$('.feed_bg').show();
		$('#callback').show();
	});
	
	$(document).on( "click", '.close', function(){				
		$('.feed_bg').hide();
		$('.feed_popup').hide();
		$('#warning-message').hide();
	});
	
	$("a.box").fancybox({
		imageScale: true,
		padding: 0,
	})
	
	
	
	
	
});
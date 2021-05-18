function swfA(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'" id="makeup_box">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="quality" value="high">';
		html += '<param name="wmode" value="transparent">';
	html += '<embed src="'+src+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" id="makeup_box"></embed>';
	html += '</object>';
	document.write(html);
}

function swfB(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="quality" value="high">';
	html += '<param name="wmode" value="transparent">';
	html += '<embed src="'+src+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>';
	html += '</object>';
	document.write(html);
}

function swfC(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name=wmode value=transparent>';
	html += '<param name="bgcolor" value="#F8F7F5">';
	html += '<embed src="'+src+'" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>';
	html += '</object>';
	document.write(html);
}

function swfD(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<embed src="'+src+'" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>';
	html += '</object>';
	document.write(html);
}

function swfE(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'" VIEWASTEXT style="z-index:-1;">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="wmode" value="transparent">';
	html += '<embed src="'+src+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"</embed>';
	html += '</object>';
	document.write(html);
}

function swfF(src)
{
	html = '';
	html += '<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" width=214 height=158 id="movie">';
	html += '<param name="Filename" value="' + src + '">';
	html += '<param name="TransparentAtStart" value="1">';
	html += '<param name="ShowControls" value="0">';
	html += '<param name="ShowDisplay" value="0">';
	html += '<param name="ShowStatusBar" value="0">';
	html += '<param name="AutoSize" value="0">';
	html += '<param name="loop" value="no">';
	html += '<param name="AutoStart" value="0">';
	html += '</object>';
	document.write(html);
}

function swfG(src, w, h)
{
	html = '';
	html += '<embed src="' + src + '" width="'+w+'" height="'+h+'">';
	document.write(html);
}

function swfH(src, w, h)
{
	html = '';
	html += '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" WIDTH="'+w+'" HEIGHT="'+h+'">';
	html += '<PARAM NAME=movie VALUE="'+src+'">';
	html += '<PARAM NAME=quality VALUE=high>';
	html += '<PARAM NAME=menu VALUE=false>';
	html += '<PARAM NAME=bgcolor VALUE=#FFFFFF>';
	html += '<EMBED src="'+src+'" quality=high bgcolor=#FFFFFF  WIDTH="'+w+'" HEIGHT="'+h+'" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>';
	html += '</OBJECT>';
	document.write(html);
}

function swfI(src, w, h)
{
	html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'" VIEWASTEXT ID="Object1">';
	html += '<param name="movie" value="'+src+'">';
	html += '<embed src="'+src+'" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>';
	html += '</object>';
	document.write(html);
}

function swfJ(src)
{
	html = '';
	html += '<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" width=224 height=203 id="movie">';
	html += '<param name="filename" value="'+src+'">';
	html += '<param name="transparentatstart" value="1">';
	html += '<param name="showcontrols" value="0">';
	html += '<param name="showdisplay" value="0">';
	html += '<param name="showstatusbar" value="0">';
	html += '<param name="autosize" value="0">';
	html += '<param name="loop" value="no">';
	html += '<param name="autostart" value="0">';
	html += '</object>';
	document.write(html);
}

function swfK(src, w, h)
{
	html = '';
	html += '<embed src="'+src+'" width="'+w+'" height="'+h+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"></embed>';
	document.write(html);
}


<!--
	function toggleSub(obj)
	{
		var tempObj1 = eval("document.getElementById(\"" + obj + "\");");
		var tempObj2 = eval("document.getElementById(\"" + obj + "Value\");");
		var tempObj3 = eval("document.getElementById(\"" + obj + "btn\");");
		var img1 = "img/sch_ico5.gif";
		var img2 = "img/sch_ico5.gif";

		if(obj == "family1")
		{
			tempObj2.style.pixelTop = 478;
		}

		if(tempObj2.style.display != "none")
		{
			tempObj2.style.display = "none";
			tempObj3.src = img1;
		}
		else
		{
			tempObj2.style.display = "inline";
			tempObj3.src = img2;
		}
	}

	function selectItem(obj1, obj2, str)
	{
		var tempObj = eval("document.getElementById(\"" + obj2 + "\");");
		tempObj.innerText = str;
		toggleSub(obj1);
	}

	function temp()
	{
		document.getElementById("lists1").innerText = "000000";
	}

	function toggleBg(obj, oType)
	{
		var color1 = "#ECECEC";
		var color2 = "#ECECEC";

		if(oType == 1)
		{
			obj.style.backgroundColor = color1;
		}
		else
		{
			obj.style.backgroundColor = color2;
		}
	}

	function checkSearchForm(form)
	{
		if(!form.sfield0.value && !form.sfield1.value)
		{
			alert("검색조건을 선택하여 주십시오");
			document.getElementById("lists1").focus();
			return false;
		}
		return true;
	}

//-->



function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->

var old_menu = '';
	function menuclick( submenu)
	{
		if( old_menu != submenu ) {
			if( old_menu !='' ) {
				old_menu.style.display = 'none';
			}
			submenu.style.display = 'block';
			old_menu = submenu;

		} else {
			submenu.style.display = 'none';
			old_menu = '';
		}
	}

function showTabLevel(i){
	if(i ==0){
		Faq01.style.display = "";
		Faq02.style.display="none";
		Faq03.style.display="none";
		Faq04.style.display="none";

		Faq01Tab.style.display = "";
		Faq02Tab.style.display="none";
		Faq03Tab.style.display="none";
		Faq04Tab.style.display="none";

	}else if(i == 1){
		Faq01.style.display ="none";
		Faq02.style.display="";
		Faq03.style.display="none";
		Faq04.style.display="none";

		Faq01Tab.style.display = "none";
		Faq02Tab.style.display="";
		Faq03Tab.style.display="none";
		Faq04Tab.style.display="none";

	}else if(i == 2){
		Faq01.style.display ="none";
		Faq02.style.display="none";
		Faq03.style.display="";
		Faq04.style.display="none";

		Faq01Tab.style.display = "none";
		Faq02Tab.style.display="none";
		Faq03Tab.style.display="";
		Faq04Tab.style.display="none";


	}else if(i == 3){
		Faq01.style.display ="none";
		Faq02.style.display="none";
		Faq03.style.display="none";
		Faq04.style.display="";


		Faq01Tab.style.display = "none";
		Faq02Tab.style.display="none";
		Faq03Tab.style.display="none";
		Faq04Tab.style.display="";


	}
}

function defaultView(defaultValue){
	AllOption.style.display = "";
					Gap.style.display = "";
					ActionReview.style.display = "";
					TransferLevel.style.display ="none";
					Review.style.display = "";
}

function defaultView(){
		Layer1.style.display = "none";
		Layer2.style.display = "none";
		Layer3.style.display ="";
		Tablevel1.style.display = "none";
		Tablevel2.style.display = "none";
		Tablevel3.style.display ="";
}

function LayerSH(LayerName,Status)
{
	LayerN = document.all[LayerName].style;
	if (Status == 'show') LayerN.display = '';
	if (Status == 'hide') LayerN.display = 'none';
	return false;
}

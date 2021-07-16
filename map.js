  function goToProvince(provinceName)
    {
        window.location.href = "nepal.html" + provinceName;
    }

var boxlist=document.querySelectorAll("svg > g");
var mypopup=document.getElementById("mypopup");
for(let index=0;index<boxlist.length;index++){boxlist[index].addEventListener('mouseover',function(event){showPopup(boxlist[index],index)})
boxlist[index].addEventListener('mouseout',function(event){hidePopup()})}
function showPopup(box,index){var boxDefinition=box.getBoundingClientRect();
  mypopup.style.display="block";
  if(index==0){mypopup.style.left=((boxDefinition.left))+"px";
  mypopup.style.top=(window.scrollY+boxDefinition.top-20)+"px";
  mypopup.innerHTML="प्रदेश १ (Province 1)"}else if(index==1){mypopup.style.top=((window.scrollY+boxDefinition.top-30))+"px";
  mypopup.innerHTML="प्रदेश २ (Province 2)"}else if(index==2){mypopup.style.top=(window.scrollY+boxDefinition.top-30)+"px";
  mypopup.style.left=((boxDefinition.left)+20)+"px";
  mypopup.innerHTML="प्रदेश ३ (Province 3)"}else if(index==3){mypopup.style.top=(window.scrollY+boxDefinition.top-30)+"px";
  mypopup.style.left=((boxDefinition.left)+20)+"px";
  mypopup.innerHTML="प्रदेश ४ (Province 4)"}else if(index==4){mypopup.style.top=(window.scrollY+boxDefinition.top)+"px";
  mypopup.style.left=((boxDefinition.left)+20)+"px";
  mypopup.innerHTML="प्रदेश ५ (Province 5)"}else if(index==5){mypopup.style.top=(window.scrollY+boxDefinition.top-30)+"px";
  mypopup.style.left=((boxDefinition.left)+20)+"px";
  mypopup.innerHTML="प्रदेश ७ (Province 7)"}else if(index==6){mypopup.style.top=((window.scrollY+boxDefinition.top)-30)+"px";
  mypopup.style.left=((boxDefinition.left)+20)+"px";
  mypopup.innerHTML="कर्णाली प्रदेश (karnali province)"}}
function hidePopup(){mypopup.style.display="none"}


//seach animation

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

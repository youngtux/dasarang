
var accordionItems = new Array();

function init() {

  // Grab the accordion items from the page
  var divs = document.getElementsByTagName( 'div' );
  for ( var i = 0; i < divs.length; i++ ) {
    if ( divs[i].className == 'accordionItem' ) accordionItems.push( divs[i] );
  }

  // Assign onclick events to the accordion item headings
  for ( var i = 0; i < accordionItems.length; i++ ) {
    var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
    h2.onclick = toggleItem;
  }

  // Hide all accordion item bodies
  for ( var i = 0; i < accordionItems.length; i++ ) {
    accordionItems[i].className = 'accordionItem hide';
    $(accordionItems[i]).find('div').slideUp();
  }
}

function toggleItem() {
  var itemClass = this.parentNode.className;

  // Hide all items
  for ( var i = 0; i < accordionItems.length; i++ ) {
    accordionItems[i].className = 'accordionItem hide';
    $(accordionItems[i]).find('div').slideUp();
  }

  // Show this item if it was previously hidden
  if ( itemClass == 'accordionItem hide' ) {
    this.parentNode.className = 'accordionItem';
    $(this).parent().find('div').slideDown();
  }
}

function getFirstChildWithTagName( element, tagName ) {
  for ( var i = 0; i < element.childNodes.length; i++ ) {
    if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
  }
}

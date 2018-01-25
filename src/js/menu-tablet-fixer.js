/******************************************************
*                                                     *
*   Menu Tablet Fixer - Atom for Gantry               *
*                                                     *
*   Purpose: This project fixes the default menu      *
*            behavior for large touch devices.        *
*            The first tap on a menu with sub items   *
*            expands the menu, while the second       *
*            tap opens the deposited link.            *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*                                                     *
******************************************************/

jQuery(document).ready(function($) {
    var sel = ".g-main-nav.g-menu-hastouch %s > li > a";
	var topSel = sel.replace("%s", ".g-toplevel");
	var subSel = sel.replace("%s", ".g-sublevel");
	var subMenuSel = "li > ul.g-active";
	var openClass = "g-touch-open";
    
	$(topSel + ", " + subSel).click(function(e) {
			var subItem = $(this).parent().children(subMenuSel);
			if(subItem.length > 0){
				if(!subItem.hasClass(openClass) ){
					$("." + openClass).removeClass(openClass);
					subItem.addClass(openClass);
					e.preventDefault();
				}else{
					subItem.removeClass(openClass);
				}
			}
	});
});




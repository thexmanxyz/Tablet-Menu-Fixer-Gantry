/******************************************************
*                                                     *
*   Menu Tablet Fixer - Atom for Gantry               *
*                                                     *
*   Purpose: This project fixes the default menu      *
*            behavior for large touch devices.        *
*            The first tap on a menu with sub items   *
*            expands the menu, while the second       *
*            tap opens the underlying link.           *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*                                                     *
******************************************************/

jQuery(window).load(function () {
    var openCls = "g-touch-open";
    var activeCls = "g-active";
    var selectedCls = "g-selected";
    var topCls = "g-toplevel";
    var subCls = "g-sublevel";
    var mainNavCls = "g-main-nav";
    var menuTouchCls = "g-menu-hastouch";
    
    var openSel = "." + openCls;
    var activeSel = "." + activeCls;
    var selectedSel = "." + selectedCls;
    var topSel = "." + topCls;
    var subSel = "." + subCls;
    var mainNavSel = "." + mainNavCls;
    var menuTouchSel = "." + menuTouchCls;
    
    var activeSel = "li > ul" + activeSel;
    var menuSel = mainNavSel + menuTouchSel + " %s > li > a";
    
    jQuery(menuSel.replace("%s", topSel) + ", " + menuSel.replace("%s", subSel)).click(function(e) {
            var subItem = jQuery(this).parent().children(activeSel);
            var deselect = function(cls, selector){
                jQuery(selector).each(function() {
                    $this = jQuery(this);    
                    if (!$this.parents(openSel).length && !$this.find(openSel).length && !$this.hasClass(openCls))
                             $this.removeClass(cls);
                });
            };
            
            if(subItem.length > 0){
                if(!subItem.hasClass(openCls) ){
                    jQuery(openSel).removeClass(openCls);
                    subItem.addClass(openCls);
                    deselect(topSel + " " + activeCls, activeSel);
                    deselect(topSel + " " + selectedCls, selectedSel);
                    e.preventDefault();
                }else{
                    subItem.removeClass(openCls);
                }
            }
    });
});
